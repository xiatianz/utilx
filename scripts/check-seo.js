#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const PAGES_DIR = path.join(__dirname, '../src/pages');
const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const LAYOUTS_DIR = path.join(__dirname, '../src/layouts');

// 统计数据
const stats = {
  totalPages: 0,
  pagesWithSEO: 0,
  pagesWithoutSEO: 0,
  pagesWithHead: 0,
  pagesWithoutHead: 0,
  detailed: []
};

// 检查文件是否包含SEO相关代码
function checkSEOInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    const hasUseHead = content.includes('useHead(') || content.includes('useHead (');
    const hasUseSEOComposable = content.includes('useSEO') || content.includes('setPageTitle');
    const hasTitleInHead = content.includes('title:') && hasUseHead;
    const hasDescriptionInHead = content.includes('description:') && hasUseHead;
    const hasMetaDescription = content.includes('name: \'description\'') || content.includes('name: "description"');

    return {
      hasUseHead,
      hasUseSEOComposable,
      hasTitleInHead,
      hasDescriptionInHead,
      hasMetaDescription,
      content
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return null;
  }
}

// 递归获取所有vue文件
function getAllVueFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.vue')) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

// 分析页面类型
function getPageType(filePath) {
  const relativePath = path.relative(PAGES_DIR, filePath);

  if (relativePath.includes('tools/')) {
    return 'tool-page';
  } else if (relativePath.includes('[category]') || relativePath.includes('[id]')) {
    return 'dynamic-page';
  } else if (relativePath === 'index.vue') {
    return 'home-page';
  } else if (relativePath.includes('/')) {
    return 'static-page';
  } else {
    return 'root-page';
  }
}

// 检查文件
function checkFile(filePath) {
  const seoData = checkSEOInFile(filePath);
  if (!seoData) return;

  const pageType = getPageType(filePath);
  const relativePath = path.relative(PAGES_DIR, filePath);

  stats.totalPages++;

  const hasSEO = seoData.hasUseSEOComposable || (seoData.hasUseHead && seoData.hasTitleInHead);
  const hasHead = seoData.hasUseHead;

  if (hasSEO) {
    stats.pagesWithSEO++;
  } else {
    stats.pagesWithoutSEO++;
  }

  if (hasHead) {
    stats.pagesWithHead++;
  } else {
    stats.pagesWithoutHead++;
  }

  // 提取页面标题（如果有的话）
  let pageTitle = '未设置';
  const titleMatch = seoData.content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/);
  if (titleMatch) {
    pageTitle = titleMatch[1].replace(/<[^>]*>/g, '').trim();
  }

  stats.detailed.push({
    path: relativePath,
    type: pageType,
    hasSEO,
    hasHead,
    hasTitle: seoData.hasTitleInHead,
    hasDescription: seoData.hasDescriptionInHead || seoData.hasMetaDescription,
    pageTitle,
    recommendations: getRecommendations(pageType, seoData)
  });
}

// 获取建议
function getRecommendations(pageType, seoData) {
  const recommendations = [];

  if (!seoData.hasUseSEOComposable && !seoData.hasUseHead) {
    recommendations.push('添加 useHead() 或 useSEO() composable');
  }

  if (!seoData.hasTitleInHead && !seoData.hasUseSEOComposable) {
    recommendations.push('设置页面标题');
  }

  if (!seoData.hasDescriptionInHead && !seoData.hasMetaDescription) {
    recommendations.push('添加页面描述 meta 标签');
  }

  // 根据页面类型给出特定建议
  if (pageType === 'tool-page') {
    if (!seoData.hasUseSEOComposable) {
      recommendations.push('考虑使用 useSEO() 来设置工具页面标题');
    }
  }

  if (pageType === 'home-page') {
    if (!seoData.hasHead || !seoData.hasDescriptionInHead) {
      recommendations.push('首页应该有完整的 SEO 设置');
    }
  }

  return recommendations;
}

// 主函数
function main() {
  console.log('🔍 开始检查 SEO 设置...\n');

  // 检查所有页面
  const pageFiles = getAllVueFiles(PAGES_DIR);

  for (const file of pageFiles) {
    checkFile(file);
  }

  // 打印统计
  console.log('📊 统计结果:');
  console.log(`总页面数: ${stats.totalPages}`);
  console.log(`有 SEO 设置的页面: ${stats.pagesWithSEO} (${((stats.pagesWithSEO/stats.totalPages)*100).toFixed(1)}%)`);
  console.log(`缺少 SEO 设置的页面: ${stats.pagesWithoutSEO} (${((stats.pagesWithoutSEO/stats.totalPages)*100).toFixed(1)}%)`);
  console.log(`使用 useHead 的页面: ${stats.pagesWithHead}`);
  console.log(`未使用 useHead 的页面: ${stats.pagesWithoutHead}\n`);

  // 打印详细报告
  console.log('📋 详细报告:');
  console.log('=' .repeat(80));

  for (const item of stats.detailed) {
    const status = item.hasSEO ? '✅' : '❌';
    const typeIcon = {
      'home-page': '🏠',
      'tool-page': '🔧',
      'static-page': '📄',
      'dynamic-page': '🔄',
      'root-page': '📍'
    }[item.type] || '📄';

    console.log(`${status} ${typeIcon} ${item.path}`);
    console.log(`   类型: ${item.type}`);
    console.log(`   标题: ${item.pageTitle}`);
    console.log(`   SEO: ${item.hasSEO ? '✅ 已设置' : '❌ 未设置'}`);
    console.log(`   useHead: ${item.hasHead ? '✅ 已使用' : '❌ 未使用'}`);

    if (item.recommendations.length > 0) {
      console.log(`   建议:`);
      item.recommendations.forEach(rec => {
        console.log(`     • ${rec}`);
      });
    }

    console.log('');
  }

  // 生成需要修复的文件列表
  const needFix = stats.detailed.filter(item => !item.hasSEO);
  if (needFix.length > 0) {
    console.log('🔧 需要修复的文件:');
    console.log('=' .repeat(80));
    needFix.forEach(item => {
      console.log(`❌ ${item.path} - ${item.pageTitle}`);
    });
    console.log('');
  }

  // 生成修复建议
  console.log('💡 修复建议:');
  console.log('=' .repeat(80));
  console.log('1. 在页面组件中添加以下代码:');
  console.log(`
import { useSEO } from '~/composables/useSEO'

// 在 script setup 中
const { setPageTitle } = useSEO()
setPageTitle('页面标题')

// 或者使用 useHead
useHead({
  title: '页面标题 - Util.cn | 开发者效率工具箱',
  meta: [
    { name: 'description', content: '页面描述' }
  ]
})
  `);

  console.log('\n2. 对于工具页面，建议使用:');
  console.log(`
import { useSEO, generateToolPageTitle } from '~/composables/useSEO'

const { setPageTitle } = useSEO()
setPageTitle(generateToolPageTitle('工具名称', '工具描述'))
  `);

  console.log(`\n✨ 检查完成！发现 ${stats.pagesWithoutSEO} 个页面需要优化 SEO 设置。`);
}

// 运行检查
if (require.main === module) {
  main();
}

module.exports = { checkSEOInFile, getAllVueFiles };