import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primeflex/primeflex.css";

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Sale", path: "/sale" },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const getNavLinkStyle = (index: number) => ({
    padding: "0.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
    transition: "background-color 0.3s, color 0.3s",
    backgroundColor: hoveredIndex === index ? "#E3F2FD" : "transparent",
    color: hoveredIndex === index ? "#1976D2" : "#000000",
  });

  return (
    <div className="flex flex-column w-full">
      {/* Top section */}
      <div className="flex flex-wrap justify-content-between align-items-center px-3 py-2 gap-3 w-full">
        <div className="flex align-items-center">
          <img
            src="/images/logo2.png"
            alt="logo"
            className="sm:ml-2"
            style={{ width: "100px", height: "auto" }}
          />
        </div>

        <div className="flex align-items-center justify-content-center w-full sm:w-auto flex-grow-1 max-w-30rem mx-auto">
          <span
            className="flex align-items-center w-full border-round overflow-hidden"
            style={{ border: "1px solid #2196F3" }}
          >
            <InputText
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search products..."
              className="w-full border-none p-2"
              style={{
                border: "1px solid black",
                borderRadius: "6px 0 0 6px",
                height: "100%",
                minWidth: 0,
              }}
            />
            <span
              className="flex justify-content-center align-items-center p-2 cursor-pointer"
              onClick={handleSearch}
              style={{
                backgroundColor: "#2196F3",
                border: "1px solid black",
                borderLeft: "none",
                borderRadius: "0 6px 6px 0",
                height: "100%",
              }}
            >
              <i className="pi pi-search text-white" />
            </span>
          </span>
        </div>

        <div className="flex align-items-center gap-4 sm:mr-4 text-sm justify-content-end w-full sm:w-auto">
          <div className="flex flex-column align-items-center cursor-pointer" onClick={() => navigate("/signup")}>
            <i className="pi pi-user text-xl mb-1" />
            <span className="text-xs font-bold">Sign In</span>
          </div>
          <div className="flex flex-column align-items-center cursor-pointer" onClick={() => navigate("/wishlist")}>
            <i className="pi pi-heart text-xl mb-1" />
            <span className="text-xs font-bold">Favorite</span>
          </div>
          <div className="flex flex-column align-items-center cursor-pointer" onClick={() => navigate("/cart")}>
            <i className="pi pi-shopping-cart text-xl mb-1" />
            <span className="text-xs font-bold">Cart</span>
          </div>
        </div>
      </div>

      {/* Bottom nav bar */}
      <div
        className="flex flex-wrap justify-content-between align-items-center px-3 py-2 shadow-1 w-full gap-3"
        style={{ backgroundColor: "#DEF0FE" }}
      >
        <div className="flex gap-3 flex-wrap w-full sm:w-auto justify-content-center sm:justify-start">
          {navLinks.map((item, index) => (
            <span
              key={index}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={getNavLinkStyle(index)}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="ml-auto sm:mr-4">
          <Button
            label="Sale! 50% Off"
            className="p-button-sm"
            style={{ backgroundColor: "#000000", borderColor: "#000000" }}
            onClick={() => navigate("/sale")}
          />
        </div>
      </div>
    </div>
  );
}