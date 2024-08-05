import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../interface/product";
import { Tcate } from "../interface/cate";

type Props = {
  products: IProduct[];
  categories: Tcate[];
};

const CategoryId = ({ products, categories }: Props) => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (id) {
      // Lọc sản phẩm theo categoryId
      const filtered = products.filter(
        (product) => product.categoryId === Number(id)
      );
      console.log("Filtered Products:", filtered); // Log danh sách sản phẩm đã lọc
      setFilteredProducts(filtered);
    }
  }, [id, products]);

  const getCategoryName = (categoryId: number) => {
    if (!categories) return "Unknown Category";
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  return (
    <>
      <div className="w-full p-4 bg-white">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-8 text-lg font-semibold text-gray-700">
            Không có sản phẩm nào trong danh mục này.
          </div>
        ) : (
          <div className="flex flex-wrap justify-between ml-20 mr-20">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`w-[23%] p-2 relative ${
                  index % 4 !== 3 ? "mr-4" : "" // Thêm margin-right cho tất cả nhưng không phải mục cuối cùng trong hàng
                }`}
              >
                <Link to={`/product-detail/${product.id}`}>
                  <div className="h-[250px] overflow-hidden flex items-center justify-center">
                    <img
                      className="h-full w-full object-cover hover:scale-110 duration-500"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                </Link>
                <h3 className="w-full py-2 text-[#665345] font-semibold text-[14px] px-4 my-4">
                  {product.name}
                </h3>
                <div className="flex justify-between px-4 pb-2">
                  <span className="text-[#777777] text-[12px]">
                    {getCategoryName(product.categoryId)}
                  </span>
                  <span className="text-[13px]">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryId;
