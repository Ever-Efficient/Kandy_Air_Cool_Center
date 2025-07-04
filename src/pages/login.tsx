import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function LoginPage() {
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

            {/* Login Form Section */}
            <div className="grid mt-6 align-items-center">
                <div className="col-12 md:col-6 flex justify-content-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/859/859270.png"
                        alt="Air Cool Center"
                        className="border-round"
                        style={{ width: '100%', maxWidth: '450px', borderRadius: '20px' }}
                    />
                </div>

                <div className="col-12 md:col-6">
                    <div className="text-2xl font-bold mb-2">Log in to Exclusive</div>
                    <p className="mb-4 text-gray-600">Enter your details below</p>

                    <div className="flex flex-column gap-3">
                        <InputText placeholder="Email or Phone Number" className="w-full" />
                        <div>
                            <InputText placeholder="Password" type="password" className="w-full" />
                            <div className="text-right text-sm text-blue-500 cursor-pointer mt-1">Forget Password?</div>
                        </div>
                        <Button label="Log in" className="w-full" />
                        <Button label="Log in with Google" icon="pi pi-google" className="w-full p-button-outlined" />
                        <div className="text-center text-sm mt-2">
                            don't have account? <span className="text-blue-500 cursor-pointer">Sign Up</span>
                        </div>
                    </div>
                </div>
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