#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const PAGES_DIR = path.join(__dirname, '../src/pages');
const TOOLS_FILE = path.join(__dirname, '../src/data/tools.js');

// 页面类型对应的默认SEO设置
const DEFAULT_SEO = {
  'home-page': {
    title: 'Util.cn - 开发者效率工具箱',
    description: '无广告 · 纯本地计算 · 即开即用的在线工具平台，提供JSON格式化、Base64编码、时间戳转换等实用开发工具'
  },
  'tool-page': {
    description: '免费在线工具，无广告，纯本地计算，数据安全可靠'
  },
  'static-page': {
    description: 'Util.cn 提供的实用工具集合页面'
  },
  'root-page': {
    description: 'Util.cn 开发者效率工具箱页面'
  },
  'dynamic-page': {
    description: 'Util.cn 动态工具页面'
  }
};

// 读取工具数据 - 由于是ES模块，需要先读取文件内容
const toolsContent = fs.readFileSync(TOOLS_FILE, 'utf8');
const toolsMatch = toolsContent.match(/export const tools = (\[[\s\S]*?\]);?/);
if (!toolsMatch) {
  console.error('无法解析工具数据');
  process.exit(1);
}
const toolsData = eval(toolsMatch[1]);

// 获取工具信息
function getToolInfo(filePath) {
  const relativePath = path.relative(PAGES_DIR, filePath);
  const pathMatch = relativePath.match(/tools\/(.+?)\.vue$/);

  if (pathMatch) {
    const toolId = pathMatch[1];
    const tool = toolsData.find(t => t.id === toolId);

    if (tool) {
      return {
        name: tool.name,
        description: tool.description || tool.shortDescription || '',
        category: tool.category
      };
    }
  }

  return null;
}

// 获取页面标题
function getPageTitle(content) {
  const titleMatch = content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/);
  if (titleMatch) {
    return titleMatch[1].replace(/<[^>]*>/g, '').trim();
  }
  return null;
}

// 生成SEO代码
function generateSEOCode(pageType, pageInfo, filePath) {
  let title = pageInfo.title;
  let description = pageInfo.description;

  if (pageType === 'tool-page') {
    const toolInfo = getToolInfo(filePath);
    if (toolInfo) {
      title = toolInfo.name || title;
      description = toolInfo.description || description;
    }

    return `
import { useSEO } from '~/composables/useSEO'

// 使用SEO composable设置页面标题
const { setPageTitle } = useSEO()
setPageTitle('${title}')`;
  }

  return `
import { useSEO } from '~/composables/useSEO'

// 使用SEO composable设置页面标题
const { setPageTitle } = useSEO()
setPageTitle('${title}')`;
}

// 检查文件是否已有SEO设置
function hasSEO(content) {
  return content.includes('useSEO(') ||
         content.includes('setPageTitle') ||
         (content.includes('useHead(') && content.includes('title:'));
}

// 修复单个文件
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    if (hasSEO(content)) {
      return { fixed: false, reason: '已有SEO设置' };
    }

    // 获取页面类型
    const relativePath = path.relative(PAGES_DIR, filePath);
    let pageType = 'static-page';

    if (relativePath === 'index.vue') {
      pageType = 'home-page';
    } else if (relativePath.includes('tools/')) {
      pageType = 'tool-page';
    } else if (relativePath.includes('[category]') || relativePath.includes('[id]')) {
      pageType = 'dynamic-page';
    } else if (!relativePath.includes('/')) {
      pageType = 'root-page';
    }

    // 获取页面标题
    const pageTitle = getPageTitle(content) || DEFAULT_SEO[pageType].title;

    // 获取默认描述
    const defaultDescription = DEFAULT_SEO[pageType].description;

    // 查找script setup位置
    const scriptSetupMatch = content.match(/<script\s+setup[^>]*>/);
    if (!scriptSetupMatch) {
      return { fixed: false, reason: '未找到script setup' };
    }

    // 生成SEO代码
    const seoCode = generateSEOCode(pageType, {
      title: pageTitle,
      description: defaultDescription
    }, filePath);

    // 在definePageMeta之后插入SEO代码
    const insertPosition = content.indexOf('definePageMeta({');
    let newContent;

    if (insertPosition !== -1) {
      const endOfDefinePageMeta = content.indexOf('})', insertPosition) + 2;
      newContent = content.slice(0, endOfDefinePageMeta) +
                  '\n' + seoCode + '\n' +
                  content.slice(endOfDefinePageMeta);
    } else {
      // 如果没有definePageMeta，在script setup后插入
      const position = scriptSetupMatch.index + scriptSetupMatch[0].length;
      newContent = content.slice(0, position) +
                  '\n' + seoCode + '\n' +
                  content.slice(position);
    }

    // 写入文件
    fs.writeFileSync(filePath, newContent, 'utf8');

    return {
      fixed: true,
      type: pageType,
      title: pageTitle,
      description: defaultDescription
    };

  } catch (error) {
    return { fixed: false, reason: error.message };
  }
}

