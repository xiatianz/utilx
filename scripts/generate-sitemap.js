#!/usr/bin/env node

/**
 * 动态生成 sitemap.xml 文件
 * 扫描 src/pages 目录并生成完整的站点地图
 */

const fs = require('fs');
const path = require('path');

// 配置
const config = {
  baseUrl: 'https://www.util.cn',
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  pagesDir: path.join(__dirname, '../src/pages'),
  currentDate: new Date().toISOString().split('T')[0], // 格式: YYYY-MM-DD
  defaultPriority: {
    // 默认优先级配置
    '/': 1.0,
    '/about': 0.8,
    '/faq': 0.8,
    '/feedback': 0.6,
    '/download': 0.6,
    '/privacy': 0.5,
    '/terms': 0.5,
    '/cookie': 0.5,
    '/settings/notifications': 0.6,
    // 分类页面
    '/ai': 0.9,
    '/all': 0.9,
    '/category/ai': 0.8,
    '/category/all': 0.8,
    '/category/calculate': 0.8,
    '/category/crypto': 0.8,
    '/category/design': 0.8,
    '/category/dev': 0.8,
    '/category/encode': 0.8,
    '/category/finance': 0.8,
    '/category/format': 0.8,
    '/category/health': 0.8,
    '/category/image': 0.8,
    '/category/network': 0.8,
    '/category/others': 0.8,
    '/category/random': 0.8,
    '/category/security': 0.8,
    '/category/text': 0.8,
    '/category/time': 0.8,
    // 工具页面默认优先级
    '/tools': 0.7,
  },
  defaultChangeFreq: {
    // 默认更新频率
    '/': 'daily',
    '/all': 'daily',
    '/recent': 'daily',
    '/explore': 'weekly',
    '/favorites': 'weekly',
    '/ai': 'weekly',
    '/crypto': 'weekly',
    '/dev': 'weekly',
    '/encode': 'weekly',
    '/format': 'weekly',
    '/image': 'weekly',
    '/network': 'weekly',
    '/text': 'weekly',
    '/time': 'weekly',
    '/category/ai': 'weekly',
    '/category/all': 'weekly',
    '/category/calculate': 'weekly',
    '/category/crypto': 'weekly',
    '/category/design': 'weekly',
    '/category/dev': 'weekly',
    '/category/encode': 'weekly',
    '/category/finance': 'weekly',
    '/category/format': 'weekly',
    '/category/health': 'weekly',
    '/category/image': 'weekly',
    '/category/network': 'weekly',
    '/category/others': 'weekly',
    '/category/random': 'weekly',
    '/category/security': 'weekly',
    '/category/text': 'weekly',
    '/category/time': 'weekly',
    // 工具页面
    '/tools': 'monthly',
  }
};

/**
 * 递归扫描页面目录
 */
function scanPages(dir, basePath = '') {
  const pages = [];

  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        // 递归扫描子目录
        const subPages = scanPages(itemPath, path.join(basePath, item));
        pages.push(...subPages);
      } else if (item.endsWith('.vue')) {
        // 处理 Vue 文件
        let pagePath = basePath;

        // 处理文件名
        const fileName = item.replace('.vue', '');

        if (fileName === 'index') {
          // index.vue 文件，路径就是当前目录
          if (!pagePath) {
            pagePath = '/'; // 根目录的 index.vue
          }
        } else if (fileName.startsWith('[') && fileName.endsWith(']')) {
          // 动态路由，跳过
          continue;
        } else {
          // 普通页面
          pagePath = path.join(pagePath, fileName);
        }

        // 转换为 URL 路径
        const urlPath = pagePath.replace(/\\/g, '/');
        if (urlPath && urlPath !== '/404' && urlPath !== '/500') {
          pages.push(urlPath);
        }
      }
    }
  } catch (error) {
    console.error(`扫描目录失败 ${dir}:`, error.message);
  }

  return pages;
}

/**
 * 获取页面的优先级
 */
function getPriority(path) {
  // 直接匹配
  if (config.defaultPriority[path] !== undefined) {
    return config.defaultPriority[path];
  }

  // 前缀匹配
  for (const [prefix, priority] of Object.entries(config.defaultPriority)) {
    if (path.startsWith(prefix)) {
      return priority * 0.9; // 子页面优先级略低于父页面
    }
  }

  // 默认优先级
  if (path.startsWith('/tools/')) {
    return 0.6; // 工具页面
  } else if (path.startsWith('/category/')) {
    return 0.7; // 分类页面
  } else {
    return 0.5; // 其他页面
  }
}

/**
 * 获取页面的更新频率
 */
function getChangeFreq(path) {
  // 直接匹配
  if (config.defaultChangeFreq[path] !== undefined) {
    return config.defaultChangeFreq[path];
  }

  // 前缀匹配
  for (const [prefix, freq] of Object.entries(config.defaultChangeFreq)) {
    if (path.startsWith(prefix)) {
      return freq;
    }
  }

  // 默认更新频率
  if (path.startsWith('/tools/')) {
    return 'monthly'; // 工具页面更新较少
  } else {
    return 'weekly'; // 其他页面
  }
}

/**
 * 生成 URL 节点
 */
function generateUrlNode(path) {
  const loc = config.baseUrl + (path === '/' ? '' : '/' + path);
  const priority = getPriority(path);
  const changefreq = getChangeFreq(path);

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${config.currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

/**
 * 生成完整的 sitemap.xml
 */
function generateSitemap() {
  console.log('开始生成 sitemap.xml...');

  // 扫描所有页面
  const pages = scanPages(config.pagesDir);

  // 按路径排序
  pages.sort();

  // 生成 XML 内容
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  // 添加所有 URL 节点
  for (const page of pages) {
    xml += generateUrlNode(page) + '\n\n';
  }

  xml += `</urlset>`;

  // 写入文件
  fs.writeFileSync(config.outputPath, xml, 'utf8');

  console.log(`✅ sitemap.xml 生成成功！`);
  console.log(`📍 路径: ${config.outputPath}`);
  console.log(`📄 总页面数: ${pages.length}`);
  console.log(`🗓️ 更新日期: ${config.currentDate}`);

  // 输出页面分类统计
  const stats = {
    root: 0,
    category: 0,
    tools: 0,
    other: 0
  };

  pages.forEach(page => {
    if (page === '/') {
      stats.root++;
    } else if (page.startsWith('/category/')) {
      stats.category++;
    } else if (page.startsWith('/tools/')) {
      stats.tools++;
    } else {
      stats.other++;
    }
  });

  console.log('\n📊 页面分类统计:');
  console.log(`   - 首页: ${stats.root}`);
  console.log(`   - 分类页面: ${stats.category}`);
  console.log(`   - 工具页面: ${stats.tools}`);
  console.log(`   - 其他页面: ${stats.other}`);
}

// 执行生成
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };