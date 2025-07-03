import { Button } from 'primereact/button';
import TopBar from '../component/topbar';
import Footer from '../component/footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function AboutUsPage() {
    const navigate = useNavigate();
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
        <div className="flex flex-column min-h-screen">
            <TopBar />

            {/* About Header Section */}
            <div className="text-center py-5 px-3 text-white" style={{ backgroundColor: '#0071FE' }}>
                <h2 className="text-5xl md:text-4xl font-bold mt-6">ABOUT AIR COOL CENTER</h2>
                <p className="mb-8 text-xl mx-auto" style={{ maxWidth: '800px' }}>
                    Air Cool Center is your trusted partner for all cooling and electrical needs. We provide fast and reliable services
                    including air conditioner and refrigerator repairs, CCTV installations, air curtain setups, and the supply of electrical
                    equipment. Our goal is to make your life easier with quick delivery, professional service, and flexible payment options.
                    With a team of skilled technicians and friendly support, we are here to keep your home or business cool, safe, and running smoothly.
                </p>
            </div>

            {/* Row 1: Image + Our Vision */}
            <div className="grid p-4 md:p-5 align-items-center mt-4">
                <div className="col-12 md:col-6 flex justify-content-center">
                    <img
                        src="/images/5.jpg"
                        alt="Idea Bulb"
                        className="shadow-2 w-full md:w-10"
                        style={{ maxWidth: '700px', borderRadius: '25px' }}
                    />
                </div>
                <div className="col-12 md:col-6 mt-2 md:mt-0 px-3" style={{ maxWidth: '500px' }}>
                    <h3 className="text-5xl md:text-5xl font-bold mb-3">Our Vision</h3>
                    <p className="text-base md:text-xl">
                        To be the leading provider of reliable, affordable, and innovative cooling and electrical solutions in Sri Lanka,
                        delivering comfort and peace of mind to every home and business.
                    </p>
                </div>
            </div>

            {/* Row 2: Our Mission + Puzzle Image */}
            <div className="grid p-4 md:p-5 align-items-center">
                <div className="col-12 md:col-6 px-3">
                    <h3 className="text-5xl md:text-5xl font-bold mb-3">Our Mission</h3>
                    <ul className="text-base md:text-xl" style={{ maxWidth: '600px' }}>
                        <li>To offer high-quality repair, installation, and delivery services for cooling and electrical equipment.</li>
                        <li>To ensure fast, friendly, and professional customer support.</li>
                        <li>To provide safe and flexible payment options that suit every customer.</li>
                        <li>To build long-term trust through honesty, reliability, and expert care.</li>
                    </ul>
                </div>
                <div className="col-12 md:col-6 flex justify-content-center mt-4 md:mt-0">
                    <img
                        src="/images/6.jpg"
                        alt="Team Puzzle"
                        className="shadow-2 w-full md:w-10"
                        style={{ maxWidth: '700px', borderRadius: '25px' }}
                    />
                </div>
            </div>

            {/* Row 3: Service Image + Support Content */}
            <div className="grid p-4 md:p-5 align-items-center">
                <div className="col-12 md:col-6 flex justify-content-center">
                    <img
                        src="/images/7.jpg"
                        alt="Support"
                        className="shadow-2 w-full md:w-10"
                        style={{ maxWidth: '700px', borderRadius: '25px' }}
                    />
                </div>
                <div className="col-12 md:col-6 mt-4 md:mt-0 px-3" style={{ maxWidth: '500px' }}>
                    <h3 className="text-5xl md:text-5xl font-bold mb-3">Service is Our Top Priority</h3>
                    <p className="text-base md:text-lg mb-2">
                        We’re available 24/7 – every day of the year to support you! Need to surprise a loved one? Use our gift delivery
                        service for a thoughtful touch.
                    </p>
                    <p className="text-base md:text-xl mb-2">
                        Have questions or need help? Our dedicated support team is ready to guide you in choosing the perfect product or service.
                    </p>
                    <p className="text-base md:text-xl mb-4">Your time matters — we prioritize your needs and ensure you receive more, faster.</p>
                    <Button label="Contact Now" className="mt-2 w-max" onClick={() => navigate("/contactus")} />
                </div>
            </div>

            <Footer />
        </div>
    );
}