// 批量修复工具页面
function fixToolPages() {
  // 重新读取工具数据
  const toolsContent = fs.readFileSync(TOOLS_FILE, 'utf8');
  const toolsMatch = toolsContent.match(/export const tools = (\[[\s\S]*?\]);?/);
  if (!toolsMatch) {
    console.error('无法解析工具数据');
    return { total: 0, success: 0, failed: 0 };
  }
  const toolsData = eval(toolsMatch[1]);
  const fixedCount = { total: 0, success: 0, failed: 0 };

  console.log('🔧 开始修复工具页面SEO...\n');

  for (const tool of toolsData) {
    const toolPath = path.join(PAGES_DIR, 'tools', `${tool.id}.vue`);

    if (fs.existsSync(toolPath)) {
      fixedCount.total++;
      const result = fixFile(toolPath);

      if (result.fixed) {
        console.log(`✅ tools/${tool.id}.vue - ${result.title}`);
        fixedCount.success++;
      } else {
        console.log(`❌ tools/${tool.id}.vue - ${result.reason}`);
        fixedCount.failed++;
      }
    } else {
      console.log(`⚠️  tools/${tool.id}.vue - 文件不存在`);
    }
  }

  return fixedCount;
}

// 修复静态页面
function fixStaticPages() {
  const staticPages = [
    'index.vue',
    'about.vue',
    'privacy.vue',
    'terms.vue',
    'cookie.vue',
    'faq.vue',
    'feedback.vue',
    'explore.vue',
    'favorites.vue',
    'recent.vue',
    'download.vue'
  ];

  const fixedCount = { total: 0, success: 0, failed: 0 };

  console.log('📄 开始修复静态页面SEO...\n');

  for (const page of staticPages) {
    const pagePath = path.join(PAGES_DIR, page);

    if (fs.existsSync(pagePath)) {
      fixedCount.total++;
      const result = fixFile(pagePath);

      if (result.fixed) {
        console.log(`✅ ${page} - ${result.title}`);
        fixedCount.success++;
      } else {
        console.log(`❌ ${page} - ${result.reason}`);
        fixedCount.failed++;
      }
    }
  }

  return fixedCount;
}

// 修复分类页面
function fixCategoryPages() {
  const categories = ['ai', 'all', 'crypto', 'dev', 'encode', 'format', 'image', 'network', 'text', 'time'];
  const fixedCount = { total: 0, success: 0, failed: 0 };

  console.log('📂 开始修复分类页面SEO...\n');

  for (const category of categories) {
    const categoryPath = path.join(PAGES_DIR, 'category', category, 'index.vue');

    if (fs.existsSync(categoryPath)) {
      fixedCount.total++;
      const result = fixFile(categoryPath);

      if (result.fixed) {
        console.log(`✅ category/${category}/index.vue - ${result.title}`);
        fixedCount.success++;
      } else {
        console.log(`❌ category/${category}/index.vue - ${result.reason}`);
        fixedCount.failed++;
      }
    }
  }

  return fixedCount;
}

// 主函数
function main() {
  console.log('🚀 开始批量修复SEO设置...\n');

  // 创建备份
  const backupDir = path.join(__dirname, '../backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(backupDir, `pages-backup-${timestamp}`);

  console.log('📦 创建备份到:', backupPath);

  // 使用cp命令创建备份（跨平台兼容）
  const { execSync } = require('child_process');
  try {
    if (process.platform === 'win32') {
      execSync(`xcopy "${PAGES_DIR}" "${backupPath}" /E /I /H /Y`);
    } else {
      execSync(`cp -r "${PAGES_DIR}" "${backupPath}"`);
    }
    console.log('✅ 备份完成\n');
  } catch (error) {
    console.log('⚠️  备份失败，但继续执行修复...\n');
  }

  // 修复各类页面
  const toolResults = fixToolPages();
  console.log();
  const staticResults = fixStaticPages();
  console.log();
  const categoryResults = fixCategoryPages();

  // 统计结果
  const totalFixed = toolResults.success + staticResults.success + categoryResults.success;
  const totalFailed = toolResults.failed + staticResults.failed + categoryResults.failed;
  const totalProcessed = toolResults.total + staticResults.total + categoryResults.total;

  console.log('\n' + '='.repeat(50));
  console.log('📊 修复结果统计:');
  console.log(`总处理文件: ${totalProcessed}`);
  console.log(`修复成功: ${totalFixed}`);
  console.log(`修复失败: ${totalFailed}`);
  console.log(`成功率: ${((totalFixed / totalProcessed) * 100).toFixed(1)}%`);

  console.log('\n📋 分类统计:');
  console.log(`工具页面: ${toolResults.success}/${toolResults.total} 成功`);
  console.log(`静态页面: ${staticResults.success}/${staticResults.total} 成功`);
  console.log(`分类页面: ${categoryResults.success}/${categoryResults.total} 成功`);

  if (totalFailed > 0) {
    console.log('\n⚠️  有部分文件修复失败，请检查错误信息');
  }

  console.log('\n✨ 批量修复完成！');
  console.log('💡 建议重新运行检查脚本验证修复结果: node scripts/check-seo.js');
}

// 运行修复
if (require.main === module) {
  main();
}