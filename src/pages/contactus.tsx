import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import TopBar from "../component/topbar";
import Footer from "../component/footer";

export default function ContactUsPage() {
    useEffect(() => {
        const savedPosition = sessionStorage.getItem('homeScrollPos');
        if (savedPosition) {
            window.scrollTo(0, 0);
        }

        return () => {
            sessionStorage.setItem('homeScrollPos', window.scrollY.toString());
        };
    }, [location]);

    return (
        <div className="flex flex-column">
            <TopBar />
            <div className="text-center py-8 px-4">
                <h2 className="text-4xl font-bold mb-2">Have Something In Mind?</h2>
                <h2 className="text-4xl font-bold">Let's Talk.</h2>
            </div>

            <div className="grid px-6 md:px-8 lg:px-9 mb-8">
                <div className="col-12 md:col-7">
                    <div className="grid">
                        <div className="col-12 md:col-4 p-2">
                            <InputText placeholder="Your Name *" className="w-full p-3 text-sm" />
                        </div>
                        <div className="col-12 md:col-4 p-2">
                            <InputText placeholder="Your Email *" className="w-full p-3 text-sm" />
                        </div>
                        <div className="col-12 md:col-4 p-2">
                            <InputText placeholder="Your Phone *" className="w-full p-3 text-sm" />
                        </div>
                        <div className="col-12 p-2">
                            <InputTextarea
                                rows={8}
                                placeholder="Your Message"
                                className="w-full p-3 text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-4 ml-2">
                        <Button label="Send Message" className="p-button-sm p-button-primary border-none px-6 py-2" style={{backgroundColor: '#0069EB'}}/>
                    </div>
                </div>
                <div className="col-12 md:col-5 flex justify-content-center align-items-start pt-2">
                    <img
                        src="/images/8.jpg"
                        alt="Contact"
                        width="100%"
                        style={{borderRadius: '25px' }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
