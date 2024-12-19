import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FirstComponent = () => {

    const firstName = useSelector(state => state.firstName)
    const dispatch = useDispatch()
    const handleFirstName = () => {
        dispatch({
            type: 'CHANGE_FIRST_NAME',
            payload: {
                firstName: 'John'
            }
        })
    }
  return (
    <div>
        {firstName}
        <button onClick={handleFirstName}>Change First Name</button>
    </div>
  )
}

export default FirstComponent