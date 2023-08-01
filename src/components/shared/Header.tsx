'use client'
import Link from 'next/link'
import React, { useState } from 'react'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import the icons you need
import { faListAlt, faClose } from '@fortawesome/free-solid-svg-icons'
function Header() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-[2]'>
        <div className='hidden md:flex justify-between items-center m-auto px-10 py-5 text-white'>
          <Link href={'/'}>
            <h1 className='font-bold text-4xl group relative inline-block overflow-hidden px-5 py-2 text-slate-800 hover:text-orange-800 focus:outline-none focus:ring" '>
              <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-orange-700 transition-all duration-200 group-hover:w-full'></span>
              <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-orange-700 transition-all duration-200 group-hover:h-full'></span>
              <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-orange-700 transition-all duration-200 group-hover:w-full'></span>
              <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-orange-700 transition-all duration-200 group-hover:h-full'></span>
              Travel
            </h1>
          </Link>
          <ul className='flex justify-between items-center'>
            <li className='px-4 hover:text-red-900 hover:underline '>
              <Link href={'#'}>Home</Link>
            </li>
            <li className='px-4 hover:text-red-900 hover:underline '>
              <Link href={'#'}>About</Link>
            </li>
            <li className='px-4 hover:text-red-900 hover:underline '>
              <Link href={'#'}>Services</Link>
            </li>
            <li className='px-4 hover:text-red-900 hover:underline '>
              <Link href={'#'}>Upcoming Packages</Link>
            </li>
          </ul>
          <button className='border px-10 py-2 bg-red-900 text-white'>
            Get In Touch
          </button>
        </div>
        <div className='md:hidden flex justify-between items-center w-full px-10'>
          <Link href={'/'}>
            <h1 className='font-bold text-4xl group relative inline-block overflow-hidden px-5 py-2 text-slate-800 hover:text-orange-800 focus:outline-none focus:ring" '>
              <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-orange-700 transition-all duration-200 group-hover:w-full'></span>
              <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-orange-700 transition-all duration-200 group-hover:h-full'></span>
              <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-orange-700 transition-all duration-200 group-hover:w-full'></span>
              <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-orange-700 transition-all duration-200 group-hover:h-full'></span>
              Travel
            </h1>
          </Link>

          <FontAwesomeIcon
            onClick={() => {
              setShow(!show)
            }}
            icon={show ? faClose : faListAlt}
            style={{ fontSize: 50, color: 'black' }}
          />
        </div>
      </div>
      {show ? (
        <div className='md:hidden flex justify-center items-center w-full bg-black text-white h-screen z-50 absolute top-[90px]'>
          <ul className=''>
            <li className='px-4 hover:text-red-900 hover:underline py-10'>
              <Link href={'#'}>Home</Link>
            </li>
            <li className='px-4 hover:text-red-900 hover:underline py-10'>
              <Link href={'#'}>About</Link>
            </li>
            <li className='px-4 hover:text-red-900 hover:underline py-10'>
              <Link href={'#'}>Services</Link>
            </li>
            <li className='px-4 hover:text-red-900 hover:underline py-10'>
              <Link href={'#'}>Upcoming Packages</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default Header
