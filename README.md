# @soulniko/utils

[English](./README.en_US.md) | 简体中文

一个用于 JavaScript 和 TypeScript 项目的实用工具函数集合。

## 特性

- 🚀 轻量级且零依赖
- 📦 ESM 格式
- 🔧 完整的 TypeScript 类型支持
- 🎯 提供常用的工具函数
- 💾 浏览器存储封装

## 安装

```bash
# 使用 pnpm
pnpm add @soulniko/utils

# 使用 npm
npm install @soulniko/utils

# 使用 yarn
yarn add @soulniko/utils
```

## 使用方法

### 对象工具

类型安全的对象操作函数：

```typescript
import { keysOf, entriesOf, valuesOf } from "@soulniko/utils";

const obj = { name: "John", age: 30 };

// 获取对象键（带类型推断）
const keys = keysOf(obj); // ('name' | 'age')[]

// 获取对象条目（带类型推断）
const entries = entriesOf(obj); // ['name' | 'age', string | number][]

// 获取对象值（带类型推断）
const values = valuesOf(obj); // (string | number)[]
```

### 存储工具

浏览器存储的类型安全封装（localStorage 和 sessionStorage）：

```typescript
import { createStorage } from "@soulniko/utils";

// 定义存储数据结构
interface StorageData {
	token: string;
	userInfo: {
		name: string;
		age: number;
	};
}

// 创建 localStorage 实例
const storage = createStorage<StorageData>("local", "my-app-");

// 设置存储
storage.set("token", "abc123");
storage.set("userInfo", { name: "John", age: 30 });

// 获取存储
const token = storage.get("token"); // string | null
const userInfo = storage.get("userInfo"); // { name: string; age: number } | null

// 移除存储
storage.remove("token");

// 清空所有存储
storage.clear();
```

## API 文档

### 对象工具

- `keysOf<T>(record: T): (keyof T)[]` - 获取对象的键（类型安全）
- `entriesOf<T>(record: T): [keyof T, T[keyof T]][]` - 获取对象的条目（类型安全）
- `valuesOf<T>(record: T): T[keyof T][]` - 获取对象的值（类型安全）

### 存储工具

- `createStorage<T>(type: StorageType, storagePrefix: string)` - 创建类型安全的存储实例
  - `type`: `'local'` 或 `'session'`
  - `storagePrefix`: 存储键前缀
  - 返回对象包含以下方法：
    - `set<K>(key: K, value: T[K]): void` - 设置存储
    - `get<K>(key: K): T[K] | null` - 获取存储
    - `remove(key: keyof T): void` - 移除存储
    - `clear(): void` - 清空所有存储

## 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 代码检查
pnpm lint

# 类型检查
pnpm typecheck
```

## 许可证

[MIT](./LICENSE) License © 2026 [Soulniko](https://github.com/soulniko)
