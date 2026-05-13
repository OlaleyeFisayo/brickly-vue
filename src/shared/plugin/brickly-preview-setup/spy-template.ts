export const spyTemplate = `
const _bricklyPlugins = [];
const createApp = () => ({
  use(p, ...o) { _bricklyPlugins.push([p, o]); return this; },
  mount() { return this; },
  component() { return this; },
  directive() { return this; },
  provide() { return this; },
  mixin() { return this; },
  config: new Proxy({}, { get: () => () => {}, set: () => true }),
  runWithContext(fn) { return fn(); },
});
`;

export const setupExport = `
export function setup(app) {
  for (const [plugin, options] of _bricklyPlugins) {
    app.use(plugin, ...options);
  }
}
`;
