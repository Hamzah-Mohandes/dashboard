import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex gap-4 bg-gray-700 p-4 text-white text-xl'>
            <Link href="/" className=' hover:bg-gray-600 p-2 rounded-xl transition-all duration-300 hover:text-gray-100 hover:scale-120  '>Home</Link>
            <Link href="/store" className='hover:bg-gray-600 p-2 rounded-xl transition-all duration-300 hover:text-gray-100 hover:scale-120  '>Store</Link>
        </nav>
    )
}

export default Navbar