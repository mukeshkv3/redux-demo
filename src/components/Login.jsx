import React, { useState } from 'react'
import './Login.css'
import { useForm } from '../customHooks/useForm'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const postData = () => {
        const { username, password } = values

        console.log('Username:', username)
        console.log('Password:', password)

        if (username === 'admin' && password === 'admin') {
            console.log('Login successful')
            sessionStorage.setItem('token', 'ksjdcbkscbksdjcbksdjcbn')
            sessionStorage.setItem('isLogged', true)
            navigate('/show-employee', { state: {username}})
        } else {
            setError('Invalid username or password')
        }
    }

    const initialState = { username: '', password: '' }

    const { onSubmit, onChange, values } = useForm(postData, initialState)

    return (
        <div className='card'>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='userName'>Username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={onChange}
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit" className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}

export default Login