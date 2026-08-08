import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as buildModule from '../build/server/index.js';

const build = buildModule.default || buildModule;

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => ({ cloudflare: context }),
});
