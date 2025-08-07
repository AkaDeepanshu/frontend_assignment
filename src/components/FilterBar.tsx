import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

type SortDirection = "asc" | "desc" | null;
type SortField = "name" | "postId" | "email" | null;

const FilterBar = ({
  onSortChange,
}: {
  onSortChange: (field: SortField, direction: SortDirection) => void;
}) => {
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

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
          <IoIosArrowUp className={"text-black"} />
          <IoIosArrowDown className={"text-gray-400"} />
        </>
      );
    if (sortDirection === "desc")
      return (
        <>
          <IoIosArrowUp className={"text-gray-400"} />
          <IoIosArrowDown className={"text-black"} />
        </>
      );
    return null;
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white ">
      <div className="flex gap-3">
        <button
          onClick={() => handleSortClick("postId")}
          className="shadow-button px-3 py-1 rounded text-sm bg-gray-50 hover:bg-gray-100 flex flex-row gap-1"
        >
          Sort Post ID
          <div className="flex flex-col text-[10px]">
            {renderArrow("postId")}
          </div>
        </button>
        <button
          onClick={() => handleSortClick("name")}
          className="shadow-button px-3 py-1 rounded text-sm bg-gray-50 hover:bg-gray-100  flex flex-row gap-1"
        >
          Sort Name
          <div className="flex flex-col text-[10px]">{renderArrow("name")}</div>
        </button>
        <button
          onClick={() => handleSortClick("email")}
          className="shadow-button px-3 py-1 rounded text-sm bg-gray-50 hover:bg-gray-100  flex flex-row gap-1"
        >
          Sort Email
          <div className="flex flex-col text-[10px]">
            {renderArrow("email")}
          </div>
        </button>
      </div>
      <div className="relative w-72">
        <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          placeholder="Search name, email, comment"
          className="shadow-button pl-9 pr-3 py-1 rounded placeholder:text-base w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
    </div>
  );
};

export default FilterBar;
