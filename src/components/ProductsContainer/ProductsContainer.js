import React, { useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { productData } from "../../utils/productData";
import "./ProductsContainer.css";

const ProductsContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const brands = [...new Set(productData.products.map((product) => product.brandName))];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBrandFilterChange = (event) => {
    setBrandFilter(event.target.value);
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredProducts = productData.products.filter((product) => {
    const productName = product.name.toLowerCase();
    const brandName = product.brandName.toLowerCase();
    const searchQueryLowerCase = searchQuery.toLowerCase();

    return (
      (searchQuery === "" || productName.includes(searchQueryLowerCase) || brandName.includes(searchQueryLowerCase)) &&
      (brandFilter === "" || product.brandName === brandFilter) &&
      (genderFilter === "" || product.gender === genderFilter)
    );
  });

  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price.current.value - b.price.current.value);
  } else if (sortOrder === "desc") {
    filteredProducts.sort((a, b) => b.price.current.value - a.price.current.value);
  } else if (sortOrder === "nameAsc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "nameDesc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div>
      <div className="category-filter">
        <h2>Filters</h2>
        <form>
          <label>
            Search:
            <input type="text" value={searchQuery} onChange={handleSearchChange} />
          </label>
          <br />
          <label>
            Brand:
            <select value={brandFilter} onChange={handleBrandFilterChange}>
              <option value="">View All</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Gender:
            <select value={genderFilter} onChange={handleGenderFilterChange}>
              <option value="">View All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </label>
          <br />
          <label>
            Sort:
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
              <option value="nameAsc">Name: A-Z</option>
              <option value="nameDesc">Name: Z-A</option>
            </select>
          </label>
        </form>
      </div>
      <div className="results-count">
        <h4>{filteredProducts.length} results found</h4>
        <span className="yellow-line"></span>
      </div>

      <div className="container">
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} id={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price.current.text} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
