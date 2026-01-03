---
title: "AES加密算法完全指南"
slug: "aes-encryption-guide"
date: 2026-01-03T18:00:00+08:00
draft: false
tags: ['AES', '加密', '对称加密', 'Web Crypto API', '数据安全']
categories: ['技术教程']
author: 'util.cn Team'
summary: '深入解析AES加密算法的原理、模式和实践应用，帮助开发者正确使用AES保护数据安全'
layout: "single"
ShowToc: true
---

# AES加密算法完全指南

AES（Advanced Encryption Standard，高级加密标准）是目前最广泛使用的对称加密算法。本文将深入讲解AES的原理、使用方法和最佳实践。

## 什么是AES

AES是一种对称加密算法，由美国国家标准与技术研究院（NIST）于2001年发布。它取代了过时的DES算法，成为全球加密标准。

### AES特点

- **对称加密**：加密和解密使用相同的密钥
- **密钥长度**：支持128、192、256位
- **块大小**：固定128位（16字节）
- **安全性高**：至今没有有效的破解方法
- **性能优秀**：硬件加速支持

### AES vs 其他算法

| 特性 | AES | DES | 3DES | RSA |
|------|-----|-----|------|-----|
| 类型 | 对称 | 对称 | 对称 | 非对称 |
| 密钥长度 | 128-256位 | 56位 | 112/168位 | 1024-4096位 |
| 速度 | 快 | 快 | 慢 | 慢 |
| 用途 | 数据加密 | 已淘汰 | 已淘汰 | 密钥交换、签名 |

## AES工作模式

AES是块加密算法，需要配合工作模式处理长于16字节的数据。

### ECB模式（不推荐）

```
块1 → AES → 密文1
块2 → AES → 密文2
块3 → AES → 密文3
```

**缺点**：相同明文块产生相同密文块，不安全。

### CBC模式（推荐）

```
IV ⊕ 块1 → AES → 密文1
密文1 ⊕ 块2 → AES → 密文2
密文2 ⊕ 块3 → AES → 密文3
```

**优点**：每个密文块依赖于前一个块，安全性高。

### GCM模式（推荐）

```
认证加密模式，同时提供加密和完整性验证
```

**优点**：性能好，支持并行计算，提供认证。

## AES加密实现

### JavaScript实现（Web Crypto API）

```javascript
// AES-GCM加密
async function encryptAESGCM(plaintext, key) {
  // 生成随机IV（12字节推荐）
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // 导入密钥
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM' },
    false,
    ['encrypt']
  );

  // 加密
  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    cryptoKey,
    new TextEncoder().encode(plaintext)
  );

  return {
    ciphertext: new Uint8Array(encrypted),
    iv: iv
  };
}

// AES-GCM解密
async function decryptAESGCM(ciphertext, iv, key) {
  // 导入密钥
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM' },
    false,
    ['decrypt']
  );

  // 解密
  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    cryptoKey,
    ciphertext
  );

  return new TextDecoder().decode(decrypted);
}

// 使用示例
async function example() {
  // 生成256位密钥
  const key = crypto.getRandomValues(new Uint8Array(32));

  // 加密
  const plaintext = 'Hello, AES Encryption!';
  const { ciphertext, iv } = await encryptAESGCM(plaintext, key);

  console.log('密文:', Array.from(ciphertext).map(b => b.toString(16).padStart(2, '0')).join(''));
  console.log('IV:', Array.from(iv).map(b => b.toString(16).padStart(2, '0')).join(''));

  // 解密
  const decrypted = await decryptAESGCM(ciphertext, iv, key);
  console.log('解密:', decrypted);
}
```

### AES-CBC实现

```javascript
// AES-CBC加密（需要PKCS7填充）
async function encryptAESCBC(plaintext, key) {
  const iv = crypto.getRandomValues(new Uint8Array(16));

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-CBC' },
    false,
    ['encrypt']
  );

  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-CBC',
      iv: iv
    },
    cryptoKey,
    new TextEncoder().encode(plaintext)
  );

  return {
    ciphertext: new Uint8Array(encrypted),
    iv: iv
  };
}

// AES-CBC解密
async function decryptAESCBC(ciphertext, iv, key) {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-CBC' },
    false,
    ['decrypt']
  );

  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-CBC',
      iv: iv
    },
    cryptoKey,
    ciphertext
  );

  return new TextDecoder().decode(decrypted);
}
```

