import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";



type SortDirection = "asc" | "desc" | null;
type SortField = "name" | "postId" | "email" | null;

interface FilterBarProps {
  onSortChange: (field: SortField, direction: SortDirection) => void;
  onSearchChange: (searchTerm: string) => void;
  initialSort?: { field: SortField; direction: SortDirection };
  initialSearch?: string;
}

const FilterBar = ({
  onSortChange,
  onSearchChange,
  initialSort,
  initialSearch = "",
}: FilterBarProps) => {
  const [sortField, setSortField] = useState<SortField>(
    initialSort?.field ?? null
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    initialSort?.direction ?? null
  );
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const handleSortClick = (field: SortField) => {
    if (sortField !== field) {
      // Start new sort
      setSortField(field);
      setSortDirection("asc");
      onSortChange(field, "asc");
    } else {
      // Cycle direction
      const nextDirection =
        sortDirection === null
          ? "asc"
          : sortDirection === "asc"
          ? "desc"
          : null;
      setSortDirection(nextDirection);
      if (nextDirection === null) {
        setSortField(null);
      }
      onSortChange(nextDirection ? field : null, nextDirection);
    }
  };

  // Render icon based on direction
  const renderArrow = (field: SortField) => {
    if (sortField !== field)
      return (
        <>
          <IoIosArrowUp className={"text-gray-400"} />
          <IoIosArrowDown className={"text-gray-400"} />
        </>
      );
    if (sortDirection === "asc")
      return (
        <>
          <IoIosArrowUp className={"text-blue-900"} />
          <IoIosArrowDown className={"text-gray-400"} />
        </>
      );
    if (sortDirection === "desc")
      return (
        <>
          <IoIosArrowUp className={"text-gray-400"} />
          <IoIosArrowDown className={"text-blue-900"} />
        </>
      );
    return null;
  };

  return (
    <div className="flex  flex-col-reverse my-4 md:my-0  md:flex-row justify-between text-blue-900 items-center  bg-white ">
      {/* Sort Buttons */}
      <div className="flex w-full justify-between  md:justify-start gap-4 pt-4 md:pt-14">
        <button
          onClick={() => handleSortClick("postId")}
          className="shadow-button truncate  px-3 py-1 rounded-lg text-sm bg-gray-50 hover:bg-gray-100 flex flex-row gap-1"
        >
          Sort Post ID
          <div className="flex flex-col text-[10px]">
            {renderArrow("postId")}
          </div>
        </button>
        <button
          onClick={() => handleSortClick("name")}
          className="shadow-button truncate px-3 py-1 rounded-lg text-sm bg-gray-50 hover:bg-gray-100  flex flex-row gap-1"
        >
          Sort Name
          <div className="flex flex-col text-[10px]">{renderArrow("name")}</div>
        </button>
        <button
          onClick={() => handleSortClick("email")}
          className="shadow-button truncate px-3 py-1 rounded-lg text-sm bg-gray-50 hover:bg-gray-100  flex flex-row gap-1"
        >
          Sort Email
          <div className="flex flex-col text-[10px]">
            {renderArrow("email")}
          </div>
        </button>
      </div>
      {/* Search bar */}
      <div className="relative w-full md:w-72 py:4 md:py-7 ">
        <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-base" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onSearchChange(e.target.value);
          }}
          placeholder="Search name, email, comment"
          className="shadow-button pl-9 h-11 pr-3 py-1 rounded-lg placeholder:text-sm w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
    </div>
  );
};

export default FilterBar;
