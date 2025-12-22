#!/bin/bash

# 优化构建脚本
# 解决 V8 内存溢出和预渲染问题

echo "🚀 开始优化构建..."

# 设置 Node.js 内存限制
export NODE_OPTIONS="--max-old-space-size=8192 --max-semi-space-size=1024"

# 清理之前的构建
echo "📦 清理旧文件..."
rm -rf .nuxt
rm -rf .output
rm -rf dist

# 运行预构建脚本，生成精简的 sitemap
echo "🗺️ 生成精简版 sitemap..."
node scripts/generate-minimal-sitemap.js

# 运行优化的构建
echo "🔨 开始构建..."
NODE_OPTIONS="--max-old-space-size=8192" npm run build

echo "✅ 构建完成！"