import React from 'react';
import { Button } from 'primereact/button';

const productList = [
    {
        title: 'Samsung Air Conditioner – 24000 BTU Inverter AC – (Wi-Fi)',
        model: '(SMGAR50F24DJ)',
        originalPrice: 'Rs.389,990.00',
        discountPrice: 'Rs.334,990.00',
        image: 'https://cdn-icons-png.flaticon.com/512/859/859270.png'
    },
    // Add more products here
];

export default function WishlistPage() {
    return (
        <div className="p-4" style={{ fontFamily: 'sans-serif' }}>
            {/* Header */}
            <div className="flex justify-content-between align-items-center py-3 border-bottom-1 surface-border">
                <div className="text-2xl font-bold text-primary">KANDY AIR ❄ COOL CENTER</div>
                <div className="flex align-items-center gap-4">
                    <span className="pi pi-user" /> Sign In
                    <span className="pi pi-heart" /> Favorite
                    <span className="pi pi-shopping-cart" /> My Cart
                    <Button label="Sale! 50% Off" className="bg-black-alpha-90 text-white" />
                </div>
            </div>

            {/* Navbar */}
            <div className="flex justify-content-around py-2 bg-blue-100 text-lg font-medium">
                <div>Home</div>
                <div>Services</div>
                <div>Sale</div>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>

            {/* Wishlist Section */}
            <h2 className="my-4 text-xl font-bold">Wishlist</h2>
            <div className="flex justify-content-end mb-3">
                <Button label="Move all to Cart" icon="pi pi-shopping-cart" className="p-button-outlined" />
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

            {/* Just for You Section */}
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

            {/* Footer */}
            <footer className="bg-gray-100 mt-6 py-5 px-4">
                <div className="grid">
                    <div className="col-12 md:col-3">
                        <h4>Address</h4>
                        <p>071 608 4522<br />Jambugahapitiya, Kandy,<br />Sri Lanka</p>
                        <div className="flex gap-3 mt-2">
                            <i className="pi pi-facebook"></i>
                            <i className="pi pi-instagram"></i>
                            <i className="pi pi-linkedin"></i>
                            <i className="pi pi-twitter"></i>
                        </div>
                    </div>
                    <div className="col-12 md:col-3">
                        <h4>My Account</h4>
                        <ul className="list-none p-0 m-0">
                            <li>Sign in</li>
                            <li>Register</li>
                            <li>Order status</li>
                        </ul>
                    </div>
                    <div className="col-12 md:col-3">
                        <h4>Services</h4>
                        <ul className="list-none p-0 m-0">
                            <li>Repairs & Maintenance</li>
                            <li>Product Supply & Sales</li>
                            <li>Installation Services</li>
                            <li>Extra Services</li>
                        </ul>
                    </div>
                    <div className="col-12 md:col-3">
                        <h4>Legal Stuff</h4>
                        <ul className="list-none p-0 m-0">
                            <li>Terms & Conditions</li>
                            <li>Privacy & Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-sm mt-3">Copyright ©2025 Pobada. All Rights Reserved</div>
            </footer>
        </div>
    );
}