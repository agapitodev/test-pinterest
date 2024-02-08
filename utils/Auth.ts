export const isAuthenticated = () => {
  if (typeof window === 'undefined') return null;
  const rawCookie = !document.cookie
    ? null
    : document.cookie.split(';').find((c) => c.trim().startsWith('session='));
  return rawCookie ? rawCookie.split('=')[1] : null;
};

export const authenticate = (session: string) => {
  let d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
  document.cookie = `session=${session}; expires=${d.toUTCString()}; path=/;${process.env.IS_PRODUCTION ? 'secure;' : ''}`;
};

export const deleteSession = () => {
  document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
