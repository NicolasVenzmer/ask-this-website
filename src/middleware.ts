import {NextRequest, NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const res = NextResponse.next();
    const cookie = req.cookies.get("sessionId");
    const {pathname} = req.nextUrl;

    console.log("pathname", pathname);

    if (
        pathname.startsWith('/api/auth/') ||
        pathname.startsWith('/_next/')
    ) {
        return NextResponse.next();
    }

    if (token && pathname === "/login") {
        const homeUrl = new URL("/", req.url);
        return NextResponse.redirect(homeUrl);
    }

    if (!token && pathname !== "/login") {
        const loginUrl = new URL("/login", req.url);
        return NextResponse.redirect(loginUrl);
    }

    if (!cookie && token?.email) {
        res.cookies.set("sessionId", token.email);
    }

    return res;
}
