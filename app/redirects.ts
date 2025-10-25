import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 301 Redirects for old content
  const redirects: Record<string, string> = {
    '/terracube': '/',
    '/agency': '/',
    '/services': '/',
    '/about': '/',
    '/contact': '/',
    '/old': '/',
    '/branding': '/projects',
    '/video': '/projects',
    '/web': '/projects',
    '/digital': '/projects',
  };

  // Check for exact matches
  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 301);
  }

  // Check for partial matches
  for (const [oldPath, newPath] of Object.entries(redirects)) {
    if (pathname.startsWith(oldPath)) {
      return NextResponse.redirect(new URL(newPath, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
