import { useState } from 'react'
import './App.css'
import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Reducer'
import FirstComponent from './FirstComponent'
import { Provider } from 'react-redux'
import SecondComponent from './SecondComponent'
import Counter from './redux-with-slice/Counter'
import store from './redux-with-slice/Store'
import officeStore from './redux-with-thunk/Store'
import ShowOffice from './redux-with-thunk/ShowOffice'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowEmployee from './components/ShowEmployee'

function App() {

  const myStore = configureStore({
    reducer: Reducer
  })
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login></Login>
      <Provider store={myStore}>
        <div>
          <FirstComponent />
          <SecondComponent />
        </div>
      </Provider>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
      <Provider store={officeStore}>
        <ShowOffice></ShowOffice>
      </Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/show-employee" element={<ShowEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
