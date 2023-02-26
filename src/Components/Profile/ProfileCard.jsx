import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { selectUser } from '../../Redux/user'

const ProfileCard = ({ name , setOpen, hover }) => {

    const dispatch = useDispatch()
    const clickHandler = () => {
        
        dispatch(selectUser({name}))
        setOpen(prev => !prev)
    }

  return (
    <div onClick={clickHandler} className={` bg-backdrop py-2 ${hover && 'hover:bg-borderColor'} cursor-pointer flex-1 px-2  flex gap-2 items-center border-[1px] border-borderColor`}>
        <div className='rounded-full bg-red-400  w-6 h-6 aspect-square flex items-center justify-center text-white font-semibold'>
            {name?.toUpperCase().charAt(0)}
        </div>
        <span className='text-sm text-white capitalize'>{name}</span>
    </div>
  )
}

export default ProfileCard