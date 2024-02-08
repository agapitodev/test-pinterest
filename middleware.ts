import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = [
  '/dashboard',
  '/dashboard/faq',
  '/dashboard/favorites',
  '/dashboard/messages',
  '/dashboard/notifications',
  '/dashboard/profile',
  '/dashboard/uploads',
];

export default function middleware(req: NextRequest) {
  const currentUser = req.cookies.get('session')?.value;
  const isAuthenticated = Boolean(currentUser);
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
