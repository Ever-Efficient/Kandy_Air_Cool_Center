import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import TopBar from '../component/topbar';
import Footer from '../component/footer';

export default function ServicesPage () {
    return (
        <div>
            <TopBar />
            <div className="grid mb-4 px-2">
                <div className="col-12 md:col-6">
                    <div className="relative mt-4 border-round overflow-hidden" style={{ height: '500px' }}>
                        <img src="/images/a1.jpeg" alt="Cooling Partner" className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-content-start align-items-center bg-black-alpha-10 p-3">
                            <div className='ml-4'>
                                <h2 className="text-lg font-bold text-white mb-2">Your Trusted Cooling Partner</h2>
                                <Button label="Shop Now" style={{ backgroundColor: '#ffffff', color: '#0071FE', maxWidth: '200px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 md:col-6">
                    <div className="relative mt-4 border-round overflow-hidden" style={{ height: '500px' }}>
                        <img src="/images/a2.jpeg" alt="Cooling Partner" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-content-center text-center gap-3 px-3 mb-6">
                {[
                    { icon: 'pi-truck', text: 'Free fast express delivery with tracking' },
                    { icon: 'pi-shield', text: 'Equipment loss & damage insurance included' },
                    { icon: 'pi-credit-card', text: 'Installment plans with zero overpayments' }
                ].map((item, idx) => (
                    <div key={idx} className="flex align-items-center gap-2 p-3 border-round" style={{ backgroundColor: '#DEF0FE' }}>
                        <i className={`pi ${item.icon} text-xl`}></i>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>

            <div className="text-center mb-4 px-2">
                <h2 className="text-3xl font-bold">OUR SERVICES</h2>
            </div>
            <div className="grid mb-6 px-3">
                {[...Array(4)].map((_, idx) => {
                    const services = [
                        {
                            title: 'Repairs & Maintenance',
                            items: [
                                'Air Conditioner repair & servicing',
                                'Refrigerator troubleshooting & repairs',
                                'CCTV system installation & maintenance',
                                'Air curtain installation & servicing',
                                'Electrical appliance diagnosis and repair'
                            ]
                        },
                        {
                            title: 'Product Supply & Sales',
                            items: [
                                'Branded ACs, fans, and cooling equipment',
                                'CCTV cameras and accessories',
                                'Refrigerators & chillers',
                                'Spare parts & installation tools'
                            ]
                        },
                        {
                            title: 'Installation Services',
                            items: [
                                'Professional AC installation (split/window)',
                                'CCTV setup with mobile access',
                                'Air curtain and ventilation system setup',
                                'Electrical equipment setup and testing'
                            ]
                        },
                        {
                            title: 'Extra Services',
                            items: [
                                'Free express delivery with tracking',
                                'Damage/loss insurance for equipment',
                                'Installments with 0% interest',
                                'Post-installation support and warranty'
                            ]
                        }
                    ];

                    const service = services[idx];

                    return (
                        <div key={idx} className="col-12 sm:col-6 lg:col-3">
                            <Card
                                title={service.title}
                                className="h-full"
                                style={{ borderColor: '#0071FE', borderWidth: '2px', borderStyle: 'solid' }}
                            >
                                <ul className="list-none pl-0">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="mb-2">• {item}</li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    );
                })}
            </div>

            <div className="border-round mb-6 px-3 py-5" style={{ backgroundColor: '#DEF0FE' }}>
                <div className="text-center mb-5">
                    <h2 className="text-2xl font-bold">Benefits for your expediency</h2>
                </div>
                <div className="grid text-center">
                    {[
                        { icon: 'pi-shield', title: 'Insurance Protection', desc: 'Damage/loss coverage for peace of mind.' },
                        { icon: 'pi-send', title: 'Same-Day Service & Delivery', desc: 'Delivered or repaired same-day—no delays.' },
                        { icon: 'pi-phone', title: '24/7 Customer Support', desc: 'Our support is available 24/7.' }
                    ].map((item, idx) => (
                        <div key={idx} className="col-12 md:col-4 mb-4">
                            <i className={`pi ${item.icon} text-3xl mb-2`}></i>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mb-6 px-2">
                <h2 className="text-3xl font-bold">Testimonials</h2>
                <p>Over 15,000 happy customers.</p>
            </div>
            <div className="flex flex-column md:flex-row justify-content-center align-items-center gap-4 mb-6 px-3">
                <div className="w-full md:w-4 flex justify-content-center">
                    <Avatar
                        image="/images/testi1.png"
                        shape="square"
                        style={{ width: '100%', maxWidth: '360px', height: 'auto' }}
                    />
                </div>
                <div className="w-full md:w-7">
                    <p className="text-3xl font-medium">
                        “Super fast service and the AC works like brand new! Highly recommend Air Cool Center to anyone looking for honest, professional help!”
                    </p>
                    <p className="font-bold mt-2 mb-0 text-xl">Dilani Fernando</p>
                    <small className='text-lg'>Kandy</small>
                </div>
            </div>

            <div className="grid align-items-center p-2 border-round px-3" style={{ backgroundColor: '#DEF0FE' }}>
                <div className="col-12 md:col-5">
                    <img src="/images/image1.png" alt="Products" className="w-full" />
                </div>
                <div className="col-12 md:col-7" style={{ padding: '2rem' }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-left">Join Our Newsletter</h2>
                    <p className="mb-3 text-left">Receive exclusive deals, discounts and many offers.</p>

                    <div className="mb-3" style={{ maxWidth: '400px' }}>
                        <span className="p-input-icon-left w-full">
                            <InputText placeholder="Enter your email" className="w-full" style={{ backgroundColor: '#DEF0FE', borderColor: '#0071FE', borderWidth: '1px', borderStyle: 'solid' }} />
                        </span>
                    </div>

                    <div style={{ maxWidth: '400px' }}>
                        <Button label="Subscribe" className="w-full md:w-auto" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};