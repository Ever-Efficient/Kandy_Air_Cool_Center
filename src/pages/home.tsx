import { useState } from "react";
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { productList } from "../component/data/products";
import TopBar from '../component/topbar';
import Footer from '../component/footer';

type SortOption = 'default' | 'priceLowHigh' | 'priceHighLow';

export default function HomePage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState(16);
    const [sortOption, setSortOption] = useState<SortOption>('default');

    const categoryCounts: Record<string, number> = productList.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const onCategoryChange = (category: string, checked: boolean) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        }
        setVisibleCount(16);
    };

    const filteredProducts = selectedCategories.length === 0
        ? productList
        : productList.filter(product => selectedCategories.includes(product.category));

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'priceLowHigh') {
            return a.price - b.price;
        }
        if (sortOption === 'priceHighLow') {
            return b.price - a.price;
        }
        return 0;
    });

    const handleSeeMore = () => {
        setVisibleCount(prev => Math.min(prev + 8, sortedProducts.length));
    };

    const sortOptions = [
        { label: 'Default sorting', value: 'default' },
        { label: 'Price: Low to High', value: 'priceLowHigh' },
        { label: 'Price: High to Low', value: 'priceHighLow' },
    ];

    return (
        <div className="flex flex-column">
            <TopBar />
            <div className="p-4 bg-blue-50 flex align-items-center justify-content-between flex-wrap">
                <div className="flex align-items-center gap-3">
                    <img src="/images/banner1.png" alt="Technician" style={{ maxWidth: '100%' }} />
                </div>
            </div>

            <div className="grid m-4">
                <div className="col-12 md:col-2 mt-6">
                    <h4>All Categories</h4>
                    {Object.entries(categoryCounts).map(([category, count]) => (
                        <div className="flex align-items-center gap-2 py-1" key={category}>
                            <Checkbox
                                inputId={category}
                                checked={selectedCategories.includes(category)}
                                onChange={e => onCategoryChange(category, e.checked ?? false)}
                            />
                            <label htmlFor={category}>{category} ({count})</label>
                        </div>
                    ))}
                </div>

                <div className="col-12 md:col-10">
                    <div className="flex justify-content-end mb-3">
                        <Dropdown
                            value={sortOption}
                            options={sortOptions}
                            onChange={e => {
                                setSortOption(e.value);
                                setVisibleCount(16);
                            }}
                            placeholder="Sort By"
                        />
                    </div>
                    <div className="grid">
                        {sortedProducts.slice(0, visibleCount).map((prod, i) => (
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
                                    <div className="text-blue-600 font-semibold text-lg mb-2">Rs.{prod.price.toLocaleString('en-IN')}.00</div>
                                    <div className="flex gap-2">
                                        <Button label="Buy Now" className="p-button-sm p-button-primary w-full" />
                                        <Button icon="pi pi-shopping-cart"
                                            style={{
                                                backgroundColor: '#FFFFFF',
                                                color: '#000000',
                                                borderColor: '#000000',
                                                borderRadius: '6px',
                                            }}
                                        />
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {visibleCount < sortedProducts.length && (
                        <div className="text-center my-4">
                            <button
                                onClick={handleSeeMore}
                                className="text-blue-500 cursor-pointer border-none bg-transparent font-semibold hover:text-blue-700"
                            >
                                See More.....
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}