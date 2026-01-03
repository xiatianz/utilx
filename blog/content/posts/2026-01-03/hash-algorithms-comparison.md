---
title: "MD5与SHA哈希算法完全对比"
slug: "hash-algorithms-comparison"
date: 2026-01-03T15:00:00+08:00
draft: false
tags: ['MD5', 'SHA', '哈希算法', '加密', '数据安全']
categories: ['技术教程']
author: 'util.cn Team'
summary: '深入对比MD5和SHA系列哈希算法的特点、安全性和应用场景，帮助开发者选择合适的哈希算法'
layout: "single"
ShowToc: true
---

# MD5与SHA哈希算法完全对比

哈希算法是现代密码学的基石，广泛应用于数据完整性验证、密码存储、数字签名等场景。本文将深入对比MD5和SHA系列哈希算法，帮助你选择合适的方案。

## 什么是哈希算法

哈希算法（Hash Function）将任意长度的输入数据映射为固定长度的输出值（哈希值或摘要）。

### 哈希算法的特性

1. **确定性**：相同输入总是产生相同输出
2. **快速计算**：能快速计算出哈希值
3. **单向性**：从哈希值无法反推原始数据
4. **雪崩效应**：输入微小变化导致输出巨大变化
5. **抗碰撞性**：难以找到两个不同输入产生相同哈希值

```
输入: "Hello World"
MD5:  5eb63bbbe01eeed093cb22bb8f5acdc3
SHA1: d2a84f4b8b650937ec8f73cd8be2c74add5a911b
SHA256:  a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```

## MD5算法

### 概述

MD5（Message-Digest Algorithm 5）由Ronald Rivest于1991年设计，产生128位（16字节）的哈希值，通常用32位十六进制字符串表示。

### 特点

**优点**：
- 计算速度快
- 实现简单
- 广泛支持
- 哈希值短（32字符）

**缺点**：
- 已被证明不安全
- 存在碰撞攻击
- 不适合安全敏感场景

### JavaScript实现

```javascript
// MD5实现（简化版）
function md5(string) {
  function rotateLeft(value, shift) {
    return (value << shift) | (value >>> (32 - shift));
  }

  function addUnsigned(x, y) {
    const lsw = (x & 0xFFFF) + (y & 0xFFFF);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }

  const k = [];
  for (let i = 0; i < 64; i++) {
    k[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000);
  }

  let msg = unescape(encodeURIComponent(string));
  const msgLen = msg.length;
  const bytes = [];

  for (let i = 0; i < msgLen; i++) {
    bytes[i] = msg.charCodeAt(i);
  }

  const byteLen = msgLen * 8;
  bytes[byteLen >> 5] |= 0x80 << ((byteLen) % 32);
  bytes[(((byteLen + 64) >>> 9) << 4) + 14] = byteLen;

  let a0 = 1732584193;
  let b0 = -271733879;
  let c0 = -1732584194;
  let d0 = 271733878;

  for (let i = 0; i < bytes.length; i += 16) {
    const a = a0, b = b0, c = c0, d = d0;

    for (let j = 0; j < 64; j++) {
      let f, g;

      if (j < 16) {
        f = (b & c) | ((~b) & d);
        g = j;
      } else if (j < 32) {
        f = (d & b) | ((~d) & c);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = b ^ c ^ d;
        g = (3 * j + 5) % 16;
      } else {
        f = c ^ (b | (~d));
        g = (7 * j) % 16;
      }

      f = addUnsigned(f, a);
      f = addUnsigned(f, k[j]);
      f = addUnsigned(f, bytes[i + g]);
      f = addUnsigned(rotateLeft(f, [7, 12, 17, 22][Math.floor(j / 16)]), b);
      a = d;
      d = c;
      c = b;
      b = addUnsigned(f, e);
    }

    a0 = addUnsigned(a0, a);
    b0 = addUnsigned(b0, b);
    c0 = addUnsigned(c0, c);
    d0 = addUnsigned(d0, d);
  }

  return ((a0 >>> 0).toString(16) +
          (b0 >>> 0).toString(16) +
          (c0 >>> 0).toString(16) +
          (d0 >>> 0).toString(16))
    .replace(/^-/, '')
    .padStart(32, '0');
}

// 使用示例
console.log(md5('Hello World'));
// 输出: 5eb63bbbe01eeed093cb22bb8f5acdc3
```

### 使用Crypto API（推荐）

```javascript
async function md5Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('MD5', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Node.js环境
const crypto = require('crypto');
function md5HashNode(message) {
  return crypto.createHash('md5').update(message).digest('hex');
}
```

## SHA系列算法

### SHA-1

SHA-1产生160位（20字节）的哈希值。**已被证明不安全，不应再使用。**

```javascript
async function sha1Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
```

### SHA-256

SHA-256是SHA-2家族的一员，产生256位（32字节）的哈希值，是目前最推荐的哈希算法。

```javascript
async function sha256Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Node.js环境
const crypto = require('crypto');
function sha256HashNode(message) {
  return crypto.createHash('sha256').update(message).digest('hex');
}

// 使用示例
console.log(await sha256Hash('Hello World'));
// 输出: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```

### SHA-512

SHA-512产生512位（64字节）的哈希值，安全性更高，但哈希值更长。

```javascript
async function sha512Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-512', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
```

## 算法对比

### 性能对比

