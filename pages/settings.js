import React from 'react'
import Navbar from "../components/Navbar";
import Footer2 from '../components/Footer2'
const settings = () => {
  return (
    <div className="">
       <div className="fixed inset-0"><Navbar/></div>
       <div 
       //className="max-w-2xl mt-20 font-sans text-black lg:mx-auto sm:mx-auto sm:max-w-3xl sm:items-center sm:justify-center"
      //  
       className="w-4/5 mx-auto mt-20 font-sans text-black sm:mx-auto"
       >
           <div className='mb-5 font-sans text-xl font-semibold'>
            Settings
          </div>
        <div className="p-10 text-white bg-black rounded-md">
          <div >
            <div className="mb-10 font-sans">
              <div>Your Name</div>
              <div>Rakesh Mahendran</div>
            </div>
             <div className="font-sans">
              <div>Your Email</div>
              <div>rakeshmahendran99@gmail.com</div>
            </div>
          </div>
        </div>
          <div className="my-5">
           <div className="my-5 font-sans text-xl font-semibold"> Delete Account </div>
           <div  className="p-8 text-white bg-black rounded-md">
              <button>Delete Account</button>
           </div>
          </div>
       </div>
       <div className=""><Footer2/></div>
    </div>

  )
}

export default settings