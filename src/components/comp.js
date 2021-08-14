import React, { useContext } from 'react'
import { DataContext } from '../contexts/test'
const Comp = () => {
  const { getData, data } = useContext(DataContext)

  return (
    <div>
      {data ? <p>there</p> : <p>not there</p>}
      <button onClick={getData}>gd</button>
    </div>
  )
}

export default Comp
