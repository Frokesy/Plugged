import React, { FC } from "react";
import "./paginator.css";

interface PaginatorProps {
  itemsLength: number;
  itemsPerPage: number;
  currentPage: number;
  children: React.ReactNode;
  paginate: (page: number) => void;
}
const Paginator: FC<PaginatorProps> = ({
  itemsLength,
  children,
  paginate,
  currentPage,
  itemsPerPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(itemsLength / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePrevious = () => paginate(Math.max(1, currentPage - 1));
  const handleNext = () => paginate(Math.min(itemsLength, currentPage + 1));



  return (
    <div className="">
      <div>{children}</div>
      <div className="flex space-x-6">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <div className="flex space-x-4">
          {pageNumbers.map((number) => (
            <div className="" key={number}>
              <p>{number}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={currentPage === itemsLength}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginator;
