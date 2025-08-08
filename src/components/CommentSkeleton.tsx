const CommentSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-11/12 mx-auto flex flex-col items-center">
        {/* Filter Bar Skeleton */}
        <div className="w-full bg-white">
          <div className="flex flex-col-reverse my-4 md:my-0 md:flex-row justify-between items-center bg-white">
            {/* Sort buttons skeleton */}
            <div className="flex w-full justify-between md:justify-start gap-4 pt-4 md:pt-14">
              <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse" />
            </div>
            {/* Search bar skeleton */}
            <div className="relative w-full md:w-72 py-4 md:py-7">
              <div className="h-11 w-full bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="w-full mt-6 overflow-x-auto bg-white">
          <div className="min-w-[800px] w-full">
            {/* Table header */}
            <div className="bg-gray-300 flex">
              <div className="w-[100px] px-6 py-3 rounded-tl-md">
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="w-[30%] px-6 py-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="w-[30%] px-6 py-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex-1 px-6 py-3 rounded-tr-md">
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            {/* Table rows */}
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx} className="flex shadow-table-field h-20">
                <div className="w-[100px] px-6 py-3">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="w-[30%] px-6 py-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="w-[30%] px-6 py-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex-1 px-6 py-3">
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination skeleton */}
            <div className="flex items-center justify-center md:justify-end">
              <div className="flex items-center justify-center gap-3 py-6">
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                  <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                  <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                  <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSkeleton;