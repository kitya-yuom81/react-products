export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700">Oops! Page not found.</p>
      <a href="/" className="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Back to Home
      </a>
    </div>
  );
}
