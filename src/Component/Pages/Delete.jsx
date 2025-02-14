import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
const Delete = () => {
    const {userID} = useParams()
    const [user,setUser]= useState([])
    const navigate = useNavigate()
    const getData = async()=>{
        const response = await axios.get(`http://localhost:9800/task/${userID}`)
        const result =response.data
        setUser(result)
    }
    useEffect(()=>{
        getData()
    },[])
    const deleteData =(data)=>{
        axios.delete(`http://localhost:9800/task/${userID}`,data)
        alert('data Dleted')
        navigate('/taskdetails')
    }
  return (
    <div>
          <div>
      <div>
        <h1>title - {user.title}</h1>
        <h2>Description - {user.description}</h2>
        <h2>Status - {user.status}</h2>
      </div>
      <div>
        <button onClick={deleteData} className='btn btn-danger'>Yes</button>
        <NavLink to={'/edittask'}><button className='btn btn-primary ms-3'>No</button></NavLink>
      </div>
    </div>
    </div>
  )
}

export default Delete
