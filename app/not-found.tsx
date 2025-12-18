export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="mt-6 text-pink-600 font-medium">
        Go back to FreeQR →
      </a>
    </div>
  );
}
