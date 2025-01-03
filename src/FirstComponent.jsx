import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FirstComponent = () => {

    const firstName = useSelector(state => state.firstName)
    const secondName = useSelector(state => state.secondName)
    const dispatch = useDispatch()
    const handleFirstName = () => {
        dispatch({
            type: 'CHANGE_FIRST_NAME',
            payload: {
                firstName: 'Mukesh'
            }
        })
    }
  return (
    <div>
        {firstName} {secondName}
        <button onClick={handleFirstName}>Change First Name</button>
    </div>
  )
}

export default FirstComponent