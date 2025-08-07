import NavBar from './../components/NavBar';
import { IoIosArrowRoundBack } from "react-icons/io";

const Profile = () => {
  return (
    <div >
        {/* NavBar */}
        <NavBar/>
        <div className='w-11/12 flex flex-col justify-center  m-5 p-5'>
            {/* Back button */}
            <div className='flex flex-col justify-start md:flex-row text-3xl text-custom gap-1 m-5 p-4'>
                <button className='cursor-pointer'>
                    <IoIosArrowRoundBack />
                </button>
                <p>Welcome,</p>
                <p>Erwin Holwel</p>
            </div>
            {/* Profile Section */}
            <div className='shadow-custom flex flex-col m-10 p-8 text-custom'>
                <div className='flex gap-4'>
                    <img src="myimg.png" alt="dp" />
                    <div className='flex flex-col '>
                        <h1 className='text-2xl'>Ervin howel</h1>
                        <h3>ervinhowel@gmail.com</h3>
                    </div>
                </div>
                {/* User Data Fields Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                        <label className="font-normal text-[16px]">User ID</label>
                        <p className="bg-gray-100 rounded-lg p-2 my-2">234567</p>
                    </div>
                    <div>
                        <label className="font-normal text-[16px]">Name</label>
                        <p className="bg-gray-100 rounded-lg p-2 my-2">Ervin Howell</p>
                    </div>
                    <div>
                        <label className="font-normal text-[16px]">Email ID</label>
                        <p className="bg-gray-100 rounded-lg p-2 my-2">ervinhowell@gmail.com</p>
                    </div>
                    <div>
                        <label className="font-normal text-[16px]">Address</label>
                        <p className="bg-gray-100 rounded-lg p-2 my-2">india</p>
                    </div>
                    <div>
                        <label className="font-normal text-[16px]">Phone</label>
                        <p className="bg-gray-100 rounded-lg p-2 my-2">9876543210</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Profile
