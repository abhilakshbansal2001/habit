import React from 'react';
import NavButton from '../../Components/Buttons/NavButton';
import Modal from '../../Components/Modal';
import Profile from '../../Components/Profile';
import { General, Preferences } from '../../Helpers/constants/Sidebar';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch , useSelector } from 'react-redux';
import { addArea, addNewUser } from '../../Redux/user';
import { IoAddOutline } from 'react-icons/io5';
import { AiFillFolder } from 'react-icons/ai';

const Sidebar = () => {
	const [modalOpen, setModalOpen] = React.useState(false);
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');

	const [addInputState, setAddInputState] = React.useState(false);
	const [addInputValue, setAddInputValue] = React.useState('');

	const dispatch = useDispatch();

  const areas = useSelector(state => state.user?.user?.areas || [])
  const areasList = Object.values(areas)

  console.log(Object.values(areas), "nknk")


	const addProfile = (e) => {
		e.preventDefault();
		if (!name || !email) return;

		dispatch(addNewUser({ user: { name, email } }));
		setName('');
		setEmail('');
		setModalOpen(false);
	};

	const modalCloseHandler = () => {
		setModalOpen(false);
	};

	const addInputClickHandler = () => {
		setAddInputState(true);
	};

  const dispatchNewArea = () => dispatch(addArea({name : addInputValue}))

	const addInputKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
      if(!addInputValue){
        setAddInputState(false)
        return;
      }
      dispatchNewArea()
      setAddInputValue("")
		}
	};
	const addInputBlurHandler = (e) => {
		if(!addInputValue){

      setAddInputValue("")
      setAddInputState(false)

    }else{
      dispatchNewArea()
      setAddInputValue("")
    }

	};

	return (
		<React.Fragment>
			<div className='mt-10'>
				<Profile setModalOpen={setModalOpen} />
			</div>
			<div className='mt-5'>
				<div className='flex flex-col gap-1'>
					<div className='uppercase text-white text-xs mb-2 opacity-75 font-bold  '>
						General
					</div>
					{General.map((el) => (
						<NavButton
							value={el.name}
							path={el.path}
							Icon={el.icon}
							SelectedIcon={
								el.selectedIcon
							}
						/>
					))}
				</div>
				<div className='mt-6'>
					<div className='uppercase text-white text-xs mb-2 opacity-75 font-bold  '>
						Areas
					</div>

					{
            areasList?.map(area => (
              <NavButton
                id={area.id}
                value={area.name}
                path={`/area/${area.id}`}
                Icon={AiFillFolder}
                SelectedIcon={AiFillFolder}
              />
            ))
          }

					{addInputState ? (
						<div className='flex rounded-md gap-2 pl-2 p-1 items-center text-[#7b7c7c]'>
							<AiFillFolder className='text-white' />
							<div className='flex-1'>
								<input
									value={
										addInputValue
									}
									onChange={( e ) =>
										setAddInputValue( e.target.value )
									}
									onKeyDown={
										addInputKeyDownHandler
									}
									onBlur={
										addInputBlurHandler
                    
									}
									autoFocus
									type={
										'text'
									}
									className='bg-backdrop py-1 outline-none pl-2 text-xs rounded w-full border border-secondary'
								/>
							</div>
						</div>
					) : (
						<div
							className='flex p-2 rounded-md gap-2 cursor-pointer items-center text-[#7b7c7c]'
							onClick={
								addInputClickHandler
							}
						>
							<IoAddOutline />
							<div className='text-xs capitalize'>
								new area
							</div>
						</div>
					)}
				</div>
				<div className='flex flex-col gap-1 mt-4'>
					<div className='uppercase text-white text-xs mb-2 opacity-75 font-bold  '>
						Preferences
					</div>
					{Preferences.map((el) => (
						<NavButton
							value={el.name}
							path={el.path}
							Icon={el.icon}
							SelectedIcon={
								el.selectedIcon
							}
						/>
					))}
				</div>
			</div>

			{modalOpen && (
				<Modal
					setModalOpen={setModalOpen}
					onClick={modalCloseHandler}
				>
					<div
						onClick={(e) =>
							e.stopPropagation()
						}
						className='max-w-[400px] w-[90%] shadow-sm shadow-backdrop bg-backdrop border border-borderColor text-white p-3 rounded'
					>
						<div className='flex items-center  border-b border-b-borderColor'>
							<h2 className='text-2xl font-bold pb-2  flex-1'>
								Profile
							</h2>
							<RxCross2
								onClick={() =>
									setModalOpen(
										false
									)
								}
								className='text-2xl cursor-pointer'
							/>
						</div>
						<form
							className='mt-4 flex flex-col gap-2'
							onSubmit={addProfile}
						>
							<input
								value={name}
								onChange={(e) =>
									setName(
										e
											.target
											.value
									)
								}
								type='text'
								className='outline-none w-full rounded text-md pl-2 py-1 bg-transparent border text-white placeholder:text-white placeholder:font-medium border-borderColor'
								placeholder='Name '
							/>
							<input
								value={email}
								onChange={(e) =>
									setEmail(e.target.value)
								}
								type='email'
								className='outline-none w-full rounded text-md pl-2 py-1 bg-transparent border text-white placeholder:text-white placeholder:font-medium border-borderColor'
								placeholder='Email '
							/>
							<input
								type='submit'
								className=' cursor-pointer w-full rounded text-md pl-2 py-1 bg-secondary border-2 mt-2 text-white  border-secondary'
								value='submit'
							/>
						</form>
					</div>
				</Modal>
			)}
		</React.Fragment>
	);
};

export default Sidebar;
