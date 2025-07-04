import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import TopBar from '../component/topbar';
import Footer from '../component/footer';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    return (
        <>
            <TopBar />
            <div className="p-4">
                <div className="grid mt-6 align-items-center justify-content-center">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <img
                            src="/public/images/a2.jpeg"
                            alt="Login"
                            style={{ width: '100%', maxWidth: '550px', borderRadius: '20px' }}
                        />
                    </div>

                    <div className="col-12 md:col-6" style={{ width: '100%', maxWidth: '550px' }}>
                        <div className="text-2xl font-bold mb-2">Log in to Exclusive</div>
                        <p className="mb-4 text-gray-600">Enter your details below</p>

                        <div className="flex flex-column gap-3">
                            <InputText placeholder="Email or Phone Number" className="w-full" />
                            <div>
                                <InputText placeholder="Password" type="password" className="w-full" />
                                <div className="text-right text-sm text-blue-500 cursor-pointer mt-1">Forget Password?</div>
                            </div>
                            <Button label="Log in" className="w-full" />
                            <Button label="Log in with Google" icon="pi pi-google"
                                style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#000000' }} />
                            <div className="text-center text-sm mt-2">
                                don't have account? <span className="cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}