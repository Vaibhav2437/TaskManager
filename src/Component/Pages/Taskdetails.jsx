import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Taskdetails = () => {
    const [user, setUser] =useState([]);
    const [statusfind, setStatus] = useState('')
    const getData=async()=>{
        const response = await axios.get(`http://localhost:9800/task`)
        const result = response.data
        setUser(result)
    }
    useEffect(()=>{
        getData()
    },[])
    const searchHandler = (event) =>{
        const search = event.target.value
        setStatus(search)
    }
    const searchNameHandler = user.filter((s)=>{
        return (s.status ? s.status.toLowerCase() : "").includes(statusfind?.toLowerCase() || "");
    })

  return (
    <div>
        <h4 className='mt-5'>Satus</h4>
        <input 
                type="text"
                className='form-control w-50 mx-auto mb-5'
                placeholder='Status'
                value={statusfind}
                onChange={searchHandler}
            />
            
      <table className='table'>
        <thead>
            <tr>
                <th>SR No</th>
                <th>title</th>
                <th>Description</th>
                <th>status</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
        {
               searchNameHandler.map((u,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{u.title}</td>
                            <td>{u.description}</td>
                            <td>{u.status}</td>
                            <td>
                                <NavLink to={`/addtask/update/${u.id}`}>
                                <button className='btn btn-danger'>Edit</button>
                                </NavLink>
                                <NavLink to={`/addtask/delete/${u.id}`}>
                                <button className='btn btn-primary ms-3'>Delete</button>
                                </NavLink>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Taskdetails
