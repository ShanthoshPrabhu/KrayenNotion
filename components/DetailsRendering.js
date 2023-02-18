import React from 'react'
import axios from 'axios'

const DetailsRendering =async () => {

  // const arrayOfDashboard =[
  //   {
  //      "name":"Lathiesh",
  //      "url":"http://lathiesh.com",
  //      "type":"BLOG"
  //   },
  //   {
  //     "name":"Rakesh",
  //     "url":"http://rakesh.com",
  //     "type":"BLOG"
  //   },
  //     {
  //     "name":"Rathina",
  //     "url":"http://rathina.com",
  //     "type":"BLOG"
  //   },
  //     {
  //     "name":"Shanthosh",
  //     "url":"http://shanthosh.com",
  //     "type":"BLOG"
  //   }
  //  ]
  // console.log(arrayOfDashboard)

  return (
    <div className='mt-20px'>
      {/* <div className="bg-red-400 rounded-lg shadow-md p-6">
        <table className="w-full text-left">
          <thead>
            <tr className=" font-bold uppercase  text-white">
              <th className="px-4 pb-3">NAME</th>
              <th className="px-4 pb-3">URL</th>
              <th className="px-4 pb-3">TYPE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white">
              <td className="border-t px-4 py-5">Lathiesh</td>
              <td className="border-t px-4 py-5">www.krayennotionsite.com</td>
              <td className="border-t px-4 py-5">BLOG</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-white">
              <td className="border-t px-4 py-5">Rakesh</td>
              <td className="border-t px-4 py-5">www.krayennotionsite.com</td>
              <td className="border-t px-4 py-5">BLOG</td>
            </tr>
          </tbody>
        </table>
      </div> */}
     
                            <div className="p-6 mx-10 font-medium text-white rounded-lg shadow-md font-2xl bg-secondary-6000">
                        <div className="p-6 rounded-lg shadow-md">
                          <table className="text-center">
                            <thead>
                             <tr>
                               <th className="p-2 font-mono font-medium">Name</th>
                               <th className="p-2 font-mono font-medium">Url</th>
                               <th className="p-2 font-mono font-medium">Type</th>
                             </tr>
                            </thead>
                            <tbody>
                                {/* {arrayOfDashboard && arrayOfDashboard.map((item)=>{
                                  console.log("arrayofDahboard",arrayOfDashboard)
                                  return (
                                    <tr className="text-white ">
                                      <td className="px-4 py-5 text-sm font-thin border-t">{item?.name}</td>
                                      <td className="px-4 py-5 text-sm font-thin border-t">{item?.url}</td>
                                      <td className="px-4 py-5 text-sm font-thin border-t">{item?.type}</td>
                                    </tr>
                                  )
                                })}                              */}
                            </tbody>
                          </table>
                        </div>
                        </div>                       
    </div>
  )
}

export default DetailsRendering
