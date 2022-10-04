import { sveltekit } from '@sveltejs/kit/vite';
import svg from "@poppanator/sveltekit-svg";
import type { UserConfig } from 'vite';

/** @type {import("vite").UserConfig} */
const config: UserConfig = {
	plugins: [
		sveltekit(),
		svg(),
	],
};

export default config;
