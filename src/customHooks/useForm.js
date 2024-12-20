import { useState } from 'react'

export const useForm = (callBack, initialValue = {}) => {
    const [values, setValues] = useState(initialValue)

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        callBack()
    }

    return {
        values,
        onChange,
        onSubmit,
    }
}