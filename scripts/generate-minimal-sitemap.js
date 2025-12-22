#!/usr/bin/env node

/**
 * 生成精简版 sitemap.xml，只包含重要页面
 * 用于构建时减少预渲染负担
 */

const fs = require('fs');
const path = require('path');

// 配置
const config = {
  baseUrl: 'https://www.util.cn',
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  currentDate: new Date().toISOString().split('T')[0],
};

// 只预渲染重要的页面
const importantPages = [
  '/',
  '/about',
  '/faq',
  '/privacy',
  '/terms',
  '/all',
  '/ai',
  '/crypto',
  '/dev',
  '/encode',
  '/format',
  '/image',
  '/network',
  '/text',
  '/time',
  '/tags',
  '/sitemap',
  // 只添加少量示例工具页面
  '/tools/json-formatter',
  '/tools/base64-encode',
  '/tools/password-generator',
  '/tools/qrcode-generate',
  '/tools/color-picker',
  '/tools/timestamp-convert',
];

/**
 * 生成 URL 节点
 */
function generateUrlNode(path, priority = 0.7, changefreq = 'weekly') {
  const loc = config.baseUrl + (path === '/' ? '' : '/' + path);

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${config.currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

/**
 * 生成精简的 sitemap.xml
 */
function generateMinimalSitemap() {
  console.log('开始生成精简版 sitemap.xml...');

  // 生成 XML 内容
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  // 首页
  xml += generateUrlNode('/', 1.0, 'daily') + '\n\n';

  // 重要页面
  importantPages.slice(1).forEach(page => {
    let priority = 0.7;
    let changefreq = 'weekly';

    // 根据页面类型调整优先级
    if (['/about', '/faq'].includes(page)) {
      priority = 0.8;
    } else if (['/privacy', '/terms'].includes(page)) {
      priority = 0.5;
      changefreq = 'monthly';
    } else if (page.startsWith('/tools/')) {
      priority = 0.6;
    }

    xml += generateUrlNode(page, priority, changefreq) + '\n\n';
  });

  // 添加站点地图索引说明
  xml += `  <!--
  注意：这是精简版 sitemap，只包含预渲染的页面。
  完整的站点地图包含所有工具页面，可通过动态路由访问。
  完整列表请访问: /sitemap 页面
  -->

</urlset>`;

  // 写入文件
  fs.writeFileSync(config.outputPath, xml, 'utf8');

  console.log(`✅ 精简版 sitemap.xml 生成成功！`);
  console.log(`📄 总页面数: ${importantPages.length}`);
  console.log(`🗓️ 更新日期: ${config.currentDate}`);
}

// 执行生成
if (require.main === module) {
  generateMinimalSitemap();
}

module.exports = { generateMinimalSitemap };