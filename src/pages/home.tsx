import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { productList } from "../component/data/products";
import TopBar from '../component/topbar';
import Footer from '../component/footer';

export default function HomePage() {
    const products = productList;

    const categoryCounts: Record<string, number> = productList.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="flex flex-column">
            <TopBar />
            <div className="p-4 bg-blue-50 flex align-items-center justify-content-between flex-wrap">
                <div className="flex align-items-center gap-3 w-full">
                    <img src="/images/banner1.png" alt="Technician" style={{ maxWidth: '100%' }} />
                </div>
            </div>

            <div className="grid m-4 gap-4">
                <div className="col-12 md:col-2 mt-6">
                    <h4>All Categories</h4>
                    {Object.entries(categoryCounts).map(([category, count]) => (
                        <div key={category} className="flex align-items-center gap-2 py-1">
                            <Checkbox inputId={category} checked={false} />
                            <label
                                htmlFor={category}
                                className="text-sm sm:text-base cursor-pointer"
                                style={{ userSelect: 'none' }}
                            >
                                {category} ({count})
                            </label>
                        </div>
                    ))}
                </div>

                <div className="col-12 md:col-10">
                    <div className="flex justify-content-end mb-3">
                        <div className="w-full sm:w-40rem max-w-full">
                            <Dropdown
                                value="Default sorting"
                                options={["Default sorting"]}
                                placeholder="Sort By"
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {products.map((prod, i) => (
                            <div key={i} className="col-12 sm:col-6 md:col-3">
                                <Card className="shadow-1">
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        className="mb-2"
                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    />
                                    <p className="text-sm text-500 mb-1">Deals</p>
                                    <h5 className="text-sm">{prod.title}</h5>
                                    <div className="text-blue-600 font-semibold text-lg mb-2">
                                        Rs.{prod.price.toLocaleString('en-IN')}.00
                                    </div>
                                    <div className="flex flex-column sm:flex-row gap-2">
                                        <Button
                                            label="Buy Now"
                                            className="p-button-sm p-button-primary flex-grow-1"
                                        />
                                        <Button
                                            icon="pi pi-shopping-cart"
                                            className="p-button-sm"
                                            style={{
                                                backgroundColor: '#FFFFFF',
                                                color: '#000000',
                                                borderColor: '#000000',
                                                borderRadius: '6px',
                                                flexShrink: 0,
                                                width: '48px',
                                                minWidth: '48px',
                                            }}
                                        />
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="text-center my-4">
                        <a href="#" className="text-blue-500 hover:underline inline-block px-4 py-2">
                            See More.....
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}