import React from 'react';
import { Button } from 'primereact/button';
import TopBar from '../component/topbar';
import Footer from '../component/footer';

const productList = [
    {
        title: 'Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi)',
        model: '(SMGAR50F24DJ)',
        originalPrice: 'Rs.389,990.00',
        discountPrice: 'Rs.334,990.00',
        image: 'https://cdn-icons-png.flaticon.com/512/859/859270.png'
    },
];

export default function WishlistPage() {
    return (
        <>
            <TopBar />
            <div className="p-6">
                <h2 className="my-4 text-xl font-bold">Wishlist</h2>
                <div className="flex justify-content-end mb-3">
                    <Button label="Move all to Cart" icon="pi pi-shopping-cart" className="p-button-outlined"
                        style={{ backgroundColor: '#ffffff', borderColor: '#000000', color: '#000000' }} />
                </div>

                <div className="grid gap-3 mb-6">
                    {productList.map((product, index) => (
                        <div key={index} className="col-12 md:col-3 border-1 surface-border border-round p-3 text-center">
                            <img src={product.image} alt="product" className="w-full mb-3" style={{ height: '150px', objectFit: 'contain' }} />
                            <div className="text-xs text-gray-500 mb-1">Deals</div>
                            <div className="font-medium mb-2">
                                {product.title} <br /> <span className="text-sm">{product.model}</span>
                            </div>
                            <div className="text-sm line-through text-gray-400">{product.originalPrice}</div>
                            <div className="text-blue-600 font-bold mb-2">{product.discountPrice}</div>
                            <Button label="Add to Cart" icon="pi pi-shopping-cart" className="w-full" />
                        </div>
                    ))}
                </div>

                <div className="flex justify-content-between align-items-center mb-3">
                    <h2 className="text-xl font-bold">Just for you</h2>
                    <a className="text-blue-500 cursor-pointer">See All</a>
                </div>

                <div className="grid gap-3 mb-6">
                    {productList.map((product, index) => (
                        <div key={index} className="col-12 md:col-3 border-1 surface-border border-round p-3 text-center">
                            <img src={product.image} alt="product" className="w-full mb-3" style={{ height: '150px', objectFit: 'contain' }} />
                            <div className="text-xs text-gray-500 mb-1">Deals</div>
                            <div className="font-medium mb-2">
                                {product.title} <br /> <span className="text-sm">{product.model}</span>
                            </div>
                            <div className="text-sm line-through text-gray-400">{product.originalPrice}</div>
                            <div className="text-blue-600 font-bold mb-2">{product.discountPrice}</div>
                            <Button label="Buy Now" icon="pi pi-shopping-cart" className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}