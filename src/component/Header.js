import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <header class='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
        
            <span className=' text-gradient font-semibold rounded  text-3xl'>
              SELAMAWIT</span>
            <h1 className=' text-3xl pl-5'>GETACHEW</h1>
          </a>
          <button className='linear font-semibold 
           rounded-full text-sm w-36  font-thin  ' onClick={()=> navigate('work')}>
           Work With Me  </button>
        </div>
      </div>
    </header>
  )
}

export default Header