import React from 'react'
import Logo from '../Logo.png'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4' id='resize'>
        <img className='w-[50px]' src={Logo} alt=""/>
        <Link to='/' className='text-blue-500  text-3xl font-bold' >Movies</Link>
        <Link to='/WatchList' className='text-blue-500 text-3xl font-bold'>Favourites</Link>
    </div>
  )
}
