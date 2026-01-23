import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../../../products.json";
import type { Product } from "../../components/common/CatalogCard";
function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    const foundProduct: Product | undefined = productsData.find(
      (p) => p.id === id
    );

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div>
        <div>Товар не найден</div>
      </div>
    );
  }

  return (
    <div className="bg-background-secondary">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-2 text-gray-600 p-2">
          <div className="flex justify-start cursor-pointer">
            <a className="hover:text-accent-primary transition-colors duration-200">
              Категория
            </a>
            *
            <a className="hover:text-accent-primary transition-colors duration-200">
              Категория
            </a>
            *
            <a className="hover:text-accent-primary transition-colors duration-200">
              Категория
            </a>
          </div>
          <div className="flex justify-end items-center gap-3 text-gray-600">
            <div className="flex items-center gap-2 hover:text-accent-primary cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M1.333 6.333c0-4.117.883-5 5-5 4.118 0 5 .883 5 5 0 4.118-.882 5-5 5-4.117 0-5-.882-5-5"
              ></path>
              <path
                fill="currentColor"
                d="M6.333 12.167c-.416 0-.833.416-.833.833 0 1.667 3.249 1.667 4.167 1.667 4.117 0 5-.883 5-5 0-.918 0-4.167-1.667-4.167-.442.035-.833.417-.833.833 0 4.584-1.25 5.834-5.834 5.834"
              ></path>
            </svg>
            <p>Артикул: {product.id}</p>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-primary cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M.5 8C.5 1.824 1.824.5 8 .5s7.5 1.324 7.5 7.5-1.324 7.5-7.5 7.5S.5 14.176.5 8m5.833-4.167h-2.5a.833.833 0 0 0 0 1.667h2.5a.833.833 0 1 0 0-1.667M5.5 10.5H3.833a.833.833 0 0 0 0 1.667H5.5a.833.833 0 0 0 0-1.667m3.333-3.333h-5a.833.833 0 0 0 0 1.666h5a.833.833 0 1 0 0-1.666m2.5 2.5a.833.833 0 1 0-1.666 0v.833h-.834a.833.833 0 0 0 0 1.667h.834V13a.833.833 0 0 0 1.666 0v-.833h.834a.833.833 0 0 0 0-1.667h-.834z"></path></svg>
            <p>В сравнение</p>
            </div>
            <div className="flex items-center gap-2 hover:text-accent-primary cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8.833 13.833C8 13.833 8 9.667 8 9.667c-5.833 0-6.25 4.166-6.667 4.166-1.575 0-1.666-9.166 6.667-9.166C8 4.667 8 .5 8.833.5 9.667.5 15.5 5.917 15.5 7.167s-5.833 6.666-6.667 6.666"></path></svg>
            <p>Поделиться</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
