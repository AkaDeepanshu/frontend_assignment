import React from "react";
import type { Comment } from "../types/comment";

interface TableProps {
  comments: Comment[];
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Table: React.FC<TableProps> = ({
  comments,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);

  return (
    <div className="bg-white flex flex-col items-between justify-center scrollbar-hide">
      {/* Table */}
      <div className="overflow-x-auto w-full scrollbar-hide">
        <table className="min-w-[800px] table-fixed w-full scrollbar-hide">
          <thead>
            <tr className="bg-gray-300 ">
              <th className="px-6 py-5 w-[120px] rounded-tl-md text-left font-semibold truncate text-gray-700">
                Post ID
              </th>
              <th className="px-6 py-3 w-[30%] text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 w-[30%] text-left font-semibold text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 flex-1 rounded-tr-md text-left font-semibold text-gray-700">
                Comment
              </th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment: Comment) => (
              <tr
                key={comment.id}
                className="shadow-table-field h-20 text-blue-950"
              >
                <td className="px-6 py-3 w-[120px] font-semibold whitespace-nowrap">{comment.postId}</td>
                <td className="px-6 py-3 w-[30%] break-words">{comment.name}</td>
                <td className="px-6 py-3 w-[30%] break-words">{comment.email}</td>
                <td className="px-4 py-3 flex-1 relative group max-w-xs">
              <p className="line-clamp-3 overflow-hidden">
                {comment.body}
              </p>

              {/* Hover dialog */}
              <div className="absolute z-10 hidden group-hover:block top-1 -left-1 mt-1 w-64 p-3 bg-white shadow-lg border rounded-md text-sm text-gray-800">
                {comment.body}
              </div>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center md:justify-end ">
        <div className="flex items-center justify-center gap-3 py-6">
          <span className="text-sm text-blue-950">
            {startIndex}-{endIndex} of {totalItems} items
          </span>

          <div className="flex items-center gap-2">
            <button
              className={`px-2 py-0.5 cursor-pointer rounded  ${
                currentPage === 1 ? " text-gray-400" : " text-blue-950"
              }`}
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
            >
              {"<"}
            </button>
            <span className="px-2 py-0.5 rounded border text-blue-950 font-semibold">
              {currentPage}
            </span>
            <button
              className={`px-2 py-0.5 cursor-pointer rounded  ${
                currentPage === totalPages ? " text-gray-400" : " text-blue-950"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
            >
              {">"}
            </button>
            <select
              className="ml-2 px-2 py-1 shadow-table-field rounded text-blue-950 text-sm"
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            >
              <option
                className="ml-2 px-2 py-1 shadow-table-field rounded text-blue-950 text-sm"
                value={10}
              >
                10 / Page
              </option>
              <option
                className="ml-2 px-2 py-1 shadow-table-field rounded text-blue-950 text-sm"
                value={50}
              >
                50 / Page
              </option>
              <option
                className="ml-2 px-2 py-1 shadow-table-field rounded text-blue-950 text-sm"
                value={100}
              >
                100 / Page
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
