import { useState } from "react";
import productsData from "../../../products.json";

import CatalogCard from "../common/CatalogCard";
import { useNavigate } from "react-router-dom";

import type { Product } from "../common/CatalogCard";
function Catalog() {
  const [products] = useState(productsData);
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="w-full h-auto bg-background-secondary rounded-3xl grid grid-cols-5 gap-5 gap-y-20 p-3 justify-items-center">
      {products.map((product) => (
        <CatalogCard
          key={product.id}
          id={product.id}
          image={product.image}
          priceWithoutDiscount={product.priceWithoutDiscount}
          priceWithDiscount={product.priceWithDiscount}
          desc={product.desc}
          rating={product.rating}
          countReview={product.countReview}
          onClick={handleProductClick}
        />
      ))}
    </div>
  );
}

export default Catalog;
