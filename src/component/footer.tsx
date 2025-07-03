export default function Footer() {
    return (
        <div
            className="p-4 mt-5 flex-column"
            style={{ backgroundColor: '#F3F6F5', color: '#000000' }}>
            <div className="grid ml-8">
                <div className="col-12 md:col-3">
                    <h4>Address</h4>
                    <div className="flex gap-3">
                        <i className="pi pi-facebook text-lg"></i>
                        <i className="pi pi-instagram text-lg"></i>
                        <i className="pi pi-linkedin text-lg"></i>
                        <i className="pi pi-globe text-lg"></i>
                        <i className="pi pi-twitter text-lg"></i>
                    </div>
                    <p>071 608 4522<br />Jambugahapitiya , Kandy, Sri Lanka</p>
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
                <div className="text-left text-xs mt-5">
                    2025 © All Rights Reserved | Kandy Ari Cool Centre | Designed & Developed by EVER EFFICIENT Business Management (Pvt) Ltd.
                </div>
            </div>
        </div>
    )
}