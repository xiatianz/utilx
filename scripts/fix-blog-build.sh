#!/bin/bash

# 修复博客构建问题的脚本

echo "🔧 修复博客构建问题..."

# 1. 先清理旧文件
echo "📦 清理旧文件..."
rm -rf public/blog
rm -rf .nuxt
rm -rf .output
rm -rf dist

# 2. 先构建博客
echo "📝 构建 Hugo 博客..."
cd blog
hugo --minify --destination ../public/blog

# 3. 检查博客是否构建成功
if [ ! -d "../public/blog" ]; then
    echo "❌ 博客构建失败！"
    exit 1
fi

echo "✅ 博客构建成功！"
ls -la ../public/blog/ | head -10

# 4. 返回主目录
cd ..

# 5. 再构建 Nuxt 应用
echo "🚀 构建 Nuxt 应用..."
NODE_OPTIONS="--max-old-space-size=8192" nuxt build

# 6. 检查博客文件是否还在
if [ -d "public/blog" ] && [ -f "public/blog/index.html" ]; then
    echo "✅ 博客文件已正确集成！"
else
    echo "⚠️  警告：博客文件可能在构建过程中丢失"
    echo "重新复制博客文件..."
    cp -r blog/public/* public/blog/
fi

echo "🎉 构建完成！"
echo "博客地址: https://www.util.cn/blog/"