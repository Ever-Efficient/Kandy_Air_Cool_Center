import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function TopBar() {
    return (
        <div className="flex flex-column">
            <div className="flex justify-content-between align-items-center p-3">
                <img src="/images/logo1.jpg" alt="logo" className="ml-4" style={{ width: '5%' }} />

                <div className="flex align-items-center justify-content-center px-3">
                    <span className="flex align-items-center w-30rem border-round overflow-hidden"
                        style={{ border: '1px solid #2196F3' }}
                    >
                        <InputText
                            placeholder="Search products..."
                            className="w-full border-none p-2"
                            style={{
                                borderLeft: '1px solid black',
                                borderRight: '1px solid black',
                                borderTop: '1px solid black',
                                borderBottom: '1px solid black',
                                borderRadius: '0px 6px 6px 0px',
                                height: '100%'
                            }}
                        />
                        <span
                            className="flex justify-content-center align-items-center p-2"
                            style={{
                                backgroundColor: '#2196F3',
                                borderLeft: '1px solid black',
                                borderRight: '1px solid black',
                                borderTop: '1px solid black',
                                borderBottom: '1px solid black',
                                borderRadius: '0px 6px 6px 0px',
                                height: '100%'
                            }}
                        >
                            <i className="pi pi-search text-white" />
                        </span>
                    </span>
                </div>


                <div className="flex align-items-center gap-3 mr-8">
                    <i className="pi pi-user"></i> Sign In
                    <i className="pi pi-heart"></i> Favorite
                    <i className="pi pi-shopping-cart"></i> My Cart
                </div>
            </div>

            <div
                className="flex justify-content-between align-items-center p-3 shadow-1 flex-wrap"
                style={{ backgroundColor: '#DEF0FE' }}
            >
                <div className="flex gap-4 ml-8 flex-wrap">
                    <a href="/">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Sale</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="mr-4">
                    <Button
                        label="Sale! 50% Off"
                        className="p-button-sm"
                        style={{ backgroundColor: '#000000', borderColor: '#000000' }}
                    />
                </div>
            </div>
        </div>
    );
}
