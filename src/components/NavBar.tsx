

const NavBar = () => {
  return (
    <div className='flex justify-between p-5 bg-custom'>
      <img src="myimage.png" alt="Logo" />
      <div className='flex justify-center items-center gap-2 mx-20 '>
         <div className='flex justify-center items-center bg-white text-custom text-2xl w-10 h-10 rounded-full border-2  p-0.5'>
            EH
         </div>
         <h2 className='text-white mx-4 my-2 text-[18px] font-semibold'>Erwin howel</h2>
      </div>
    </div>
  )
}

export default NavBar
