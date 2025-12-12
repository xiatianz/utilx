#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const PAGES_DIR = path.join(__dirname, '../src/pages');

// 修复单个文件
function fixFile(filePath, defaultTitle, defaultDescription) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // 检查是否已有SEO设置
    if (content.includes('useSEO(') || content.includes('setPageTitle') ||
        (content.includes('useHead(') && content.includes('title:'))) {
      return { fixed: false, reason: '已有SEO设置' };
    }

    // 获取页面标题
    let pageTitle = defaultTitle;
    const titleMatch = content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/);
    if (titleMatch) {
      pageTitle = titleMatch[1].replace(/<[^>]*>/g, '').trim();
    }

    // 查找script setup位置
    const scriptSetupMatch = content.match(/<script\s+setup[^>]*>/);
    if (!scriptSetupMatch) {
      return { fixed: false, reason: '未找到script setup' };
    }

    // 生成SEO代码
    const seoCode = `
import { useSEO } from '~/composables/useSEO'

// 使用SEO composable设置页面标题
const { setPageTitle } = useSEO()
setPageTitle('${pageTitle}')`;

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
      title: pageTitle,
      description: defaultDescription
    };

  } catch (error) {
    return { fixed: false, reason: error.message };
  }
}

// 修复静态页面
function fixStaticPages() {
  const pages = [
    { file: 'index.vue', title: 'Util.cn - 开发者效率工具箱', desc: '无广告 · 纯本地计算 · 即开即用的在线工具平台，提供JSON格式化、Base64编码、时间戳转换等实用开发工具' },
    { file: 'about.vue', title: '关于我们', desc: '了解Util.cn - 致力于为开发者提供最优质的在线工具平台' },
    { file: 'privacy.vue', title: '隐私政策', desc: 'Util.cn隐私政策 - 我们重视并保护您的隐私数据' },
    { file: 'terms.vue', title: '服务条款', desc: 'Util.cn服务条款 - 使用本站服务的相关条款和条件' },
    { file: 'cookie.vue', title: 'Cookie政策', desc: 'Util.cn Cookie政策 - 了解我们如何使用Cookie' },
    { file: 'faq.vue', title: '常见问题', desc: 'Util.cn常见问题解答 - 快速解决您的使用疑问' },
    { file: 'feedback.vue', title: '提交反馈', desc: 'Util.cn用户反馈 - 我们重视您的每一条建议' },
    { file: 'explore.vue', title: '工具探索', desc: '探索Util.cn提供的各种实用工具' },
    { file: 'favorites.vue', title: '我的收藏', desc: '管理您收藏的实用工具，提高工作效率' },
    { file: 'recent.vue', title: '最近使用', desc: '查看您最近使用过的工具记录' },
    { file: 'download.vue', title: '下载Util.cn桌面版', desc: '下载Util.cn桌面应用程序，享受更便捷的使用体验' }
  ];

  const fixedCount = { total: 0, success: 0, failed: 0 };

  console.log('📄 开始修复静态页面SEO...\n');

  for (const page of pages) {
    const pagePath = path.join(PAGES_DIR, page.file);

    if (fs.existsSync(pagePath)) {
      fixedCount.total++;
      const result = fixFile(pagePath, page.title, page.desc);

      if (result.fixed) {
        console.log(`✅ ${page.file} - ${result.title}`);
        fixedCount.success++;
      } else {
        console.log(`❌ ${page.file} - ${result.reason}`);
        fixedCount.failed++;
      }
    } else {
      console.log(`⚠️  ${page.file} - 文件不存在`);
    }
  }

  return fixedCount;
}

// 修复分类页面
function fixCategoryPages() {
  const categories = [
    { name: 'ai', title: 'AI工具导航', desc: '探索各种AI智能工具，提升工作效率' },
    { name: 'all', title: '全部工具', desc: '浏览Util.cn提供的所有在线工具' },
    { name: 'crypto', title: '加密解密工具箱', desc: '提供各种加密解密、哈希计算等安全工具' },
    { name: 'dev', title: '开发辅助工具箱', desc: '为开发者提供代码格式化、API文档等实用工具' },
    { name: 'encode', title: '编码解码工具箱', desc: '各种编码格式转换工具，支持Base64、URL编码等' },
    { name: 'format', title: '数据格式化工具箱', desc: 'JSON、XML、YAML等数据格式美化与转换工具' },
    { name: 'image', title: '图像处理工具箱', desc: '图片压缩、裁剪、格式转换等在线图像处理工具' },
    { name: 'network', title: '网络工具箱', desc: 'DNS查询、端口检测、IP信息等网络诊断工具' },
    { name: 'text', title: '文本处理工具箱', desc: '文本对比、格式化、编码等文本处理工具' },
    { name: 'time', title: '时间日期工具箱', desc: '时间戳转换、时区计算、日期差值等时间工具' }
  ];

  const fixedCount = { total: 0, success: 0, failed: 0 };

  console.log('📂 开始修复分类页面SEO...\n');

  for (const category of categories) {
    const categoryPath = path.join(PAGES_DIR, 'category', category.name, 'index.vue');

    if (fs.existsSync(categoryPath)) {
      fixedCount.total++;
      const result = fixFile(categoryPath, category.title, category.desc);

      if (result.fixed) {
        console.log(`✅ category/${category.name}/index.vue - ${result.title}`);
        fixedCount.success++;
      } else {
        console.log(`❌ category/${category.name}/index.vue - ${result.reason}`);
        fixedCount.failed++;
      }
    } else {
      console.log(`⚠️  category/${category.name}/index.vue - 文件不存在`);
    }
  }

  return fixedCount;
}

// 主函数
function main() {
  console.log('🚀 开始批量修复SEO设置（简化版）...\n');

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

  // 修复静态页面
  const staticResults = fixStaticPages();
  console.log();
  const categoryResults = fixCategoryPages();

  // 统计结果
  const totalFixed = staticResults.success + categoryResults.success;
  const totalFailed = staticResults.failed + categoryResults.failed;
  const totalProcessed = staticResults.total + categoryResults.total;

  console.log('\n' + '='.repeat(50));
  console.log('📊 修复结果统计:');
  console.log(`总处理文件: ${totalProcessed}`);
  console.log(`修复成功: ${totalFixed}`);
  console.log(`修复失败: ${totalFailed}`);
  console.log(`成功率: ${((totalFixed / totalProcessed) * 100).toFixed(1)}%`);

  console.log('\n📋 分类统计:');
  console.log(`静态页面: ${staticResults.success}/${staticResults.total} 成功`);
  console.log(`分类页面: ${categoryResults.success}/${categoryResults.total} 成功`);

  if (totalFailed > 0) {
    console.log('\n⚠️  有部分文件修复失败，请检查错误信息');
  }

  console.log('\n✨ 批量修复完成！');
  console.log('💡 工具页面可以稍后手动添加或使用单独的脚本处理');
  console.log('💡 建议重新运行检查脚本验证修复结果: node scripts/check-seo.js');
}

// 运行修复
if (require.main === module) {
  main();
}