import Link from 'next/link'
import React from 'react'

function Navbar() {

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Store", href: "/store" },
    ]


    return (
        <nav className='flex gap-4 bg-gray-700 p-4 text-white text-lg'>
            {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className=' hover:bg-gray-600 p-2 rounded-xl transition-all  duration-300 hover:text-gray-100 hover:scale-120  '>{link.name}</Link>
            ))}
        </nav>
    )
}

export default Navbar