import { Button } from 'primereact/button';
import TopBar from '../component/topbar';
import Footer from '../component/footer';
import { useWishlist } from '../component/wishlistContext';
import { useCart } from '../component/cartContext';

export default function WishlistPage() {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleMoveAllToCart = () => {
        wishlist.forEach(product => {
            addToCart({
                id: product.id,
                name: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
            });
        });
    };

    return (
        <>
            <TopBar />
            <div className="p-6">
                <h2 className="my-4 text-xl font-bold">Wishlist</h2>
                <div className="flex justify-content-end mb-3">
                    <Button
                        label="Move all to Cart"
                        icon="pi pi-shopping-cart"
                        className="p-button-outlined"
                        style={{ backgroundColor: '#ffffff', borderColor: '#000000', color: '#000000' }}
                        onClick={handleMoveAllToCart}
                    />
                </div>

                <div className="grid gap-3 mb-6">
                    {wishlist.map((product, index) => (
                        <div key={index} className="col-12 md:col-3 surface-border border-round p-3 text-center">
                            <img src={product.image} alt="product" className="w-full mb-3" style={{ height: '150px', objectFit: 'contain' }} />
                            <div className="text-xs text-gray-500 mb-1">Deals</div>
                            <div className="font-medium mb-2">
                                {product.title} <br /> <span className="text-sm">{product.model}</span>
                            </div>
                            <div className="text-sm line-through text-gray-400">{product.originalPrice}</div>
                            <div className="text-blue-600 font-bold mb-2">{product.discountPrice}</div>
                            <Button
                                label="Add to Cart"
                                icon="pi pi-shopping-cart"
                                className="w-full mb-2"
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
                                label="Remove"
                                icon="pi pi-times"
                                className=" w-full"
                                style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#000000' }}
                                onClick={() => removeFromWishlist(product.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
