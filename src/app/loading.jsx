'use client';

export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center">
        {/* Spinner Animation */}
        <div className="inline-block">
          <div className="relative w-16 h-16 xs:w-20 xs:h-20">
            <div className="absolute inset-0 rounded-full border-4 border-[#e9e9e9]"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#244d3f] animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl xs:text-2xl font-semibold text-gray-700 mt-6">
          Loading your friends...
        </h2>
        <p className="text-sm xs:text-base text-gray-500 mt-2">Just a moment</p>
      </div>
    </div>
  );
}
