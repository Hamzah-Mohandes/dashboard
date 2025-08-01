import React from 'react'

function CartItem() {
    return (
        <div className='grid grid-cols-12 mt-6'>
            <div className='col-span-9 bg-gray-100 p-4 rounded-lg shadow-xl '>
                <h2 className='text-2xl font-bold text-orange-600 mb-4'>LE Spring 2023</h2>
                <p className='text-gray-600 mb-4 text-lg font-semi'>LE Spring 2023</p>
                <p className='text-gray-800 font-semibold mb-4'>Product price <span className='text-orange-600 font-bold text-xl'> 100 $</span></p>
                <button className='bg-orange-600 h-12 w-12 text-white p-2 mt-12 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-120 transition-all duration-300 cursor-pointer'>+ </button>
                <span className='text-gray-800 font-semibold mb-4 ml-6 text-2xl'>1</span>
                <button className='bg-orange-600 h-12 w-12 ml-6  text-white p-2 mt-12 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-120 transition-all duration-300 cursor-pointer '> - </button>


            </div>
            <div className='col-span-3 bg-gray-100 p-4 rounded-lg shadow-xl '>
                <img src="https://images.squarespace-cdn.com/content/v1/5935fc072e69cf2cca7ff658/1684437574257-Y1NJGH6IU443D3BKL0YO/LE_Spring_2023-30.jpg?format=1000w" alt="" />
            </div>
        </div>
    )
}

export default CartItem