import Link from 'next/link';
import { BiSad } from 'react-icons/bi';

export default function NotFound() {
  return (
    <div className="flex-1">
      <div className="my-container flex items-center justify-center py-20">
        <div className="text-center space-y-6">
          <div>
            <BiSad className="text-8xl c-text-color-2 mx-auto mb-4" />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Sorry, the page you&apos;re looking for doesn&apos;t exist.
              Let&apos;s get you back on track!
            </p>
          </div>
          <Link
            href="/"
            className="btn bg-[#244d3f] text-white hover:bg-[#1a3f2f] border-none"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
