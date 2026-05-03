import { StorageType } from "./types";

export function createStorage(type: StorageType) {
	const stg = type === "session" ? window.sessionStorage : window.localStorage;
}
