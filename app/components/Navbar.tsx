"use client"

import Container from './Container'
import Link from 'next/link'

function Navbar() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Store", href: "/store" },

    ]



    return (
        <nav className='shadow-lg bg-gray-700 flex justify-between'>
            <Container>
                <div className='flex p -2 **:bg-gray-700 text-white'>
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <Link
                                href={link.href}
                                className='hover:bg-orange-600 p-2 rounded-xl transition-all duration-400 hover:text-gray-100 hover:scale-100 cursor-pointer'
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
            <div className='flex items-center mr-4 **:bg-gray-700 text-white'>
                <Link
                    href="/Cart"
                    className='hover:bg-orange-600 p-2 rounded-xl transition-all duration-400 hover:text-gray-100 hover:scale-100 cursor-pointer'
                >
                    Cart
                </Link>
            </div>
        </nav>
    )
}

export default Navbar