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
    <div className="bg-white rounded-lg shadow p-4">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Post ID</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Email</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment:Comment) => (
            <tr key={comment.id} className="border-b last:border-b-0">
              <td className="px-4 py-3 text-blue-700 font-semibold">
                {comment.postId}
              </td>
              <td className="px-4 py-3">{comment.name}</td>
              <td className="px-4 py-3">{comment.email}</td>
              <td className="px-4 py-3">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600">
          {startIndex}-{endIndex} of {totalItems} Items
        </span>
        <div className="flex items-center gap-2">
          <button
            className={`px-2 py-1 rounded border ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400"
                : "bg-white text-gray-700"
            }`}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {"<"}
          </button>
          <span className="px-2 py-1 rounded border bg-blue-100 text-blue-700 font-semibold">
            {currentPage}
          </span>
          <button
            className={`px-2 py-1 rounded border ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400"
                : "bg-white text-gray-700"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            {">"}
          </button>
          <span className="ml-2 text-sm text-gray-600">/</span>
          <select
            className="ml-2 px-2 py-1 border rounded text-sm"
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          >
            <option value={10}>10 / Page</option>
            <option value={20}>20 / Page</option>
            <option value={50}>50 / Page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
