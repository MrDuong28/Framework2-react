import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../config/axios";
import { IProduct } from "../interface/product";
import ProductItem from "./productItem";

const Search = () => {
  const [search] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [keywords, setKeywords] = useState<string>("");
  useEffect(() => {
    console.log(search.get("keyword"));
    (async () => {
      const { data } = await api.get(
        "products?name_like=" + search.get("keyword")
      );
      setProducts(data);
      setKeywords(search.get("keyword") as string);
    })();
  }, [search]);
  return (
    <div className="mb-[70px]">
      <h1 className="text-3xl font-bold text-center py-10 flex items-center justify-center space-x-2">
        <span className="text-yellow-500">🔍</span>
        <span>Kết quả tìm kiếm theo từ khóa:</span>
        <strong className="text-green-600">{keywords}</strong>
      </h1>

      <div>
        <div className="ml-[70px] grid grid-cols-4 gap-x-6 gap-y-10">
          {products.length > 0 ? (
            products.map((product: IProduct) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-4 flex ml-[420px]">
              <p className="text-red-600 text-2xl font-bold bg-white p-4 border border-red-600 rounded shadow-lg">
                Không tìm thấy sản phẩm nào
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
