import React, { useState } from "react";
import cat1 from "../layout/client/image/cat1.png";
import cat2 from "../layout/client/image/cat2.png";
import cat3 from "../layout/client/image/cat3.png";
import cat4 from "../layout/client/image/cat4.png";
import productImg6 from "../layout/client/image/img6.png";
import icon3 from "../layout/client/image/icon3.png";
import { IProduct } from "../interface/product";
import ProductItem from "./productItem";
import { useParams } from "react-router-dom";

type Props = {
  products: IProduct[];
};

const ProductPage = ({ products }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Filter products based on selected categories
  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;

  return (
    <div className="product-page">
      <div className="pro-title">Chậu & Hộp đựng</div>
      <div className="flex gap-[92px] cat-all ml-[140px] mt-[31px] mb-[118px]">
        <div
          className="cat flex gap-[8px] items-center pl-[9px]"
          onClick={() => handleCategoryChange("Điện thoại")}
        >
          <img
            src={
              "https://hpcluxury.com.vn/wp-content/uploads/2023/09/Vu%C3%B4ng-Prime-Gold-V%C3%A0ng-h%E1%BB%93ng-full-kim-c%C6%B0%C6%A1ng.jpg"
            }
            className="w-[50px]"
            alt=""
          />
          <p>Điện thoại</p>
        </div>
        <div
          className="cat flex gap-[8px] items-center pl-[9px]"
          onClick={() => handleCategoryChange("Tai nghe")}
        >
          <img
            src={
              "https://img.lazcdn.com/g/p/4f5f7385c85baf7238488176e6fe4aa9.jpg_720x720q80.jpg"
            }
            className="w-[50px]"
            alt=""
          />
          <p>Tai nghe</p>
        </div>
        <div
          className="cat flex gap-[8px] items-center pl-[9px]"
          onClick={() => handleCategoryChange("Tay cầm")}
        >
          <img
            src={
              "https://npcshop.vn/media/product/6664-sony-ps5-dualsense-edge-wireless-controller--7-.jpg"
            }
            className="w-[50px]"
            alt=""
          />
          <p>Tay cầm</p>
        </div>
        <div
          className="cat flex gap-[8px] items-center pl-[9px]"
          onClick={() => handleCategoryChange("Bàn phím")}
        >
          <img
            src={
              "https://pos.nvncdn.com/5f3840-119888/ps/20230809_oEEGJG30hK.png"
            }
            className="w-[50px]"
            alt=""
          />
          <p>Bàn phím</p>
        </div>
      </div>
      <div className="flex gap-[31px] mb-[22px] ml-[100px]">
        <div className="select flex gap-[13px]">
          <span className="mt-[8px]">Sắp xếp theo :</span>
          <select className="bg-gray-50 border border-gray-400 rounded-lg block p-2.5 dark:border-gray-600 text-gray-300 w-[222px]">
            <option selected>Mới nhất</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="select flex gap-[13px]">
          <span className="mt-[8px]">Hiển thị :</span>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-400 rounded-lg block p-2.5 dark:border-gray-600 text-gray-300 w-[222px]"
          >
            <option selected>Mặc định</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div className="flex ml-[100px] gap-[250px]">
        <div className="product-left grid grid-cols-3 gap-[50px]">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

        <div className="cate mr-[100px]">
          <h2>Danh mục</h2>
          <div className="flex items-center mb-4 ml-[10px] mt-[25px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleCategoryChange("Điện thoại")}
              checked={selectedCategories.includes("Điện thoại")}
            />
            <label className="ml-[5px]">Điện thoại</label>
          </div>
          <div className="flex items-center mb-4 ml-[10px] mt-[25px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleCategoryChange("Tai nghe")}
              checked={selectedCategories.includes("Tai nghe")}
            />
            <label className="ml-[5px]">Tai nghe</label>
          </div>
          <div className="flex items-center mb-4 ml-[10px] mt-[25px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleCategoryChange("Tay cầm")}
              checked={selectedCategories.includes("Tay cầm")}
            />
            <label className="ml-[5px]">Tay cầm</label>
          </div>
          <div className="flex items-center mb-4 ml-[10px] mt-[27px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleCategoryChange("Bàn phím")}
              checked={selectedCategories.includes("Bàn phím")}
            />
            <label className="ml-[5px]">Bàn phím</label>
          </div>
          <div className="flex items-center mb-4 ml-[10px] mt-[27px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={() => handleCategoryChange("Laptop")}
              checked={selectedCategories.includes("Laptop")}
            />
            <label className="ml-[5px]">Laptop</label>
          </div>
          <div className="grid-item">
            <img
              src={productImg6}
              alt="Product"
              className="w-[213px] h-[262px]"
            />
            <div className="product-content">
              Trồng loại cây yêu thích của riêng bạn
            </div>
            <div className="product-content2 flex">
              <button>Mua sắm ngay </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-[5px]"
              >
                <path
                  d="M9.80917 16.9107C13.7036 16.9107 16.8607 13.7536 16.8607 9.85922C16.8607 5.9648 13.7036 2.80774 9.80917 2.80774C5.91475 2.80774 2.75769 5.9648 2.75769 9.85922C2.75769 13.7536 5.91475 16.9107 9.80917 16.9107Z"
                  stroke="white"
                  strokeWidth="1.4103"
                  strokeMiterlimit="10"
                />
                <path
                  d="M10.2543 12.3523L12.7473 9.85922L10.2543 7.36615"
                  stroke="white"
                  strokeWidth="1.4103"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.87109 9.85925H12.7473"
                  stroke="white"
                  strokeWidth="1.4103"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h3 className="product-content3 mt-[24px]">Lọc theo giá</h3>
          <img src={icon3} alt="" />
          <div className="flex justify-between text-gray-500">
            <p>Từ $0 tới $8000</p>
            <p>Filter</p>
          </div>
          <h3 className="product-content3 mt-[40px]">Lọc theo cỡ</h3>
          <img src={icon3} alt="" />
          <div className="flex justify-between text-gray-500">
            <p>2 mm qua 50</p>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div className="new3 flex">
        Đăng ký một cái gì đó
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
          >
            <path
              d="M13.6974 0V25.7342"
              stroke="#161819"
              strokeWidth="4.67895"
            />
            <path
              d="M25.3948 5.81079L2.00004 19.3177"
              stroke="#161819"
              strokeWidth="4.67895"
            />
            <path
              d="M25.3948 19.3176L2.00004 5.81067"
              stroke="#161819"
              strokeWidth="4.67895"
            />
          </svg>
        </div>
      </div>
      <div className="new4 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="6"
          viewBox="0 0 33 6"
          fill="none"
          className="mt-[35px] mr-[20px]"
        >
          <path
            d="M32.7527 2.93677L0.779879 2.93677"
            stroke="#161819"
            strokeWidth="4.67895"
          />
        </svg>
        <div className="">Bản tin của chúng tôi</div>
      </div>
      <div className="relative flex mb-[100px]">
        <p className="news-text">
          Nhận thông tin cập nhật hàng tuần về sản phẩm của chúng tôi qua email
          của bạn, không có thư rác đảm bảo chúng tôi hứa ✌️
        </p>
        <div className="relative w-[525px]">
          <input
            className="w-[508.446px] h-[62.386px] rounded-[3px] bg-white pl-4 pr-16 border border-gray-300 focus:outline-none"
            type="text"
            placeholder="✉️ youremail123@gmail.com"
          />
          <button
            className="mt-[20px] absolute right-[17px] top-[20%] email-btn"
            type="button"
            id="button-addon4"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
