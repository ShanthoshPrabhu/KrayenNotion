import React from 'react'

function Footer() {
  return (
    <div className=' grid grid-flow-row grid-cols-1 lg:grid-cols-3 lg:ml-52 lg:absolute lg:w-full mt-6 lg:bottom-0 relative  '>
      <div className=' text-base'>
        <div className=' text-base font-semibold'>Company</div>
        <div className=' h-48'></div>
      </div>
      <div className=' text-base '>
        <div className='font-semibold'>Resources</div>
        <div className=' h-48'></div>
      </div>
      <div className=' text-base '>
        <div className='font-semibold'>Notion templates</div>
        <div className=' h-48'></div>
      </div>
    </div>
  )
}

export default Footer