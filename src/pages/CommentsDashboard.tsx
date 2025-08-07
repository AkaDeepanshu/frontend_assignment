import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import FilterBar from "../components/FilterBar";
import Table from "../components/Table";
import { fetchComments } from "../services/commentServices";
import type { Comment } from "../types/comment";

type SortDirection = "asc" | "desc" | null;
type SortField = "postId" | "name" | "email" | null;

interface FilterState {
  page: number;
  pageSize: number;
  sortField: SortField;
  sortDirection: SortDirection;
  searchTerm: string;
}

const defaultFilters: FilterState = {
  page: 1,
  pageSize: 10,
  sortField: null,
  sortDirection: null,
  searchTerm: "",
};

const getStoredFilters = (): FilterState => {
  try {
    const stored = sessionStorage.getItem("commentFilters");
    if (!stored) return defaultFilters;

    const parsedFilters = JSON.parse(stored);
    
    // Validate the stored filters
    if (
      typeof parsedFilters.page !== "number" ||
      typeof parsedFilters.pageSize !== "number" ||
      !["asc", "desc", null].includes(parsedFilters.sortDirection) ||
      !["postId", "name", "email", null].includes(parsedFilters.sortField) ||
      typeof parsedFilters.searchTerm !== "string"
    ) {
      console.warn("Invalid stored filters, using defaults");
      return defaultFilters;
    }

    return parsedFilters;
  } catch (err) {
    console.error("Error reading stored filters:", err);
    return defaultFilters;
  }
};

const CommentsDashboard = () => {
  const storedFilters = getStoredFilters();
  const [currentPage, setCurrentPage] = useState(storedFilters.page);
  const [itemsPerPage, setItemsPerPage] = useState(storedFilters.pageSize);
  const [sortField, setSortField] = useState<SortField>(
    storedFilters.sortField
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    storedFilters.sortDirection
  );
  const [searchTerm, setSearchTerm] = useState(storedFilters.searchTerm);

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
    setCurrentPage(1); // Reset to first page when sort changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Save filters to sessionStorage whenever they change
  useEffect(() => {
    // Don't save if we're still loading or there's an error
    if (isLoading || error) return;

    const filters: FilterState = {
      page: currentPage,
      pageSize: itemsPerPage,
      sortField,
      sortDirection,
      searchTerm,
    };
    
    try {
      sessionStorage.setItem("commentFilters", JSON.stringify(filters));
    } catch (err) {
      console.error("Failed to save filters to sessionStorage:", err);
    }
  }, [currentPage, itemsPerPage, sortField, sortDirection, searchTerm, isLoading, error]);

  // Filter and sort comments
  const filteredComments = useMemo(() => {
    let result = [...comments];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        (comment) =>
          comment.name.toLowerCase().includes(searchLower) ||
          comment.email.toLowerCase().includes(searchLower) ||
          comment.body.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    if (sortField && sortDirection) {
      result.sort((a, b) => {
        const aVal = a[sortField];
        const bVal = b[sortField];
        const modifier = sortDirection === "asc" ? 1 : -1;

        if (sortField === "postId") {
          return (Number(aVal) - Number(bVal)) * modifier;
        }

        return String(aVal).localeCompare(String(bVal)) * modifier;
      });
    }

    return result;
  }, [comments, searchTerm, sortField, sortDirection]);

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedComments = filteredComments.slice(startIndex, endIndex);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading comments</div>;
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="w-11/12 mx-auto flex flex-col pb-6 items-center">
        <div className="w-full bg-white">
          <FilterBar
            onSortChange={handleSortChange}
            onSearchChange={handleSearchChange}
            initialSort={{ field: sortField, direction: sortDirection }}
            initialSearch={searchTerm || ""}
          />
        </div>
        <div className="mt-6">
          <Table
            comments={paginatedComments}
            currentPage={currentPage}
            totalItems={filteredComments.length}
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
