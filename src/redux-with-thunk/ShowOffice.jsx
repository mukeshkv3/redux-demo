import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOffices } from './OfficeSlice'

const ShowOffice = () => {

    const { offices, isLoading, hasError } = useSelector((state) => state.office)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOffices())
    }, [dispatch])

    if (isLoading) return <div>Loading...</div>
    if (hasError) return <div>Error loading offices: {hasError}</div>

    return (
        <div>
            <h1>Offices</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Location</th>
                        <th>Image Reference</th>
                    </tr>
                </thead>
                <tbody>
                    {offices.map((office) => (
                        <tr key={office.id}>
                            <td>{office.id}</td>
                            <td>{office.location}</td>
                            <td>{office.imgRef}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowOffice