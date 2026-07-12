import Button from "../components/Button";

// The 404 Not Found page.
// Shown when the user visits a route that doesn't exist.
function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
      {/* Big 404 */}
      <h1 className="text-8xl font-bold text-primary sm:text-9xl">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-text">Page Not Found</h2>
      <p className="mt-2 max-w-md text-gray-500">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      {/* Back home button */}
      <Button to="/" className="mt-8">
        Back Home
      </Button>
    </div>
  );
}

export default NotFound;
