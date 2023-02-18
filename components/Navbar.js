import React from 'react'

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white  backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-200 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Notion</span>
            <div className="flex space-x-4 text-gray-900">
                <a href="/dashboard">Home</a>
                <a href="/">Docs</a>
                <a href="/">Create</a>
                <a href="/">Settings</a>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

//w-[360px] sm:w-[500px] md:w-[700px] lg:w-[750px] xl:w-[780px]
//w-[360px] sm:w-[500px] md:w-[700px] lg:w-[750px] xl:w-[780px]