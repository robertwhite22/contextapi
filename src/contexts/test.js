import { useState, createContext } from 'react'

export const DataContext = createContext()

const DataContextProvider = (props) => {
  const [data, setData] = useState(null)
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json))
  }
  const value = { getData, data }
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  )
}

export default DataContextProvider
