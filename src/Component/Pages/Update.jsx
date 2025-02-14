import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {userID} = useParams()
    const navigate = useNavigate()
    const {register,handleSubmit,setValue} = useForm()
    const getData = async ()=>{
        const result = await axios.get(`http://localhost:9800/task/${userID}`)
        setValue('title',result.data.title)
        setValue('description',result.data.description)
        setValue('status',result.data.status)
    }
    useEffect(()=>{
        getData()
    })
    const putData=(data)=>{
        axios.put(`http://localhost:9800/task/${userID}`,data)
        alert('data Updated')
        navigate('/taskdetails')

    }
  return (
    <div className=' container mt-5 mx-auto w-100'>
        <form onSubmit={handleSubmit(putData)}>
      <input type='text' className='form-control w-50 mx-auto mb-3'  placeholder='Enter title' {...register('title')}/>
      <input type='text' className='form-control w-50 mx-auto mb-3' placeholder='Enter Description' {...register('description')}/>
      <select  className='form-control w-50 mx-auto' {...register('status')}>
        <option>Status</option>
        <option value='pending'>Pending</option>
        <option value='completed'> Completed</option>
      </select>
      <div className='mt-5'>
      <button type='submit' className='btn btn-primary me-4'>Add Data</button>
      <button type='reset' className='btn btn-warning'>Reset</button>
      </div>
      </form>
    </div>
  )
}

export default Update
