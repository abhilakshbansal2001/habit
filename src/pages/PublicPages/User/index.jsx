import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewUser } from '../../../Redux/user'

const User = () => {

  const [name , setName] = React.useState('')
  const [email , setEmail] = React.useState('')

  const navigateTo = useNavigate()

  const dispatch = useDispatch()
  const user = useSelector(state => state.user?.user)
  

  const submitHandler = (e) => {
    e.preventDefault();
    if(!name || !email)return;
    const user = {
      name,
      email
    }
    dispatch(addNewUser({user}))
    navigateTo("/habits" , { replace: true })
  }

  React.useEffect(() => {
    if(user)
      navigateTo("/habits")
  }, [])

  return (
    <div className='w-full h-screen bg-primary flex justify-center items-center flex-col'>
      <form className='max-w-[400px] w-[90%] text-center' onSubmit={submitHandler}>

        <h1 className='text-white font-bold text-5xl my-5 mb-10'>Welcome</h1>
        <div className='flex flex-col gap-2'>
          <div>
            <input value={name} onChange={(e) => setName(e.target.value)} className='w-full py-2 text-lg pl-3 text-textColorPrimary placeholder:text-sm outline-none rounded' placeholder='Enter name...' />
          </div>
          <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full py-2 text-textColorPrimary text-lg pl-3 placeholder:text-sm rounded outline-none' type={"email"}  placeholder='Enter email...' />
          </div>
          <div className='rounded'>
            <input  className='cursor-pointer rounded w-full hover:opacity-90 py-1 text-lg pl-3 bg-secondary shadow-2xl shadow-secondary text-white font-semibold' type={"submit"}  placeholder='Enter email...' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default User