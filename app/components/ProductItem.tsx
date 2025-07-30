import React from 'react'

interface IProductItem {
    id: string;
    img: string;
    title: string;
    description: string;
    price: number;
}




function ProductItem({ id, img, title, description, price }: IProductItem) {
    return (
        <div className="flex flex-col gap-4 shadow-xl p-4 rounded-lg bg-white">
            <div className="w-full h-60 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                <img
                    className="max-w-full max-h-full object-contain transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
                    src={img}
                    alt={title || "Image"}
                />
            </div>

            <h3 className="text-xl font-bold text-orange-600">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-800 font-semibold">{price} $</p>
        </div>

    )
}

export default ProductItem