import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SecondComponent = () => {
    const firstName = useSelector(state => state.firstName)
    const secondName = useSelector(state => state.secondName)

    const  dispatch = useDispatch()
    const handleSecondName = () => {
        dispatch({
            type: 'CHANGE_SECOND_NAME',
            payload: {
                secondName: 'Krishnakumar'
            }
        })
    }
  return (
    <div>
        {firstName} {secondName}
        <button onClick={handleSecondName}>Change Second Name</button>
    </div>
  )
}

export default SecondComponent