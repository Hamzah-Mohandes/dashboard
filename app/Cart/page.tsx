import CartItem from '../components/CartItem'
import Container from '../components/Container'
import React from 'react'

function Cart() {
    return (
        <Container>
            <h1 className='text-2xl font-bold text-orange-600 '>Cart</h1>
            <div>
                <CartItem />
                <CartItem />
            </div>

            <div className='mt-6 border shadow-md p-4 rounded-lg'>
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Total</p>
                <button className='bg-orange-600 h-12 w-full text-white p-2 mt-12 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-120 transition-all duration-300 cursor-pointer'>Checkout</button>

            </div>
        </Container>
    )
}

export default Cart