import React from 'react'
import { NavLink } from 'react-router-dom'

const NavButton = ({ Icon , SelectedIcon  ,  value , path }) => {
  return (
        <NavLink to={path} className="text-sm ">
            {({ isActive }) => (
                isActive ? (
                <div className='flex p-2 bg-secondary rounded-md gap-2 items-center'>
                    <div>
                        {<SelectedIcon className="text-white" />}
                    </div>
                    <div className='text-white font-semibold text-xs'>
                        {value}
                    </div>
                </div>
                ) : (
                    <div className='flex p-2 rounded-md hover:bg-backdrop hover:text-[#9e9e9e] gap-2 items-center text-[#7b7c7c]'>
                        <div>{<Icon />}</div>
                        <div className='text-xs'>
                            {value}
                        </div>
                    </div>
                )
            )}
            
        </NavLink>
  )
}

export default NavButton