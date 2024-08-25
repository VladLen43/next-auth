import { NextRequest, NextResponse } from 'next/server';
import { auth } from './configs/auth';

const protectedRoutes = ['/', '/about', '/template'];
const publicRoutes = ['/signin'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const session = await auth();

  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl));
  }
  if (
    isPublicRoute &&
    session?.user &&
    !req.nextUrl.pathname.startsWith('/about' || '/' || '/template')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

 

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
