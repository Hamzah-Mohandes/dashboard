import Container from '../components/Container'
import { IProductItem } from '../components/ProductItem'
import Link from 'next/link'
import ProductItem from '../components/ProductItem'
import React from 'react'

async function Store() {

    // const productsMockup = [
    //     {
    //         id: "1",
    //         img: "https://cdn11.bigcommerce.com/s-kfhji/images/stencil/1280x1280/products/1754/54738/classic-multiway-infinity-bridesmaids-dress-eucalyptus-1__24522.1703726351.jpg?c=2",
    //         title: 'Classic Multiway Infinity Bridesmaids Dress Eucalyptus',
    //         description: 'Classic Multiway Infinity Bridesmaids Dress Eucalyptus',
    //         price: 100,
    //     },
    //     {
    //         id: "2",
    //         img: "https://images.squarespace-cdn.com/content/v1/5935fc072e69cf2cca7ff658/1715280521100-DMK8MDRQ08EBH78A9M3W/083.jpg?format=1000w",
    //         title: 'Euron Rosa Clara',
    //         description: 'Euron Rosa Clara',
    //         price: 200,
    //     },
    //     {
    //         id: "3",
    //         img: "https://images.squarespace-cdn.com/content/v1/5935fc072e69cf2cca7ff658/1684437574257-Y1NJGH6IU443D3BKL0YO/LE_Spring_2023-30.jpg?format=1000w",
    //         title: 'LE Spring 2023',
    //         description: 'LE Spring 2023',
    //         price: 300,
    //     },
    //     {
    //         id: "4",
    //         img: "https://i.pinimg.com/originals/92/f1/a5/92f1a5da7847f9eae4e7e53554b59b10.jpg",
    //         title: 'Classic Multiway Infinity Bridesmaids Dress Eucalyptus',
    //         description: 'Classic Multiway Infinity Bridesmaids Dress Eucalyptus',
    //         price: 400,
    //     },
    // ]


    const result = await fetch('http://localhost:3001/products')

    const data = await result.json() as IProductItem[]

    return (
        <Container>

            <h1 className='text-2xl font-bold'>Store</h1>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                {
                    data.map((item) => (
                        <Link key={item.id} href={`/store/${item.id}`}>
                            <ProductItem {...item} />
                        </Link>

                    )
                    )
                }
            </div>
        </Container >
    )
}

export default Store