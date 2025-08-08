import { IoIosArrowRoundBack } from "react-icons/io";
import avatar from "../assets/avatar_big.svg";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/user";
import ProfileSkeleton from "../components/ProfileSkeleton";
import ErrorMessage from "../components/ErrorMessage";

const Profile = () => {
  const navigate = useNavigate();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  if (isLoading) return <ProfileSkeleton />;
  if (error) {
    return (
      <ErrorMessage
        message="Failed to load user profile"
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="w-11/12  mx-auto px-2 sm:px-6">
        {/* Back button */}
        <div className="flex items-center gap-2 text-2xl py-4 sm:py-10 text-custom">
          <button
            className="cursor-pointer"
            onClick={() => navigate("/")}
          >
            <IoIosArrowRoundBack className="text-3xl" />
          </button>
          <p className="font-semibold">Welcome, {user?.name}</p>
        </div>

        {/* Profile Section */}
        <div className="shadow-custom rounded-xl p-2 sm:p-8 text-custom">
          <div className=" pt-6 sm:pt-0 sm:py-6 px-2 sm:px-6">
            <div className="flex items-center gap-4 sm:gap-6 sm:pb-4 mb-4">
              <div className="h-[80px] w-[80px] sm:h-[90px] sm:w-[90px] flex justify-center items-center rounded-full overflow-hidden bg-gray-200">
                <img className="h-[70px] w-[70-px]" src={avatar} alt="dp" />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-2xl">{user?.name}</h1>
                <h3>{user?.email}</h3>
              </div>
            </div>
            {/* User Data Fields Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mt-2 sm:mt-4">
              <div>
                <label className="font-normal text-[16px]">User ID</label>
                <p className="bg-gray-100 rounded-lg py-2 px-4 my-2">
                  {user?.id}
                </p>
              </div>
              <div>
                <label className="font-normal text-[16px]">Name</label>
                <p className="bg-gray-100 rounded-lg py-2 px-4 my-2">
                  {user?.name}
                </p>
              </div>
              <div>
                <label className="font-normal text-[16px]">Email ID</label>
                <p className="bg-gray-100 rounded-lg py-2 px-4 sm:my-2">
                  {user?.email}
                </p>
              </div>
              <div>
                <label className="font-normal text-[16px]">Address</label>
                <p className="bg-gray-100 rounded-lg py-2 px-4 my-2">
                  {user?.address.street}, {user?.address.suite},{" "}
                  {user?.address.city}, {user?.address.zipcode}
                </p>
              </div>
              <div>
                <label className="font-normal text-[16px]">Phone</label>
                <p className="bg-gray-100 rounded-lg py-2 px-4 my-2">
                  {user?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
