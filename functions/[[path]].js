import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as buildModule from '../build/server/index.js';

const build = buildModule.default || buildModule;

const handler = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => ({ cloudflare: context }),
});

export const onRequest = async (context) => {
  try {
    return await handler(context);
  } catch (error) {
    console.error('Pages Function Request Error:', error);
    return new Response(`Server Error Detail:\n${error?.stack || error?.message || error}`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};
