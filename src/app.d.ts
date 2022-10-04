// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { SvelteComponent } from "svelte"

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare module "*.svg" {
	const content: any,
	export default content
}

declare module "*.svg?component" {
	const content: typeof SvelteComponent,
	export default content
}

declare module "*.svg?src" {
	const content: string,
	export default content
}

declare module "*.svg?url" {
	const content: string,
	export default content
}