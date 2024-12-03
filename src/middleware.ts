import { withAuth } from "next-auth/middleware"

// Export withAuth middleware with custom config
export default withAuth({
    pages: {
        signIn: "/auth/signin",
    },
})

// Protect specific routes
export const config = {
    matcher: [
        // Protect all routes under /dashboard
        "/dashboard/:path*",
        // Protect auth routes except signin
        "/auth/:path*",
        // Optional: Protect other routes
        "/((?!auth/signin|api|_next/static|_next/image|.*\\.png$).*)",
    ],
}
