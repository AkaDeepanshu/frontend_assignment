import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../services/userService";
import type { User } from "../types/user";
import avatar from "../assets/avatar.svg";
import logo from "../assets/logo_v3.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const { data: user } = useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return (
    <div className=" bg-custom flex items-center justify-center">
      <div className="w-11/12 flex justify-between p-5">
        <img src={logo} alt="Logo" />
        <button
          onClick={() => navigate("/profile")}
          className="flex justify-center items-center gap-2 mx-20 hover:opacity-90"
        >
          <div className="flex justify-center items-center bg-white w-10 h-10 rounded-full overflow-hidden border-2">
            <img src={avatar} alt="User avatar" className="w-8 h-8" />
          </div>
          <h2 className="text-white mx-4 my-2 text-[18px] font-semibold">
            {user?.name || "Loading..."}
          </h2>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
