import moment from 'moment/moment'
import React, { useEffect } from 'react'
import { AiFillDelete, AiOutlineSave } from 'react-icons/ai'
import { CiSaveDown2 } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { selectHabit , removeSelectHabit } from '../../Redux/habit'
import { removeHabit, updateHabit } from '../../Redux/user'

const EditModal = ({ modalCloseHandler , habit , setIsInputChanged , setModal }) => {

    const [name, setName] = React.useState(habit.name)
    const [date, setDate] = React.useState(habit.date);
    const [timeOfDay, setTimeOfDay] = React.useState(habit.timeOfDay )
    const [description, setDescription] = React.useState(habit.description)

    const currentSelected = useSelector(state => state.habit?.habit)

    console.log(currentSelected , habit)

    const nameRef = React.useRef(null)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        const newHabit = {
            ...habit,
            name,
            timeOfDay,
            date,
            description,
        }
        dispatch(updateHabit({habit : newHabit }))
        dispatch(selectHabit({habit : newHabit}))
        setModal(false);
    }
    
    const deleteHandler = (e) => {
        e.preventDefault()
        dispatch(removeHabit({id : habit.id }))
        if(currentSelected?.id === habit.id){
            console.log("hello")
            dispatch(removeSelectHabit())
        }
        setModal(false);
    }
    

    React.useEffect(() => {
        nameRef.current?.focus();
        
    }, [])
    

    
    const onChangeDate = (e) => {
        setIsInputChanged(true); 
        setDate(moment(new Date(e.target.value)).format("YYYY-MM-DD"));
    };

  return (
    <div onClick={e => e.stopPropagation()} className='w-[90%] max-w-[450px] bg-backdrop p-3 pb-6 rounded shadow-lg'>
        <div className='flex'>
            <h2 className='text-white text-lg flex-1 font-semibold'>Edit {habit.name}</h2>
            <RxCross2 className='text-2xl text-white cursor-pointer' onClick={modalCloseHandler} />

        </div>

        <form className='mt-2' onSubmit={submitHandler} >
            <label>
                <div className='text-[11px] text-[#7b7c7c] font-medium mb-2'>NAME</div>
                <input ref={nameRef} type={"text"} value={name} onChange={e => { setIsInputChanged(true); setName(e.target.value)}} className="bg-[#424242] outline-none px-2 text-white w-full border-borderColor py-[3px] border rounded-sm" />
            </label>
            <div className='flex gap-2 my-3'>
                <label className='flex-1 flex flex-col'>
                    <div className='text-[11px] text-[#7b7c7c] font-medium mb-2 uppercase'>time of day</div>
                    <div className='h-full flex-1'>
                        <select value={timeOfDay} onChange={(e) => {  setIsInputChanged(true); setTimeOfDay(e.target.value)}} className='bg-[#424242] px-2 h-full outline-none w-full text-white border-borderColor py-[3px] border rounded-sm'>
                            <option value={"any time"}>Any Time</option>
                            <option value={'morning'}>Morning</option>
                            <option value={"afternoon"}>Afternoon</option>
                            <option value={"evening"}>Evening</option>
                        </select>
                    </div>
                </label>
                <label className='flex-2'>
                    <div className='text-[11px] text-[#7b7c7c] font-medium mb-2 uppercase'>start date</div>
                    <input type="date" disabled value={date} onChange={onChangeDate} className="px-2 bg-[#424242] text-white outline-none w-full border-borderColor py-[3px] border rounded-sm" />
                </label>
                
            </div>
            <label className=' inline-block w-full'>
                <div className='text-[11px] text-[#7b7c7c] font-medium mb-2 uppercase'>description</div>
                <textarea rows={3} value={description} onChange={e => { setIsInputChanged(true); setDescription(e.target.value)}} type={""} className="bg-[#424242] outline-none px-2 text-white w-full border-borderColor py-[3px] border rounded-sm" />
            </label>
            <div className='flex justify-between mt-2 w-full'>
                <button className='px-3 py-1 bg-red-600 text-white flex items-center gap-2 rounded'  onClick={deleteHandler} >
                    <AiFillDelete/>
                    <div>Delete</div>
                </button>
                <button type='submit' className='flex text-white gap-2 bg-secondary px-3 py-1 items-center font-semibold rounded cursor-pointer'>
                    <AiOutlineSave  />
                    <div>Save</div>
                </button>
            </div>
            
        </form>
    </div>  
  )
}

export default EditModal