### Node.js实现（crypto模块）

```javascript
const crypto = require('crypto');

// AES-256-GCM加密
function encryptAES(text, key, iv = null) {
  // 如果没有提供IV，生成随机IV
  if (!iv) {
    iv = crypto.randomBytes(12);
  }

  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  // 获取认证标签
  const authTag = cipher.getAuthTag();

  return {
    encrypted,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex')
  };
}

// AES-256-GCM解密
function decryptAES(encrypted, key, iv, authTag) {
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    key,
    Buffer.from(iv, 'hex')
  );

  decipher.setAuthTag(Buffer.from(authTag, 'hex'));

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// 使用示例
const key = crypto.randomBytes(32); // 256位密钥
const plaintext = 'Hello, AES!';

// 加密
const { encrypted, iv, authTag } = encryptAES(plaintext, key);
console.log('加密:', encrypted);

// 解密
const decrypted = decryptAES(encrypted, key, iv, authTag);
console.log('解密:', decrypted);
```

## 密钥管理

### 生成密钥

```javascript
// 生成随机密钥（推荐）
function generateKey(length = 32) {
  return crypto.getRandomValues(new Uint8Array(length));
}

// 从密码派生密钥（PBKDF2）
async function deriveKeyFromPassword(password, salt, iterations = 100000) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: iterations,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// 使用示例
const password = 'mySecurePassword123!';
const salt = crypto.getRandomValues(new Uint8Array(16));
const key = await deriveKeyFromPassword(password, salt);
```

### 密钥存储

```javascript
// ❌ 不好：明文存储密钥
localStorage.setItem('encryptionKey', 'my-secret-key');

// ✅ 好：使用专门的密钥存储
// 浏览器：使用IndexedDB或Session Storage
// 服务器：使用环境变量或密钥管理服务（AWS KMS、Azure Key Vault）
```

## 实战应用

### 1. 加密存储数据

```javascript
// 加密用户敏感信息
async function encryptUserData(userData, key) {
  const json = JSON.stringify(userData);
  const { ciphertext, iv } = await encryptAESGCM(json, key);

  // 存储Base64编码的密文和IV
  return {
    data: btoa(String.fromCharCode(...ciphertext)),
    iv: btoa(String.fromCharCode(...iv))
  };
}

// 解密用户数据
async function decryptUserData(encryptedData, key) {
  const ciphertext = Uint8Array.from(atob(encryptedData.data), c => c.charCodeAt(0));
  const iv = Uint8Array.from(atob(encryptedData.iv), c => c.charCodeAt(0));

  const json = await decryptAESGCM(ciphertext, iv, key);
  return JSON.parse(json);
}
```

### 2. 加密文件

```javascript
// 加密文件
async function encryptFile(file, key) {
  const fileData = await file.arrayBuffer();
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM' },
    false,
    ['encrypt']
  );

  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv },
    cryptoKey,
    fileData
  );

  // 创建加密文件
  const encryptedFile = new File(
    [new Uint8Array(encrypted)],
    file.name + '.encrypted',
    { type: 'application/octet-stream' }
  );

  return { encryptedFile, iv };
}

// 解密文件
async function decryptFile(encryptedFile, iv, key) {
  const fileData = await encryptedFile.arrayBuffer();

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM' },
    false,
    ['decrypt']
  );

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: iv },
    cryptoKey,
    fileData
  );

  return new Uint8Array(decrypted);
}
```

### 3. 端到端加密消息

```javascript
// 加密消息
async function encryptMessage(message, recipientPublicKey, senderPrivateKey) {
  // 生成临时对称密钥
  const sessionKey = crypto.getRandomValues(new Uint8Array(32));

  // 用AES加密消息
  const { ciphertext, iv } = await encryptAESGCM(message, sessionKey);

  // 用RSA加密会话密钥（简化示例）
  const encryptedKey = await encryptRSA(sessionKey, recipientPublicKey);

  // 用私钥签名
  const signature = await signMessage(ciphertext, senderPrivateKey);

  return {
    encryptedKey,
    iv,
    ciphertext,
    signature
  };
}
```

