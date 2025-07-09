import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';
import TopBar from '../component/topbar';
import Footer from '../component/footer';
import { productList } from "../component/data/products";
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from "../component/cartContext";
import { useWishlist } from '../component/wishlistContext';

export default function ProductView() {
    const { id } = useParams();
    const product = productList.find((p) => String(p.id) === id);
    const location = useLocation();
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();
    const [quantity, setQuantity] = useState<number>(1);

    if (!product) {
        return <div className="p-6 text-center text-red-500">Product not found</div>;
    }

    useEffect(() => {
        const savedPosition = sessionStorage.getItem('homeScrollPos');
        if (savedPosition) {
            window.scrollTo(0, 0);
        }

        return () => {
            sessionStorage.setItem('homeScrollPos', window.scrollY.toString());
        };
    }, [location]);

    const similarProducts = productList
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div>
            <TopBar />
            <div className="grid mt-4 p-4">
                <div className="col-12 md:col-6 flex">
                    <div className="flex flex-column gap-3 mr-3">
                        {[...Array(4)].map((_, i) => (
                            <Image
                                key={i}
                                src={product.image}
                                alt="Product"
                                width="60"
                                height="60"
                                imageStyle={{ objectFit: 'cover', borderRadius: '4px' }}
                                preview
                            />
                        ))}
                    </div>
                    <div className="flex align-items-center justify-content-center w-full h-25rem">
                        <Image
                            src={product.image}
                            alt={product.title}
                            imageStyle={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            className="w-full h-full"
                            preview
                        />
                    </div>
                </div>

                <div className="col-12 md:col-6 p-4">
                    <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                    <div className="flex align-items-center gap-2 mb-2">
                        <span className="text-yellow-500">★★★★★</span>
                        <small>(196 Reviews)</small>
                        <Tag value="In Stock" severity="success" />
                    </div>
                    <p className="mb-3 text-sm">{product.description || 'No description available.'}</p>

                    <div className="mb-3">
                        <p className="text-md font-semibold mb-1">Colours:</p>
                        <span
                            className="inline-block w-2rem h-2rem border-circle border-1 surface-border mr-2"
                            style={{ backgroundColor: '#000' }}
                        ></span>
                        <span
                            className="inline-block w-2rem h-2rem border-circle border-1 surface-border"
                            style={{ backgroundColor: '#fff' }}
                        ></span>
                    </div>

                    <div className="mb-3">
                        <span className="text-blue-600 font-bold text-2xl mr-2">
                            Rs.{product.price.toLocaleString('en-IN')}.00
                        </span>
                        {product.oldPrice && (
                            <span className="line-through text-600">
                                Rs.{product.oldPrice.toLocaleString('en-IN')}.00
                            </span>
                        )}
                    </div>

                    <div className="flex align-items-center gap-2 mb-3">
                        <Button
                            icon="pi pi-minus"
                            className="p-button-rounded p-button-secondary"
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
                            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                        />
                        <InputNumber
                            value={quantity}
                            onValueChange={(e) => setQuantity(e.value || 1)}
                            buttonLayout="horizontal"
                            inputClassName="w-3rem text-center"
                            min={1}
                        />
                        <Button
                            icon="pi pi-plus"
                            className="p-button-rounded p-button-secondary"
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
                            onClick={() => setQuantity((prev) => prev + 1)}
                        />
                        <Button
                            label="Add to Cart"
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
                            onClick={() =>
                                addToCart({
                                    id: product.id,
                                    name: product.title,
                                    image: product.image,
                                    price: product.price,
                                    quantity: 1,
                                })
                            }
                        />
                        <Button
                            icon="pi pi-heart"
                            className="p-button-outlined p-button-secondary"
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
                            onClick={() => addToWishlist({
                                id: product.id,
                                title: product.title,
                                image: product.image,
                                price: product.price,
                                model: '',
                                originalPrice: '',
                                discountPrice: ''
                            })}
                        />
                    </div>

                    <div className="flex flex-column gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-truck text-xl"></i>
                            <span>Free Delivery</span>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-refresh text-xl"></i>
                            <span>Return Delivery - Free 30 Days Delivery Returns</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-6 mb-6 px-4 ml-6">
                <div className="grid w-full md:w-9 lg:w-7 text-lg leading-relaxed">
                    <div className="col-12 md:col-6">
                        <h3 className="font-bold mb-4 text-2xl">Specification</h3>
                        <ul className="list-none pl-0">
                            <li className="mb-3">Power Supply</li>
                            <li className="mb-3">Noise</li>
                            <li className="mb-3">Airflow Up to</li>
                            <li className="mb-3">Refrigerant</li>
                            <li className="mb-3">Operating Range</li>
                            <li className="mb-3">Piping Max Length</li>
                            <li className="mb-3">Dimensions (Indoor)</li>
                            <li className="mb-3">Warranty</li>
                        </ul>
                    </div>
                    <div className="col-12 md:col-6">
                        <h3 className="font-bold mb-4 text-2xl opacity-1">Details</h3>
                        <ul className="list-none pl-0 text-700">
                            <li className="mb-3">220–240 V, 50/60 Hz</li>
                            <li className="mb-3">~44–46 dB(A) indoor, ~53 dB(A) outdoor</li>
                            <li className="mb-3">~17 m³/min</li>
                            <li className="mb-3">R-410A, ~1.4 kg</li>
                            <li className="mb-3">16°C to 46°C</li>
                            <li className="mb-3">30 m (up to 15 m elevation)</li>
                            <li className="mb-3">~1,115 × 290 × 375 mm; ~11–13 kg weight</li>
                            <li className="mb-3">1 year</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-4">
                <h2 className="text-3xl font-bold">Similar Products</h2>
            </div>
            <div className="grid p-4">
                {similarProducts.map((prod) => (
                    <div key={prod.id} className="col-12 sm:col-6 md:col-3">
                        <Link to={`/product/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                        </Link>
                    </div>
                ))}
            </div>

            <div className="grid text-center mb-6 p-4">
                {[
                    { icon: 'pi-truck', text: 'Free fast express delivery with tracking' },
                    { icon: 'pi-shield', text: 'Equipment loss & damage insurance included' },
                    { icon: 'pi-credit-card', text: 'Installment plans with zero overpayments' }
                ].map((item, idx) => (
                    <div key={idx} className="col-12 md:col-4 mb-2">
                        <div className="p-3 border-round" style={{ backgroundColor: '#DEF0FE' }}>
                            <i className={`pi ${item.icon} text-2xl mb-2`}></i>
                            <p className="m-0 text-sm">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};