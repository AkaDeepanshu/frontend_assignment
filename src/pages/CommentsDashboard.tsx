import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import Table from "../components/Table";
import { fetchComments } from "../services/commentServices";
import type { Comment } from "../types/comment";

type SortDirection = "asc" | "desc" | null;
type SortField = "postId" | "name" | "email" | null;

const CommentsDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const {
    data: comments = [],
    isLoading,
    error,
  } = useQuery<Comment[]>({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const handleSortChange = (field: SortField, direction: SortDirection) => {
    setSortField(field);
    setSortDirection(direction);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedComments = comments.slice(startIndex, endIndex);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading comments</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <FilterBar onSortChange={handleSortChange} />
        <div className="mt-6">
          <Table
            comments={paginatedComments}
            currentPage={currentPage}
            totalItems={comments.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentsDashboard;