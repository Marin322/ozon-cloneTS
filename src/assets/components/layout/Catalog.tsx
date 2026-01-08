import { useState } from "react";
import productsData from "../../../products.json";

import CatalogCard from "../common/CatalogCard";
function Catalog() {
  const [products, setProducts] = useState(productsData);
  return (
    <div className="w-full h-auto bg-background-secondary rounded-3xl grid grid-cols-5 gap-5 gap-y-20 p-3 justify-items-center">
      {products.map((product) => (
        <CatalogCard
          key={product.id}
          image={product.image}
          priceWithoutDiscount={product.priceWithoutDiscount}
          priceWithDiscount={product.priceWithDiscount}
          desc={product.desc}
          rating={product.rating}
          countReview={product.countReview}
        />
      ))}
    </div>
  );
}

export default Catalog;
