import Container from '../components/Container'
import React from 'react'

function Cart() {
    return (
        <Container>
            <h1 className='text-2xl font-bold text-orange-600'>Cart</h1>
            <div className='grid grid-cols-12'>
                <div className='col-span-9 bg-gray-100 p-4 rounded-lg shadow-xl '>

                </div>
                <div className='col-span-3 bg-gray-100 p-4 rounded-lg shadow-xl '>

                </div>
            </div>
        </Container>
    )
}

export default Cart