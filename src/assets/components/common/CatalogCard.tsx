export interface Product {
  id: string;
  image: string;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  desc: string;
  rating: number;
  countReview: number;
  hasDiscount?: boolean;
}

interface CatalogCardProps extends Product {
  onClick: (product: Product) => void;
}

function CatalogCard({
  id,
  image,
  priceWithoutDiscount,
  priceWithDiscount,
  desc,
  rating,
  countReview,
  hasDiscount,
  onClick
}: CatalogCardProps) {
  let discount: number = Math.round(
    ((priceWithoutDiscount - priceWithDiscount) / priceWithoutDiscount) * 100
  );

  const handleClick = () => {
    if (onClick) {
      onClick({
        id,
        image,
        priceWithoutDiscount,
        priceWithDiscount,
        desc,
        rating,
        countReview,
        hasDiscount
      });
    }
  };
  return (
    <div className="w-65 h-100 rounded-xl cursor-pointer" onClick={handleClick}>
      <img src={image} className="w-full h-80 rounded-xl" />
      <div className="grid grid-rows-3">
        <div className="flex gap-2 items-end">
          <p className="text-pink-600 text-2xl">{priceWithDiscount} ₽</p>
          <p className="text-gray-400 line-through font-bold">
            {priceWithoutDiscount}
          </p>
          <p className="text-pink-600">-{discount}%</p>
        </div>
        <div className="line-clamp-2">{desc}</div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="orange"
              d="M8 2a1 1 0 0 1 .87.508l1.538 2.723 2.782.537a1 1 0 0 1 .538 1.667L11.711 9.58l.512 3.266A1 1 0 0 1 10.8 13.9L8 12.548 5.2 13.9a1 1 0 0 1-1.423-1.055l.512-3.266-2.017-2.144a1 1 0 0 1 .538-1.667l2.782-.537 1.537-2.723A1 1 0 0 1 8 2"
            ></path>
          </svg>
          {rating}
          <div className="text-gray-500 flex items-center ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="currentColor"
                d="M8.545 13C11.93 13 14 11.102 14 8s-2.07-5-5.455-5C5.161 3 3.091 4.897 3.091 8c0 1.202.31 2.223.889 3.023-.2.335-.42.643-.656.899-.494.539-.494 1.077.494 1.077.89 0 1.652-.15 2.308-.394.703.259 1.514.394 2.42.394"
              ></path>
            </svg>
            {countReview} отзывов
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogCard;
