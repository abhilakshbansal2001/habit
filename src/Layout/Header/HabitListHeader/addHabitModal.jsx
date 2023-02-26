import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import Habit from '../../../DataStructure/CustomHabit'
import { addHabit } from '../../../Redux/user'

const AddHabitModal = ({ setModal }) => {

    const [name, setName] = React.useState("")
    const [date, setDate] = React.useState(new Date())
    const [timeOfDay, setTimeOfDay] = React.useState("any time")
    const [description, setDescription] = React.useState("")

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        if(!name || !date || !timeOfDay || !description)
            return;
        const habit = new Habit(name, timeOfDay ,date , description)

        dispatch(addHabit({habit}))
        setModal(false);

        
    }

  return (
    <div onClick={e => e.stopPropagation()} className='w-[90%] max-w-[450px] bg-backdrop p-3 pb-6 rounded shadow-lg'>
        <div className='flex'>
            <h2 className='text-white text-lg flex-1 font-semibold'>New Habit</h2>
            <RxCross2 className='text-2xl text-white cursor-pointer' onClick={() => setModal(false)} />

        </div>

        <form className='mt-2' onSubmit={submitHandler}>
            <label>
                <div className='text-[11px] text-[#7b7c7c] font-medium mb-2'>NAME</div>
                <input type={"text"} value={name} onChange={e => setName(e.target.value)} className="bg-[#424242] outline-none px-2 text-white w-full border-borderColor py-[3px] border rounded-sm" />
            </label>
            <div className='flex gap-2 my-3'>
                <label className='flex-1 flex flex-col'>
                    <div className='text-[11px] text-[#7b7c7c] font-medium mb-2 uppercase'>time of day</div>
                    <div className='h-full flex-1'>
                        <select value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)} className='bg-[#424242] px-2 h-full outline-none w-full text-white border-borderColor py-[3px] border rounded-sm'>
                            <option value={"any time"}>Any Time</option>
                            <option value={'morning'}>Morning</option>
                            <option value={"afternoon"}>Afternoon</option>
                            <option value={"evening"}>Evening</option>
                        </select>
                    </div>
                </label>
                <label className='flex-2'>
                    <div className='text-[11px] text-[#7b7c7c] font-medium mb-2 uppercase'>start date</div>
                    <input type="date" onChange={e => setDate(e.target.value)} className="px-2 bg-[#424242] text-white outline-none w-full border-borderColor py-[3px] border rounded-sm" />
                </label>
                
            </div>
            <label className=' inline-block w-full'>
                <div className='text-[11px] text-[#7b7c7c] font-medium mb-2 uppercase'>description</div>
                <textarea rows={3} value={description} onChange={e => setDescription(e.target.value)} type={""} className="bg-[#424242] outline-none px-2 text-white w-full border-borderColor py-[3px] border rounded-sm" />
            </label>
            <label>
                <input type={'submit'} className="w-full bg-secondary text-white text-md font-semibold py-1 rounded mt-2 cursor-pointer" />
            </label>
            
        </form>
    </div>  
  )
}

export default AddHabitModal