import { useState } from 'react'
import './App.css'
import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Reducer'
import FirstComponent from './FirstComponent'
import { Provider } from 'react-redux'

function App() {

  const myStore = configureStore({
    reducer: Reducer
  })
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={myStore}>
        <div>
          <FirstComponent />
        </div>
      </Provider>
    </>
  )
}

export default App
