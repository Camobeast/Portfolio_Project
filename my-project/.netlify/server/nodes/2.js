

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.v-QWFTud.js","_app/immutable/chunks/scheduler.8fdumybZ.js","_app/immutable/chunks/index.9jcULZQe.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = [];
export const fonts = [];
