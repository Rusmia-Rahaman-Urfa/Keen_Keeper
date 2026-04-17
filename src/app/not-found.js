import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 mb-8">The link you followed might be broken, or the page has been removed.</p>
      <Link href="/" className="bg-[#1D3D33] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
        Back to Home
      </Link>
    </div>
  );
}