## 安全最佳实践

### 1. 使用安全的IV

```javascript
// ❌ 不好：固定IV
const iv = new Uint8Array(12).fill(0);

// ✅ 好：每次加密使用随机IV
const iv = crypto.getRandomValues(new Uint8Array(12));

// IV不需要保密，但必须每次不同
```

### 2. 认证加密

```javascript
// ✅ 推荐：使用GCM模式（内置认证）
await crypto.subtle.encrypt(
  { name: 'AES-GCM', iv: iv },
  key,
  plaintext
);

// ❌ 不推荐：使用CBC模式（需要额外的HMAC）
await crypto.subtle.encrypt(
  { name: 'AES-CBC', iv: iv },
  key,
  plaintext
);
```

### 3. 密钥长度

```javascript
// ✅ 推荐：使用256位密钥
const key = crypto.getRandomValues(new Uint8Array(32));

// ✅ 可接受：192位密钥
const key = crypto.getRandomValues(new Uint8Array(24));

// ⚠️ 最小：128位密钥
const key = crypto.getRandomValues(new Uint8Array(16));
```

### 4. 错误处理

```javascript
async function safeDecrypt(ciphertext, iv, key) {
  try {
    const decrypted = await decryptAESGCM(ciphertext, iv, key);
    return { success: true, data: decrypted };
  } catch (error) {
    // 统一错误消息，防止信息泄露
    console.error('Decryption failed:', error);
    return { success: false, error: 'Decryption failed' };
  }
}
```

## 常见问题

### Q1: AES和RSA有什么区别？

**AES**：
- 对称加密（加密解密用同一密钥）
- 速度快，适合大数据
- 需要安全地交换密钥

**RSA**：
- 非对称加密（公钥加密，私钥解密）
- 速度慢，适合小数据
- 用于密钥交换和数字签名

**最佳实践**：
- 用RSA加密AES密钥
- 用AES加密实际数据

### Q2: 如何选择AES模式？

| 模式 | 推荐度 | 说明 |
|------|--------|------|
| GCM | ⭐⭐⭐ | 认证加密，推荐使用 |
| CBC | ⭐⭐ | 传统模式，需要额外HMAC |
| ECB | ❌ | 不安全，不要使用 |

### Q3: 密钥应该多久更换一次？

取决于数据敏感度和使用场景：
- 高敏感度：每天或每周
- 一般敏感度：每月
- 低敏感度：每季度

### Q4: 可以在数据库中存储加密数据吗？

可以，但要注意：
- 使用强加密（AES-256-GCM）
- IV与密文一起存储
- 密钥不要存储在数据库中
- 考虑使用数据库透明加密（TDE）

## 性能优化

### 1. 重用密钥对象

```javascript
// ❌ 不好：每次加密都导入密钥
async function encrypt1(plaintext, keyBytes) {
  const key = await crypto.subtle.importKey('raw', keyBytes, ...);
  return crypto.subtle.encrypt(...);
}

// ✅ 好：导入一次，多次使用
let cachedKey = null;
async function getKey(keyBytes) {
  if (!cachedKey) {
    cachedKey = await crypto.subtle.importKey('raw', keyBytes, ...);
  }
  return cachedKey;
}
```

### 2. 流式加密大文件

```javascript
// 对于大文件，分块加密
async function encryptLargeFile(file, key, chunkSize = 1024 * 1024) {
  const chunks = [];
  let offset = 0;

  while (offset < file.size) {
    const chunk = file.slice(offset, offset + chunkSize);
    const encrypted = await encryptAES(chunk, key);
    chunks.push(encrypted);
    offset += chunkSize;
  }

  return chunks;
}
```

## 总结

AES是现代加密的标准选择，正确使用它能够有效保护数据安全。

记住这些要点：
- 使用AES-256-GCM模式
- 每次加密使用随机IV
- 妥善管理密钥（使用KMS）
- 认证加密优于简单加密
- 定期轮换密钥
- 遵循最小权限原则

安全是一个系统工程，加密只是其中一环。结合其他安全措施，构建完整的安全体系。
