import React from 'react'

const Footer2 = () => {
  return (
    <div className='grid grid-flow-col-dense grid-cols-3  p-5 text-xs space-x-4 ' >
            <div>
               <ul>
                    <li className='font-semibold text-base'>Company</li>
                    <li className='ml-1'><a href="">Twitter</a></li>
                    <li className='ml-1'><a href="">Terms</a></li>
                    <li className='ml-1'><a href="">Privacy</a></li>
                    <li className='ml-1'><a href="">Refund Policy</a></li>
                    <li className='ml-1'><a href="">Status</a></li>
                    <li className='ml-1'><a href="">Status</a></li>
               </ul>
            </div>
            <div>
                <ul>
                    <li className='font-semibold text-base'>Resources</li>
                    <li className='ml-1'><a href="">Docs</a></li>
                    <li className='ml-1'><a href="">Blog</a></li>
                    <li className='ml-1'><a href="">Icons generator</a></li>
                    <li className='ml-1'><a href="">Gitbook to Notion</a></li>
                    <li className='ml-1'><a href="">Showcase</a></li>
                    <li className='ml-1'><a href=""> Notion image links tool</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-semibold text-base'>Notion templates</li>
                    <li className='ml-1'><a href="">Docs template</a></li>
                    <li className='ml-1'><a href="">Blog template</a></li>
                    <li className='ml-1'><a href="">Changelog template</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer2