import { useState } from "react";
import { useNavigate } from "react-router-dom"; // if using React Router
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // optional for routing

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    // Option 1: Navigate to a search results page
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);

    // Option 2: You can call a filtering function or context instead
    // onSearch(searchTerm.trim());

    setSearchTerm("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-column w-full">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-content-between align-items-center px-3 py-2 gap-3 w-full">
        <div className="flex align-items-center">
          <img
            src="/images/logo1.jpg"
            alt="logo"
            className="sm:ml-2"
            style={{ width: "50px", height: "auto" }}
          />
        </div>

        {/* Search Input */}
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

        <div className="flex align-items-center gap-3 sm:mr-4 text-sm justify-content-end w-full sm:w-auto">
          <div className="flex align-items-center gap-1 cursor-pointer">
            <i className="pi pi-user" />
            <span className="hidden sm:inline">Sign In</span>
          </div>
          <div className="flex align-items-center gap-1 cursor-pointer">
            <i className="pi pi-heart" />
            <span className="hidden sm:inline">Favorite</span>
          </div>
          <div className="flex align-items-center gap-1 cursor-pointer">
            <i className="pi pi-shopping-cart" />
            <span className="hidden sm:inline">My Cart</span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-content-between align-items-center px-3 py-2 shadow-1 w-full gap-3"
        style={{ backgroundColor: "#DEF0FE" }}
      >
        <div className="flex gap-3 flex-wrap w-full sm:w-auto justify-content-center sm:justify-start">
          <a href="/" className="px-2 py-1 hover:text-blue-600 text-sm">
            Home
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-600 text-sm">
            Services
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-600 text-sm">
            Sale
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-600 text-sm">
            About Us
          </a>
          <a href="#" className="px-2 py-1 hover:text-blue-600 text-sm">
            Contact Us
          </a>
        </div>

        <div className="ml-auto sm:mr-4">
          <Button
            label="Sale! 50% Off"
            className="p-button-sm"
            style={{ backgroundColor: "#000000", borderColor: "#000000" }}
          />
        </div>
      </div>
    </div>
  );
}