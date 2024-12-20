import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ShowEmployee = () => {
    const [token, setToken] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { username } = location.state || {}

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token')
        const storedIsLogged = sessionStorage.getItem('isLogged') === 'true'
        
        setToken(storedToken)
        setIsLogged(storedIsLogged)

        if (storedToken && storedIsLogged) {
            console.log('Token:', storedToken)
            console.log('Is Logged:', storedIsLogged)
        } else {
            console.log('No token or not logged in')
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    return (
        <div>
            <h1>Show Employee</h1>
            {isLogged ? (
                <div>
                    <p>Token: {token}</p>
                    <p>{username} is logged in</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>User is not logged in</p>
            )}
        </div>
    )
}

export default ShowEmployee