const NavBarSkeleton = () => {
  return (
    <div className="bg-custom flex items-center justify-center">
      <div className="w-full sm:w-11/12 flex justify-between p-3 sm:p-5">
        {/* Logo skeleton */}
        <div className="w-32 h-8 bg-gray-300 rounded animate-pulse" />
        
        {/* User profile skeleton */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
          <div className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default NavBarSkeleton;
