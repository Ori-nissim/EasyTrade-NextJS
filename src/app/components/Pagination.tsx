"use client"

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination(props: { currentPage: number; totalPages: number }) {
  const { currentPage, totalPages } = props; // Props destructuring
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Previous Button */}
      <Link
        href={createPageLink(currentPage - 1)}
        className={`px-4 py-2 border rounded-md ${
          currentPage > 1
            ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
        aria-disabled={currentPage <= 1}
      >
        Previous
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={createPageLink(page)}
          className={`px-3 py-1 border rounded-md ${
            page === currentPage
              ? 'bg-blue-500 text-white font-bold'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      <Link
        href={createPageLink(currentPage + 1)}
        className={`px-4 py-2 border rounded-md ${
          currentPage < totalPages
            ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Next
      </Link>
    </div>
  );
}
