import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
        <AlertCircle size={40} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-500 max-w-7xl text-center mb-8">
        We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-[#24493a] text-white rounded-md font-medium hover:bg-[#1a352a] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
