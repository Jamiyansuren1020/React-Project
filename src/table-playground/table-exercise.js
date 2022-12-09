import { useEffect, useState } from "react"
import axios from 'axios'
export default function HTMLTableExercise () {
    const [employersInfo, setEmployersInfo] =useState([])

    useEffect(() => {
        axios
        .get('https://random-data-api.com/api/v2/users?size=10')
        .then((res) => {
            if (res.status === 200) {
                setEmployersInfo(res.data)
                console.log(res.data)
            }
        })
    }, [])
    return (
    <div>
        Employers Data
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th colSpan={2}>Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Employment</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employersInfo.map(employer => {
                    return (
                        <tr key={employer.id}>
                            <td><img width='30px' src={employer.avatar}/></td>
                            <td>{employer.first_name}</td>
                            <td>{employer.last_name}</td>
                            <td>{employer.gender}</td>
                            <td>{employer.date_of_birth}</td>
                            <td>{employer.email}</td>
                            <td>{employer.phone_number}</td>
                            <td>{employer.username}</td>
                            <td style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'8px'}}>
                                <div style={{fontWeight:'bold'}}>{employer.employment.title}</div>
                                <div style={{fontSize:'12px', fontColor:'gray'}}>{employer.employment.key_skill}</div>
                            </td>
                            <td>
                                <div>{employer.address.street_address}</div>
                                <div></div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)}