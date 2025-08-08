const ProfileSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 mx-auto px-6">
        {/* Back button and welcome text skeleton */}
        <div className="flex items-center gap-2 text-2xl py-10">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-48 h-8 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Profile Section */}
        <div className="shadow-custom rounded-xl p-2 sm:p-8">
          <div className="py-6 px-2 sm:px-6">
            {/* Avatar and name section */}
            <div className="flex items-center gap-4 sm:gap-6 pb-6 mb-6">
              <div className="h-[80px] w-[80px] sm:h-[90px] sm:w-[90px] bg-gray-200 rounded-full animate-pulse" />
              <div className="flex flex-col gap-2">
                <div className="w-48 h-7 bg-gray-200 rounded animate-pulse" />
                <div className="w-36 h-5 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            {/* User Data Fields Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* User ID */}
              <div>
                <div className="w-20 h-5 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              </div>
              {/* Name */}
              <div>
                <div className="w-20 h-5 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              </div>
              {/* Email */}
              <div>
                <div className="w-20 h-5 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              </div>
              {/* Address */}
              <div>
                <div className="w-20 h-5 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              </div>
              {/* Phone */}
              <div>
                <div className="w-20 h-5 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
