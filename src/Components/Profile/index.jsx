import React from 'react'
import { useSelector } from 'react-redux';
import ProfileCard from './ProfileCard';
import { AiFillCaretDown } from 'react-icons/ai'
import { IoAddOutline } from "react-icons/io5";
import IconButton from '../Buttons/IconButton';


const Profile = ({ setModalOpen }) => {
  const user = useSelector(state => state.user?.user)
  const usersList = JSON.parse(localStorage.getItem("users"));

  const [open , setOpen] = React.useState(false);

  const addProfileHandler = () => {
    setModalOpen(true)
    setOpen(false)
  }

  React.useEffect(() => {
    function modalClose(){
      setOpen(false);
    }
    document.body.addEventListener('click',modalClose)

    return () => {
      document.body.removeEventListener('click',modalClose)
    }
  } , [])

  return (
    <div className='relative' onClick={(e) => e.stopPropagation()}>
      <div className='flex cursor-pointer hover:opacity-95 rounded overflow-hidden' onClick={() => setOpen(!open)}>
      <div className={` bg-backdrop py-2 cursor-pointer flex-1 px-2  flex gap-2 items-center border-[1px] border-borderColor`}>
          <div className='rounded-full bg-red-400  w-6 h-6 aspect-square flex items-center justify-center text-white font-semibold'>
              {user?.name.toUpperCase().charAt(0)}
          </div>
          <span className='text-sm text-white capitalize'>{user?.name}</span>
      </div>
        <div className=' border-borderColor border-[1px] bg-backdrop flex items-center rounded-r-md px-2 text-white'>
          {open ? 
            <AiFillCaretDown className='rotate-180' />
            :
            <AiFillCaretDown/>
          }
        </div>
      </div>
      { open && <div className='w-full shadow-2xl mt-2 bg-backdrop z-10 rounded overflow-hidden absolute'>
          {
            usersList?.filter(el => el !== user?.name ).map(name => {
              return <ProfileCard key={user.id} setOpen={setOpen} hover={true} name={name} />
            })
          }
          <button onClick={addProfileHandler} className='bg-backdrop px-2 py-2  flex items-center gap-2 border-[1px] border-borderColor w-full'>
            <IoAddOutline className='text-white text-md' />
            <span className='text-white text-sm'>Add new Profile</span>
          </button>
      </div>}
    </div>
  )
}

export default Profile