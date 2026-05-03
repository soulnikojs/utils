import { StorageType } from "./types";

/**
 * Create storage (创建存储)
 *
 * @param type Storage type (存储类型)
 * @param storagePrefix Storage prefix (存储前缀)
 */
export function createStorage<T extends object>(type: StorageType, storagePrefix: string) {
	const stg = type === "session" ? window.sessionStorage : window.localStorage;

	const getKey = (key: keyof T) => `${storagePrefix}${String(key)}`;

	const storage = {
		/**
		 * Set storage (设置存储)
		 *
		 * @param key Storage key (存储键)
		 * @param value Storage value (存储值)
		 */
		set<K extends keyof T>(key: K, value: T[K]) {
			const sKey = getKey(key);

			const json = JSON.stringify(value);

			try {
				stg.setItem(sKey, json);
			} catch {
				console.warn(`[createStorage] Failed to set storage for key "${sKey}".`);
			}
		},
		/**
		 * Get storage (获取存储)
		 *
		 * @param key Storage key (存储键)
		 */
		get<K extends keyof T>(key: K) {
			const sKey = getKey(key);
			const json = stg.getItem(sKey);

			if (json) {
				let storageData: T[K] | null = null;

				try {
					storageData = JSON.parse(json);
				} catch {}

				if (storageData !== null) {
					return storageData as T[K];
				}
			}

			stg.removeItem(sKey);

			return null;
		},
		/**
		 * Remove storage (移除存储)
		 *
		 * @param key Storage key (存储键)
		 */
		remove(key: keyof T) {
			const sKey = getKey(key);
			stg.removeItem(sKey);
		},
		/**
		 * Clear all storage (清空所有存储)
		 */
		clear() {
			stg.clear();
		},
	};

	return storage;
}
