export default function Footer() {
    return (
        <div 
            className="p-4 mt-5 flex-column"
            style={{ backgroundColor: '#F3F6F5', color: '#000000' }}>
            <div className="grid ml-8">
                <div className="col-12 md:col-3">
                    <h4>Address</h4>
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
            </div>
            <div className="text-center text-xs mt-5">
                Copyright ©2025 Pabada. All Rights Reserved
            </div>
        </div>
    )
}