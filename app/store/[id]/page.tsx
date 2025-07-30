import Container from '../../components/Container'
import React from 'react'

function Product() {
    return (
        <Container>
            <div className='grid grid-cols-12'>



                <div className='col-span-9 bg-gray-100 p-4 rounded-lg shadow-xl '>

                    <h2 className='text-2xl font-bold text-orange-600 mb-4'>Product Details</h2>
                    <p className='text-gray-600 mb-4 text-lg font-semi'>Product description</p>
                    <p className='text-gray-800 font-semibold mb-4'>Product price <span className='text-orange-600 font-bold'> $100</span></p>

                    <button className='bg-orange-600 h-12 w-12 text-white p-2 mt-12 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-120 transition-all duration-300 cursor-pointer'>+ </button>
                    <span className='text-gray-800 font-semibold mb-4 ml-6 text-2xl'>1</span>
                    <button className='bg-orange-600 h-12 w-12 ml-6  text-white p-2 mt-12 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-120 transition-all duration-300 cursor-pointer '> - </button>
                </div>

                <div className='col-span-3 bg-gray-100 p-4 rounded-lg shadow-xl '>

                    <img src="https://cdn11.bigcommerce.com/s-kfhji/images/stencil/1280x1280/products/1754/54738/classic-multiway-infinity-bridesmaids-dress-eucalyptus-1__24522.1703726351.jpg?c=2" alt="" />

                </div>

            </div>


        </Container>
    )
}

export default Product