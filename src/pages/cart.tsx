import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

export default function CartPage () {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Samsung Air Conditioner", price: 650, quantity: 1 },
        { id: 2, name: "Samsung Air Conditioner", price: 550, quantity: 2 },
    ]);

    const quantityOptions = Array.from({ length: 10 }, (_, i) => ({
        label: (i + 1).toString().padStart(2, "0"),
        value: i + 1,
    }));

    const handleQuantityChange = (value: number, itemId: number) => {
        const updatedItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: value } : item
        );
        setCartItems(updatedItems);
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
        <div className="flex flex-column min-h-screen">
            {/* Cart Table */}
            <div className="px-4 py-6">
                <div className="surface-0 p-3 border-round shadow-1 mb-4">
                    <div className="grid font-bold text-sm text-700 px-3 pb-3 border-bottom-1 border-200">
                        <div className="col-6 md:col-6">Product</div>
                        <div className="col-2 md:col-2">Price</div>
                        <div className="col-2 md:col-2">Quantity</div>
                        <div className="col-2 md:col-2">Subtotal</div>
                    </div>

                    {cartItems.map((item) => (
                        <div
                            className="grid align-items-center px-3 py-3 border-bottom-1 border-100"
                            key={item.id}
                        >
                            <div className="col-6 md:col-6">{item.name}</div>
                            <div className="col-2 md:col-2">${item.price}</div>
                            <div className="col-2 md:col-2">
                                <Dropdown
                                    options={quantityOptions}
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(e.value, item.id)
                                    }
                                    className="w-full"
                                />
                            </div>
                            <div className="col-2 md:col-2 font-medium">
                                ${item.price * item.quantity}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 justify-content-between mb-4">
                    <Button
                        label="Return To Shop"
                        className="p-button-outlined p-button-sm"
                    />
                    <Button
                        label="Update Cart"
                        className="p-button-outlined p-button-sm"
                    />
                </div>

                {/* Cart Totals */}
                <div className="border-1 border-300 p-4 border-round shadow-1" style={{ maxWidth: "500px" }}>
                    <div className="text-right font-bold text-xl mb-3">Cart Total</div>
                    <div className="flex justify-content-between mb-2">
                        <span className="text-sm">Subtotal:</span>
                        <span className="font-medium">${subtotal}</span>
                    </div>
                    <div className="flex justify-content-between mb-2">
                        <span className="text-sm">Shipping:</span>
                        <span className="font-medium">Free</span>
                    </div>
                    <Divider />
                    <div className="flex justify-content-between font-bold text-lg mb-3">
                        <span>Total:</span>
                        <span>${subtotal}</span>
                    </div>
                    <Button label="Proceed to checkout" className="w-full bg-blue-500 border-none" />
                </div>
            </div>

            {/* Footer */}
            <div className="surface-100 px-4 py-6 text-sm mt-auto">
                <div className="grid">
                    {/* Social + Address */}
                    <div className="col-12 md:col-4">
                        <div className="flex gap-3 mb-3">
                            <i className="pi pi-facebook text-lg"></i>
                            <i className="pi pi-instagram text-lg"></i>
                            <i className="pi pi-linkedin text-lg"></i>
                            <i className="pi pi-globe text-lg"></i>
                            <i className="pi pi-twitter text-lg"></i>
                        </div>
                        <div className="mb-1">📍 Address</div>
                        <div className="text-700">071 608 4522</div>
                        <div className="text-700">Jambugahapitiya, Kandy, Sri Lanka</div>
                    </div>

                    {/* My Account */}
                    <div className="col-12 md:col-2">
                        <h5 className="font-bold mb-2">My Account</h5>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-1">Sign in</li>
                            <li className="mb-1">Register</li>
                            <li className="mb-1">Order status</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-12 md:col-3">
                        <h5 className="font-bold mb-2">Services</h5>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-1">Repairs & Maintenance</li>
                            <li className="mb-1">Product Supply & Sales</li>
                            <li className="mb-1">Installation Services</li>
                            <li className="mb-1">Extra Services</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-12 md:col-3">
                        <h5 className="font-bold mb-2">Legal Stuff</h5>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-1">Terms & Conditions</li>
                            <li className="mb-1">Privacy & Policy</li>
                        </ul>
                    </div>
                </div>
                <Divider className="my-4" />
                <div className="text-center text-600">
                    Copyright ©2025 Paboda. All Rights Reserved
                </div>
            </div>
        </div>
        </>
    );
};
