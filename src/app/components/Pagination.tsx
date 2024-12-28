"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination(props: {
  currentPage: number;
  totalPages: number;
}) {
  const { currentPage, totalPages } = props; // Props destructuring
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex sm:justify-center justify-between sm:items-center space-x-2 mt-4">
      {/* Previous Button */}
      {currentPage !== 1 && (
        <Link
          href={createPageLink(currentPage - 1)}
          className={`px-4 py-2 border rounded-md ${
            currentPage > 1
              ? "bg-buttonEnabled text-text hover:bg-cardHover"
              : "bg-buttonBlocked text-textSecondary Secondary cursor-not-allowed"
          }`}
          aria-disabled={currentPage <= 1}
        >
          Previous
        </Link>
      )}
      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={createPageLink(page)}
          className={`hidden sm:block px-3 py-1 border-text rounded-md ${
            page === currentPage
              ? "bg-complementHover text-text font-bold"
              : "bg-card text-text hover:bg-gray-200"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      {currentPage !== totalPages && (
        <Link
          href={createPageLink(currentPage + 1)}
          className={`px-4 py-2 border rounded-md ${
            currentPage < totalPages
              ? "bg-buttonEnabled text-text hover:bg-cardHover"
              : "bg-buttonBlocked text-textSecondary Secondary cursor-not-allowed"
          }`}
          aria-disabled={currentPage >= totalPages}
        >
          Next
        </Link>
      )}
    </div>
  );
}
