import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate();


  return (
    <div className='bg-cyan-800 px-4 py-2'>
      <button  onClick={() => {
                navigate('/')
            }} className='bg-blue-500 mt-4 cursor-pointer active:scale-95 text-white px-5 py-2 rounded-md'>
                Return to Home Page
            </button>

            <button  onClick={() => {
                navigate(-1)
            }} className='bg-blue-500 mt-4 ml-4 cursor-pointer active:scale-95 text-white px-5 py-2 rounded-md'>
                Back
            </button>
    </div>
  )
}

export default Navbar2
