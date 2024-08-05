import { Link } from "react-router-dom";
import { IProduct } from "../interface/product";

type Props = {
  product: IProduct;
};

const ProductItem = ({ product }: Props) => {
  return (
    <div key={product.id} className="bg-white overflow-hidden">
      <Link to={`/productdetail/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-[200px] h-[200px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
