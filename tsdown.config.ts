import { defineConfig } from "tsdown";

defineConfig({
	entry: ["./src/index.ts"],
	platform: "neutral",
	clean: true,
	dts: true,
	sourcemap: false,
	minify: true,
});
