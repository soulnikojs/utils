# @soulniko/utils

English | [简体中文](./README.md)

A collection of useful utility functions for JavaScript and TypeScript projects.

## Features

- 🚀 Lightweight and zero dependencies
- 📦 ESM format
- 🔧 Full TypeScript type support
- 🎯 Common utility functions
- 💾 Browser storage wrapper

## Installation

```bash
# Using pnpm
pnpm add @soulniko/utils

# Using npm
npm install @soulniko/utils

# Using yarn
yarn add @soulniko/utils
```

## Usage

### Storage Utilities

Type-safe wrapper for browser storage (localStorage and sessionStorage):

```typescript
import { createStorage } from "@soulniko/utils";

// Define your storage data structure
interface StorageData {
	token: string;
	userInfo: {
		name: string;
		age: number;
	};
}

// Create a localStorage instance
const storage = createStorage<StorageData>("local", "my-app-");

// Set storage
storage.set("token", "abc123");
storage.set("userInfo", { name: "John", age: 30 });

// Get storage
const token = storage.get("token"); // string | null
const userInfo = storage.get("userInfo"); // { name: string; age: number } | null

// Remove storage
storage.remove("token");

// Clear all storage
storage.clear();
```

## API Documentation

### Storage Utilities

- `createStorage<T>(type: StorageType, storagePrefix: string)` - Create a type-safe storage instance
  - `type`: `'local'` or `'session'`
  - `storagePrefix`: Storage key prefix
  - Returns an object with the following methods:
    - `set<K>(key: K, value: T[K]): void` - Set storage value
    - `get<K>(key: K): T[K] | null` - Get storage value
    - `remove(key: keyof T): void` - Remove storage entry
    - `clear(): void` - Clear all storage

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Lint
pnpm lint

# Type check
pnpm typecheck
```

## License

[MIT](./LICENSE) License © 2026 [Soulniko](https://github.com/soulniko)
