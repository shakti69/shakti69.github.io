import { json, createCookieSessionStorage } from '@remix-run/cloudflare';

export async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  const env = context.cloudflare?.env || context.env || {};

  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: [env.SESSION_SECRET || 'secret_session_key_shakti'],
      secure: true,
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  session.set('theme', theme);

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
}
