import React from 'react'


const DropDownWrapper = ({ onClick , children , dropdown , moreRef  }) => {

    const containerRef = React.useRef()

    const globalClickHandler = (nativeEvent) => {
        console.log( "target" , moreRef.current)
        console.log(moreRef?.current?.contains(nativeEvent.target) , 'value')
        if (  containerRef.current?.contains(nativeEvent.target) || moreRef?.current?.contains(nativeEvent.target) ) return
        onClick(nativeEvent)
      }


    React.useEffect(() => {
        console.log("first time")
        document.addEventListener('click', globalClickHandler)
        return () => {
            console.log("return  time")
            document.removeEventListener('click', globalClickHandler)
        }
    } , [])


  return (
    <div ref={containerRef}>
        { children }
    </div>
  )
}

export default DropDownWrapper

