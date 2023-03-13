const TileComponent = ({ children }) => {


  return (
    <div className='absolute right-0 top-0 text-xl  rounded-full flex justify-center items-center' >
        { children }
    </div>
  )
}

export default TileComponent