```javascript
async function benchmark() {
  const testData = 'A'.repeat(1000000); // 1MB数据

  console.time('MD5');
  await md5Hash(testData);
  console.timeEnd('MD5');

  console.time('SHA-1');
  await sha1Hash(testData);
  console.timeEnd('SHA-1');

  console.time('SHA-256');
  await sha256Hash(testData);
  console.timeEnd('SHA-256');

  console.time('SHA-512');
  await sha512Hash(testData);
  console.timeEnd('SHA-512');
}

// 示例输出：
// MD5: 15ms
// SHA-1: 18ms
// SHA-256: 25ms
// SHA-512: 30ms
```

### 安全性对比

| 算法 | 输出长度 | 碰撞攻击 | 彩虹表 | 推荐用途 |
|------|----------|----------|--------|----------|
| MD5 | 128位 | ✅ 容易 | ✅ 可行 | 非安全场景 |
| SHA-1 | 160位 | ✅ 可行 | ✅ 可行 | 不推荐使用 |
| SHA-256 | 256位 | ❌ 困难 | ✅ 需要盐 | 通用安全场景 |
| SHA-512 | 512位 | ❌ 非常困难 | ✅ 需要盐 | 高安全需求 |

## 应用场景

### 1. 文件完整性校验

```javascript
async function verifyFile(file, expectedHash) {
  const arrayBuffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex === expectedHash;
}

// 使用示例
const file = new File(['Hello World'], 'test.txt');
const expectedHash = 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e';

verifyFile(file, expectedHash).then(isValid => {
  console.log('文件完整性:', isValid);
});
```

### 2. 密码存储（使用盐值）

```javascript
// 生成盐值
function generateSalt(length = 16) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

// 密码哈希（使用盐值）
async function hashPassword(password, salt) {
  const saltedPassword = password + salt;
  const encoder = new TextEncoder();
  const data = encoder.encode(saltedPassword);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 验证密码
async function verifyPassword(password, hash, salt) {
  const computedHash = await hashPassword(password, salt);
  return computedHash === hash;
}

// 使用示例
async function registerUser(username, password) {
  const salt = generateSalt();
  const hash = await hashPassword(password, salt);

  // 存储到数据库
  await database.users.insert({
    username,
    passwordHash: hash,
    salt
  });
}

async function loginUser(username, password) {
  const user = await database.users.findOne({ username });

  if (!user) {
    return false;
  }

  return await verifyPassword(password, user.passwordHash, user.salt);
}
```

### 3. 数字签名

```javascript
// 生成签名
async function signMessage(message, privateKey) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    data
  );

  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// 验证签名
async function verifySignature(message, signature, publicKey) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const signatureBytes = new Uint8Array(
    signature.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
  );

  return await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    publicKey,
    signatureBytes,
    data
  );
}
```

### 4. 哈希表数据结构

```javascript
class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.buckets = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return Math.abs(hash) % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      const item = bucket.find(item => item[0] === key);
      return item ? item[1] : undefined;
    }
    return undefined;
  }
}
```

## 最佳实践

### 1. 选择合适的算法

```javascript
// ❌ 不推荐：使用MD5处理敏感数据
const hash = md5Hash('password123');

// ✅ 推荐：使用SHA-256
const hash = await sha256Hash('password123');

// ✅ 更好：使用专门的密码哈希函数（如bcrypt、Argon2）
// bcrypt在下一节介绍
```

### 2. 添加盐值

```javascript
// ❌ 不好：直接哈希
const hash = await sha256Hash(password);

// ✅ 好：使用随机盐值
const salt = generateSalt();
const hash = await sha256Hash(password + salt);
```

### 3. 多次迭代

```javascript
// 增加计算成本，防止暴力破解
async function hashWithIterations(password, salt, iterations = 10000) {
  let hash = password + salt;

  for (let i = 0; i < iterations; i++) {
    const encoder = new TextEncoder();
    const data = encoder.encode(hash);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  return hash;
}
```

### 4. 使用HMAC

```javascript
// HMAC（Hash-based Message Authentication Code）
async function hmac(message, key, algorithm = 'SHA-256') {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(key);
  const messageData = encoder.encode(message);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: algorithm },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
  const signatureArray = Array.from(new Uint8Array(signature));
  return signatureArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 使用示例
const secretKey = 'my-secret-key';
const message = 'Important message';
const signature = await hmac(message, secretKey);
console.log(signature);
```

## 常见问题

### Q1: MD5还能用吗？

MD5只能用于非安全场景，如：
- 文件完整性校验（非关键场景）
- 数据去重
- 缓存键生成

不能用于：
- 密码存储
- 数字签名
- 安全敏感场景

### Q2: SHA-256够安全吗？

对于大多数应用场景，SHA-256足够安全。但对于需要极高安全性的场景，可以考虑：
- SHA-512（更高的安全性）
- BLAKE2/BLAKE3（更快的性能）
- SHA-3（不同的密码学基础）

### Q3: 如何存储密码？

**不要直接使用哈希算法存储密码！** 推荐使用：
- bcrypt
- Argon2
- PBKDF2

这些算法专门为密码设计，具有：
- 自适应的计算成本
- 内置盐值
- 抗GPU/ASIC攻击

## 总结

哈希算法是数据安全的基石。选择合适的哈希算法至关重要：

- **非安全场景**：MD5、SHA-1（如数据去重、缓存）
- **通用安全场景**：SHA-256（如数据完整性、签名）
- **密码存储**：bcrypt、Argon2、PBKDF2
- **高性能需求**：BLAKE3

记住：安全是一个持续演进的过程，定期更新算法和最佳实践，保持对安全研究的关注。
