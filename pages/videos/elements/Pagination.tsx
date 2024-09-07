import React from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pageCount - 1;

  const handlePreviousClick = () => {
    if (!isFirstPage) {
      onPageChange({ selected: currentPage - 1 });
      scrollToTop();
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange({ selected: currentPage + 1 });
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className={`rounded-l-md border border-gray-300 bg-white px-3 py-2 mr-0.5 ${
          isFirstPage ? "cursor-not-allowed text-gray-400" : "cursor-pointer"
        }`}
        onClick={handlePreviousClick}
        disabled={isFirstPage}
      >
        {/* <ChevronLeftIcon className="h-5 w-5" /> */}
      </button>
      <button
        className={`rounded-r-md border border-gray-300 bg-white px-3 py-2 ml-0.5 ${
          isLastPage ? "cursor-not-allowed text-gray-400" : "cursor-pointer"
        }`}
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        {/* <ChevronRightIcon className="h-5 w-5" /> */}
      </button>
    </div>
  );
};

export default Pagination;
