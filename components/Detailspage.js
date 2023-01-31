import React from "react";

const Detailspage = () => {

  
  const arrayOfDashboard =[
    {
       "name":"Lathiesh",
       "url":"http://lathiesh.com",
       "type":"BLOG"
    },
    {
      "name":"Rakesh",
      "url":"http://rakesh.com",
      "type":"BLOG"
    },
      {
      "name":"Rathina",
      "url":"http://rathina.com",
      "type":"BLOG"
    },
      {
      "name":"Shanthosh",
      "url":"http://shanthosh.com",
      "type":"BLOG"
    }
   ]
  console.log(arrayOfDashboard)
  return (
    <div>
      <div className=''>
      <div className="p-6 bg-black rounded-lg shadow-md">
                        <div className="p-6 rounded-lg shadow-md ">
                          <table className="w-full text-center sm:text-xs">
                            <thead>
                             <tr className="font-bold text-white uppercase " >
                               <th className="p-2 font-mono font-medium">Name</th>
                               <th className="p-2 font-mono font-medium">Url</th>
                               <th className="p-2 font-mono font-medium">Type</th>
                             </tr>
                            </thead>
                            <tbody>
                                {arrayOfDashboard && arrayOfDashboard.map((item)=>{
                                  console.log("arrayofDahboard",arrayOfDashboard)
                                  return (
                                    <tr className="text-white ">
                                      <td className="px-4 py-5 text-sm font-thin border-t sm:text-xs">{item?.name}</td>
                                      <td className="px-4 py-5 text-sm font-thin border-t sm:text-xs">{item?.url}</td>
                                      <td className="px-4 py-5 text-sm font-thin border-t sm:text-xs">{item?.type}</td>
                                    </tr>
                                  )
                                })}                             
                            </tbody>
                          </table>
                        </div>
         {/* </div>   */}
         </div>  
                            
      </div>
    
    </div>
  );
};

export default Detailspage;
