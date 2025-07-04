import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import TopBar from '../component/topbar';
import Footer from '../component/footer';
import { useCart } from '../component/cartContext';

export default function CheckoutPage() {
    const { cartItems } = useCart();
    const [payment, setPayment] = useState('cod');
    const [saveInfo, setSaveInfo] = useState(false);
    const [coupon, setCoupon] = useState('');

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className="flex flex-column">
            <TopBar />
            <div className="grid mt-5 p-4">
                <div className="col-12 md:col-5">
                    <h2 className="text-xl mb-4">Billing Details</h2>
                    <div className="flex flex-column gap-3">
                        <InputText placeholder="First Name*" className="w-full" />
                        <InputText placeholder="Company Name" className="w-full" />
                        <InputText placeholder="Street Address*" className="w-full" />
                        <InputText placeholder="Apartment, floor, etc. (optional)" className="w-full" />
                        <InputText placeholder="Town/City*" className="w-full" />
                        <InputText placeholder="Phone Number*" className="w-full" />
                        <InputText placeholder="Email Address*" className="w-full" />
                        <div className="flex align-items-center gap-2 mt-2">
                            <Checkbox inputId="saveinfo" checked={saveInfo} onChange={e => setSaveInfo(e.checked ?? false)} />
                            <label htmlFor="saveinfo" className="text-sm">Save this information for faster check-out next time</label>
                        </div>
                    </div>
                </div>

                <div className="col-12 md:col-7 mt-5">
                    <div className="border-0 surface-border border-round p-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex justify-content-between mb-2">
                                <span>{item.name} x{item.quantity}</span>
                                <span>Rs.{item.price * item.quantity}</span>
                            </div>
                        ))}
                        <div className="flex justify-content-between font-bold pt-3 mt-3 mb-2">
                            <span>Subtotal:</span>
                            <span>Rs.{subtotal}</span>
                        </div>
                        <div className="flex justify-content-between border-top-1 pt-3 mt-3 mb-4">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-content-between font-bold border-top-1 pt-3 mb-4">
                            <span>Total:</span>
                            <span>Rs.{total}</span>
                        </div>

                        <div className="mt-3 mb-3">
                            <div className="field-radiobutton mb-2 flex align-items-center justify-content-between">
                                <div className="flex align-items-center gap-2">
                                    <RadioButton
                                        inputId="bank"
                                        name="payment"
                                        value="bank"
                                        className='p-button-sm p-button-primary'
                                        onChange={(e) => setPayment(e.value)}
                                        checked={payment === 'bank'}
                                    />
                                    <label htmlFor="bank">Bank</label>
                                </div>
                                <div className="flex align-items-center gap-2">
                                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" style={{ height: '24px' }} />
                                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" style={{ height: '24px' }} />
                                    <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" style={{ height: '24px' }} />
                                </div>
                            </div>

                            <div className="field-radiobutton">
                                <RadioButton
                                    inputId="cod"
                                    name="payment"
                                    value="cod"
                                    className='p-button-sm p-button-primary'
                                    onChange={(e) => setPayment(e.value)}
                                    checked={payment === 'cod'}
                                />
                                <label htmlFor="cod">Cash on delivery</label>
                            </div>
                        </div>

                        <div className="flex flex-column sm:flex-row mt-4 gap-3">
                            <InputText
                                placeholder="Coupon Code"
                                className="flex-1"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <Button label="Apply Coupon" className="p-button-sm p-button-primary w-full sm:w-auto" />
                        </div>
                        <Button label="Place Order" className="p-button-sm p-button-primary mt-4 w-full" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}