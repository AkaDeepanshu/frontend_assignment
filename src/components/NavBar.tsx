import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../services/userService";
import type { User } from "../types/user";
import avatar from "../assets/avatar.svg";
import logo from "../assets/logo_v3.svg";
import NavBarSkeleton from "./NavBarSkeleton";

const NavBar = () => {
  const navigate = useNavigate();
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  if (isLoading) return <NavBarSkeleton />;

  return (
    <div className=" bg-custom flex items-center justify-center">
      <div className=" w-full sm:w-11/12 flex justify-between p-3 sm:p-5">
        <img src={logo} alt="Logo" />
        <button
          onClick={() => navigate("/profile")}
          className="flex justify-center items-center gap-2  hover:opacity-90"
        >
          <div className="flex w-full ">
          <div className="flex justify-center items-center bg-white w-10 h-10 rounded-full overflow-hidden">
            <img src={avatar} alt="User avatar" className="w-8 h-8" />
          </div>
          <h2 className="text-white mx-2 my-2 text-[18px] font-semibold">
            {user?.name || "Loading..."}
          </h2>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
