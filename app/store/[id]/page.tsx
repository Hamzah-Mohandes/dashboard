import Container from '../../components/Container'
import { IProductItem } from '../../components/ProductItem'
import React from 'react'

interface IProduct {
    params: Promise<{ id: string }>,
    searchParams: Promise<{}>,
}
async function Product({ params }: IProduct) {
    const { id } = await params

    const result = await fetch(`http://localhost:3001/products/${id}`)

    const data = (await result.json()) as IProductItem
    return (
        <Container>
            <div className='grid grid-cols-12'>



                <div className='col-span-9 bg-gray-100 p-4 rounded-lg shadow-xl '>

                    <h2 className='text-2xl font-bold text-orange-600 mb-4'>{data.title}</h2>
                    <p className='text-gray-600 mb-4 text-lg font-semi'>{data.description}</p>
                    <p className='text-gray-800 font-semibold mb-4'>Product price <span className='text-orange-600 font-bold text-xl'> {data.price} $</span></p>

                    <button className='bg-orange-600 h-12 w-12 text-white p-2 mt-12 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-120 transition-all duration-300 cursor-pointer'>+ </button>
                    <span className='text-gray-800 font-semibold mb-4 ml-6 text-2xl'>1</span>
                    <button className='bg-orange-600 h-12 w-12 ml-6  text-white p-2 mt-12 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-120 transition-all duration-300 cursor-pointer '> - </button>
                </div>

                <div className='col-span-3 bg-gray-100 p-4 rounded-lg shadow-xl '>

                    <img className='w-full h-full object-contain rounded-lg hover:scale-150 transition-all duration-300 hover:shadow-xl cursor-pointer' src={data.img} alt="" />

                </div>

            </div>


        </Container>
    )
}

export default Product