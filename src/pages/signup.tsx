import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Footer from '../component/footer';
import TopBar from '../component/topbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (!name || !emailOrPhone || !password) {
            alert("Please fill in all fields.");
            return;
        }

        console.log('Account Created:', { name, emailOrPhone, password });
        alert('Account successfully created!');
        navigate('/dashboard');
    };

    const handleGoogleLogin = () => {
        alert("Google login not implemented yet.");
    };

    return (
        <>
            <TopBar />
            <div className="p-4">
                <div className="grid mt-6 align-items-center justify-content-center">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <img
                            src="/images/a2.jpeg"
                            alt="Sign Up"
                            style={{ width: '100%', maxWidth: '550px', borderRadius: '20px' }}
                        />
                    </div>

                    <div className="col-12 md:col-6 flex flex-column justify-content-center" style={{ maxWidth: '550px', width: '100%' }}>
                        <h2 className="text-2xl font-bold mb-2">Create an account</h2>
                        <p className="mb-4 text-sm">Enter your details below</p>

                        <div className="mb-3">
                            <InputText
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                className="w-full"
                            />
                        </div>

                        <div className="mb-3">
                            <InputText
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                placeholder="Email or Phone Number"
                                className="w-full"
                            />
                        </div>

                        <div className="mb-3">
                            <InputText
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                                className="w-full"
                            />
                        </div>

                        <Button
                            label="Create Account"
                            className="w-full mb-2"
                            onClick={handleSubmit}
                        />

                        <Button
                            label="Sign up with Google"
                            icon="pi pi-google"
                            className="w-full p-button-outlined"
                            style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#000000' }}
                            onClick={handleGoogleLogin}
                        />

                        <p className="text-sm mt-3 text-center">
                            Already have account?
                            <span
                                className="px-2 py-1 cursor-pointer font-bold"
                                onClick={() => navigate("/login")}
                            >
                                Log In
                            </span>
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}