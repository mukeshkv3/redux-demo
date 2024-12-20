import { useState } from 'react'
import './App.css'
import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Reducer'
import FirstComponent from './FirstComponent'
import { Provider } from 'react-redux'
import SecondComponent from './SecondComponent'
import Counter from './redux-with-slice/Counter'
import store from './redux-with-slice/Store'

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
          <SecondComponent/>
        </div>
      </Provider>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </>
  )
}

export default App
