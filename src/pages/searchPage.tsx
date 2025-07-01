import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { productList } from "../component/data/products";
import TopBar from "../component/topbar";
import Footer from "../component/footer";

export default function SearchPage() {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() ?? "";

  const filteredProducts = useMemo(() => {
    return productList.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <div className="flex flex-column">
      <TopBar />

      <div className="p-4">
        <h3 className="mb-4">
          Search Results for: <span className="text-blue-500">"{query}"</span>
        </h3>

        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid">
            {filteredProducts.map((prod, i) => (
              <div key={i} className="col-12 sm:col-6 md:col-3">
                <Card className="shadow-1">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full mb-2"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-sm text-500 mb-1">Deals</p>
                  <h5 className="text-sm">{prod.title}</h5>
                  <div className="text-blue-600 font-semibold text-lg mb-2">
                    Rs.{prod.price.toLocaleString("en-IN")}.00
                  </div>
                  <div className="flex gap-2">
                    <Button label="Buy Now" className="p-button-sm p-button-primary w-full" />
                    <Button icon="pi pi-shopping-cart" className="p-button-sm p-button-outlined" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}