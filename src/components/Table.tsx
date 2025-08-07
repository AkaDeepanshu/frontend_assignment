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
    <div className="bg-white flex flex-col items-between">
        {/* Table */}
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-300 ">
            <th className="px-6 py-3 rounded-tl-md text-left font-semibold truncate text-gray-700">Post ID</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">Name</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">Email</th>
            <th className="px-6 py-3 rounded-tr-md text-left font-semibold text-gray-700">Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment:Comment) => (
            <tr key={comment.id} className="shadow-table-field h-20 text-blue-950">
              <td className="px-6 py-3 font-semibold">
                {comment.postId}
              </td>
              <td className="px-6 py-3">{comment.name}</td>
              <td className="px-6 py-3">{comment.email}</td>
              <td className="px-6 py-3 text-ellipsis">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-3 py-6">
        <span className="text-sm text-blue-950">
          {startIndex}-{endIndex} of {totalItems} items
        </span>

        <div className="flex items-center gap-2">
          <button
            className={`px-2 py-0.5 cursor-pointer rounded  ${
              currentPage === 1
                ? " text-gray-400"
                : " text-blue-950"
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
              currentPage === totalPages
                ? " text-gray-400"
                : " text-blue-950"
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
            <option className="ml-2 px-2 py-1 shadow-table-field rounded text-blue-950 text-sm" value={10}>10 / Page</option>
            <option className="ml-2 px-2 py-1 shadow-table-field rounded text-blue-950 text-sm" value={50}>50 / Page</option>
            <option className="ml-2 px-2 py-1 shadow-table-field rounded text-blue-950 text-sm" value={100}>100 / Page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
