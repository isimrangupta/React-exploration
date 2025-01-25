import React from 'react'

const ListItems = () => {
  const IPL = ['CSK', 'MI', 'RCB']
  return (
    <>
      <div>
       {IPL.map((ipl)=><h1>{ipl}</h1>)}
      </div>
    </>
  )
}

export default ListItems
