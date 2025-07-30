"use client"

import React, { useEffect, useState } from 'react'

import Container from './Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
    const [isMounted, setIsMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Store", href: "/store" },
    ]

    // Only render the navigation after the component is mounted on the client
    if (!isMounted) {
        return (
            <nav className='flex gap-4 bg-gray-700 p-4 text-white text-lg'>
                <Container>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className='hover:bg-gray-600 p-2 rounded-xl transition-all duration-300 hover:text-gray-100 hover:scale-120 m-2'
                        >
                            {link.name}
                        </Link>
                    ))}
                </Container>
            </nav>
        )
    }

    return (
        <nav className='flex gap-4 bg-gray-700 p-4 text-white text-lg'>
            <Container>
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={pathname === link.href
                            ? 'bg-gray-600 p-2 rounded-xl transition-all duration-300 hover:text-gray-100 hover:scale-120'
                            : 'hover:bg-gray-600 p-2 rounded-xl transition-all duration-300 hover:text-gray-100 hover:scale-120 '
                        }
                    >
                        {link.name}
                    </Link>
                ))}
            </Container>
        </nav>
    )
}

export default Navbar