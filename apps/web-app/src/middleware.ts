import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define routes that should be public (not protected by Clerk)
const isPublicRoute = createRouteMatcher([
  // Add any public routes here, e.g., '/sign-in(.*)', '/sign-up(.*)', '/api/public-endpoint'
  // By default, all routes are protected if not specified here or in ignoredRoutes.
]);

// Define routes that Clerk should ignore (e.g., static assets, API routes not needing auth)
const ignoredRoutes = createRouteMatcher([
  '/api/webhooks(.*)', // Example: ignore webhook routes
]);

export default clerkMiddleware((authObject, req) => { // Renamed 'auth' to 'authObject' for clarity
  if (ignoredRoutes(req)) {
    return; // Do nothing for ignored routes
  }
  if (!isPublicRoute(req)) {
    authObject.protect(); // Call protect on the auth object
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!.+\.[\w]+$|_next).*)',
    // Re-include api routes if you want them to be processed by middleware
    '/',
    '/(api|trpc)(.*)',
  ],
};
