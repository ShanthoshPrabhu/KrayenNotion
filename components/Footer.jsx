import React from 'react'

const Footer = () => {
  return (
    <div  className="flex justify-around bg-red-200 ">
          <div className='' >
            <ul className="" >
                <li className='font-bold'>Company</li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Terms</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Refund Policy</a></li>
                <li><a href="">Status</a></li>
                <li><a href="">Status</a></li>
            </ul>
          </div>
          <div>
            <ul className=""> 
                <li className='font-bold'>Resources</li>
                <li><a href="">Docs</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Icons generator</a></li>
                <li><a href="">Gitbook to Notion</a></li>
                <li><a href="">Showcase</a></li>
                <li><a href=""> Notion image links tool</a></li>
            </ul>
          </div>
          <div>
            <ul className="">
                <li className='font-bold'>Notion templates</li>
                <li><a href="">Docs template</a></li>
                <li><a href="">Blog template</a></li>
                <li><a href="">Changelog template</a></li>
            </ul>
          </div>
        </div>
  )
}

export default Footer
