import React, { useContext } from 'react'
import Comp from './components/comp'
import DataContextProvider from './contexts/test'
import { DataContext } from './contexts/test'
function App() {
  return (
    <DataContextProvider>
      <div>
        <p>running</p>
      </div>
      <Comp />
    </DataContextProvider>
  )
}

export default App
