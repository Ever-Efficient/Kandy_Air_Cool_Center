import { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { discProductList } from "../component/data/discProducts";
import { Link } from "react-router-dom";
import { Slider } from "primereact/slider";

import TopBar from '../component/topbar';
import Footer from '../component/footer';

type SortOption = 'default' | 'priceLowHigh' | 'priceHighLow';

export default function Sale() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState(16);
    const [sortOption, setSortOption] = useState<SortOption>('default');
    const [targetDate] = useState("2025-07-05T00:00");
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 600000]);
    const minPrice = 0;
    const maxPrice = 600000;

    const categoryCounts: Record<string, number> = discProductList.reduce((acc, product) => {
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

    const categoryFiltered = selectedCategories.length === 0
        ? discProductList
        : discProductList.filter(product => selectedCategories.includes(product.category));

    const filteredProducts = categoryFiltered.filter(product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

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

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({
                    days: String(days).padStart(2, '0'),
                    hours: String(hours).padStart(2, '0'),
                    minutes: String(minutes).padStart(2, '0'),
                    seconds: String(seconds).padStart(2, '0')
                });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex flex-column">
            <TopBar />
            <div className="p-4 flex justify-content-center">
                <div
                    className="w-full overflow-hidden rounded-xl shadow-2 relative"
                    style={{ maxWidth: '1500px', maxHeight: '300px' }}
                >
                    <img
                        src="/images/banner3.jpg"
                        alt="Sale"
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: '300px' }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex align-items-center justify-content-center bg-black-alpha-50">
                        <div className="text-center text-white p-4 border-round-lg">
                            <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
                            <div className="flex gap-6 justify-content-center text-2xl font-semibold mb-4">
                                <div className="flex flex-column items-center">
                                    <span className="text-sm">Days</span>
                                    <span>{timeLeft.days}</span>
                                </div>
                                <div className="flex flex-column items-center">
                                    <span className="text-sm">Hours</span>
                                    <span>{timeLeft.hours}</span>
                                </div>
                                <div className="flex flex-column items-center">
                                    <span className="text-sm">Minutes</span>
                                    <span>{timeLeft.minutes}</span>
                                </div>
                                <div className="flex flex-column items-center">
                                    <span className="text-sm">Seconds</span>
                                    <span>{timeLeft.seconds}</span>
                                </div>
                            </div>
                            <p className="mt-2 text-sm">Hurry up! Offer ends soon.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid m-4">
                <div className="col-12 md:col-2 mt-6">
                    <h4 className="mb-3">Filter by Price</h4>
                    <div className="mb-6 relative" style={{ height: '60px', width: '190px' }}>
                        <Slider
                            value={priceRange[1]}
                            onChange={(e) => {
                                if (typeof e.value === 'number') {
                                    setPriceRange([minPrice, e.value]);
                                }
                            }}
                            min={minPrice}
                            max={maxPrice}
                            step={100}
                            className="w-full"
                            pt={{
                                range: {
                                    style: {
                                        backgroundColor: '#519EFF'
                                    }
                                },
                                handle: {
                                    style: {
                                        borderColor: '#519EFF',
                                        backgroundColor: '#519EFF'
                                    }
                                }
                            }}
                        />
                        <div
                            className="absolute text-xs font-bold px-2 py-1"
                            style={{
                                top: '15px',
                                transform: 'translateX(-50%)',
                                left: `${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                                backgroundColor: '#519EFF',
                                color: '#FFFFFF',
                                borderRadius: '25rem',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {priceRange[1].toLocaleString()}LKR
                        </div>
                    </div>

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
                                <Link to={`/product/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ position: 'relative' }}>
                                        {prod.oldPrice && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    left: '10px',
                                                    backgroundColor: '#0071FE80',
                                                    color: '#ffffff',
                                                    padding: '6px 12px',
                                                    borderRadius: '6px',
                                                    fontWeight: 'bold',
                                                    fontSize: '1rem',
                                                    zIndex: 1
                                                }}
                                            >
                                                {`-${Math.round(((prod.oldPrice - prod.price) / prod.oldPrice) * 100)}% OFF`}
                                            </div>
                                        )}
                                        <Card className="shadow-1">
                                            <img
                                                src={prod.image}
                                                alt={prod.title}
                                                className="mb-2"
                                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                            />
                                            <p className="text-sm text-500 mb-1">Deals</p>
                                            <h5 className="text-sm">{prod.title}</h5>
                                            <div className="mb-2">
                                                <div className="flex align-items-center gap-2">
                                                    <span className="text-blue-600 font-semibold text-lg">
                                                        Rs.{prod.price.toLocaleString('en-IN')}.00
                                                    </span>
                                                    {prod.oldPrice && (
                                                        <span className="line-through text-500 text-sm">
                                                            Rs.{prod.oldPrice.toLocaleString('en-IN')}.00
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    label="Buy Now"
                                                    className="p-button-sm w-full"
                                                    style={{
                                                        backgroundColor: '#0071fe',
                                                        borderColor: '#0071fe',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#ffffff';
                                                        e.currentTarget.style.borderColor = '#000000';
                                                        e.currentTarget.style.color = '#000000';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#0071fe';
                                                        e.currentTarget.style.borderColor = '#0071fe';
                                                        e.currentTarget.style.color = '#ffffff';
                                                    }}
                                                />
                                                <Button
                                                    icon="pi pi-shopping-cart"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        color: '#000000',
                                                        borderColor: '#000000',
                                                        borderRadius: '6px',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#e0f0ff';
                                                        e.currentTarget.style.color = '#0071fe';
                                                        e.currentTarget.style.borderColor = '#0071fe';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#ffffff';
                                                        e.currentTarget.style.color = '#000000';
                                                        e.currentTarget.style.borderColor = '#000000';
                                                    }}
                                                />
                                            </div>
                                        </Card>
                                    </div>
                                </Link>
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