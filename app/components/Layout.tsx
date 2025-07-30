import Navbar from './Navbar'
import React from 'react'
interface ILayoutProps {
    children: React.ReactNode
}
function Layout({ children }: ILayoutProps) {
    return (

        <>
            <Navbar />
            <div className=''>{children}</div>
        </>
    )
}

export default Layout