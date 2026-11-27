import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTailwindcss } from "@rsbuild/plugin-tailwindcss";
import { tanstackStart } from "@tanstack/react-start/plugin/rsbuild";

const apiUrl = process.env.API_URL;
if (!apiUrl) throw new Error("Missing required env: API_URL");

export default defineConfig({
	server: {
		port: 3000,
	},
	source: {
		define: {
			"process.env.API_URL": JSON.stringify(apiUrl),
		},
	},
	plugins: [pluginReact(), pluginTailwindcss(), tanstackStart()],
});
