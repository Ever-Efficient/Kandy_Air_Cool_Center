import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputNumber } from "primereact/inputnumber";
import { useCart } from "../component/cartContext";
import Footer from "../component/footer";
import TopBar from "../component/topbar";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
    const { cartItems, updateQuantity } = useCart();
    const navigate = useNavigate();

    const handleQuantityChange = (value, itemId) => {
        if (value && value >= 1) {
            updateQuantity(itemId, value);
        }
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="flex flex-column min-h-screen">
            <TopBar />
            <div className="px-4 py-6">
                <div className="surface-0 p-3 border-round shadow-1 mb-4">
                    <div className="grid font-bold text-sm text-700 px-3 pb-3 border-bottom-1 border-200 hidden md:flex">
                        <div className="col-12 md:col-6">Product</div>
                        <div className="col-6 md:col-2">Price</div>
                        <div className="col-6 md:col-2">Quantity</div>
                        <div className="col-6 md:col-2">Subtotal</div>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-5 text-600">Your cart is empty</div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                className="grid align-items-start md:align-items-center px-3 py-3 border-bottom-1 border-100"
                                key={item.id}
                            >
                                <div className="col-12 md:col-6 flex gap-3 align-items-start md:align-items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            objectFit: "cover",
                                            borderRadius: "6px",
                                        }}
                                    />
                                    <span className="block md:whitespace-nowrap overflow-x-auto">
                                        {item.name}
                                    </span>
                                </div>

                                <div className="col-6 md:col-2 mt-3 md:mt-0">
                                    Rs.{item.price.toLocaleString("en-IN")}.00
                                </div>

                                <div className="col-6 md:col-2 mt-3 md:mt-0">
                                    <InputNumber
                                        value={item.quantity}
                                        min={1}
                                        max={10}
                                        showButtons
                                        buttonLayout="horizontal"
                                        onValueChange={(e) =>
                                            handleQuantityChange(e.value || 1, item.id)
                                        }
                                        inputClassName="w-3rem text-center ml-2 mr-2"
                                        decrementButtonClassName="p-button-secondary"
                                        incrementButtonClassName="p-button-secondary"
                                    />
                                </div>

                                <div className="col-6 md:col-2 mt-3 md:mt-0 font-medium">
                                    Rs.{(item.price * item.quantity).toLocaleString("en-IN")}.00
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="flex flex-column md:flex-row gap-3 justify-content-between mb-4">
                    <Button
                        label="Return To Shop"
                        onClick={() => (window.location.href = "/")}
                        style={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            borderColor: "#000000",
                        }}
                    />
                </div>

                {cartItems.length > 0 && (
                    <div
                        className="border-1 border-300 p-4 border-round shadow-1 w-full md:w-full ml-auto"
                    >
                        <div className="text-right font-bold text-xl mb-3">
                            Cart Total
                        </div>
                        <div className="flex justify-content-between mb-2">
                            <span className="text-sm">Subtotal:</span>
                            <span className="font-medium">
                                Rs.{subtotal.toLocaleString("en-IN")}.00
                            </span>
                        </div>
                        <div className="flex justify-content-between mb-2">
                            <span className="text-sm">Shipping:</span>
                            <span className="font-medium">Free</span>
                        </div>
                        <Divider />
                        <div className="flex justify-content-between font-bold text-lg mb-3">
                            <span>Total:</span>
                            <span>Rs.{subtotal.toLocaleString("en-IN")}.00</span>
                        </div>
                        <div className="flex justify-content-end">
                            <Button
                                label="Proceed to checkout"
                                style={{ backgroundColor: "#0069EB", color: "#ffffff" }}
                                onClick={() => navigate("/checkout")}
                            />
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}