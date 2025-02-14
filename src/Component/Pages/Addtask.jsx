import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
const Addtask = () => {
    const {register,handleSubmit,reset}=useForm()
    const addData=(data)=>{
        axios.post('http://localhost:9800/task',data)
        alert('data Submitted')
        reset()

    }
  return (
    <div className=' container mt-5 mx-auto w-100'>
        <form onSubmit={handleSubmit(addData)}>
      <input type='text' className='form-control w-50 mx-auto mb-3'  placeholder='Enter title' {...register('title')} required/>
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

export default Addtask
