import { FC } from "react";

interface PaginatorProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}
const Paginator: FC<PaginatorProps> = ({
  totalPages,
  currentPage,
}) => {
  // const handlePrevious = () => onPageChange(Math.max(1, currentPage - 1));
  // const handleNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

  return (
    <div>
      <button
        // onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        // onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
