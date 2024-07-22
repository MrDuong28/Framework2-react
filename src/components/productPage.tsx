import React from "react";
import cat1 from "../layout/client/image/cat1.png";
import cat2 from "../layout/client/image/cat2.png";
import cat3 from "../layout/client/image/cat3.png";
import cat4 from "../layout/client/image/cat4.png";
import pro1 from "../layout/client/image/pro1.png";
import pro2 from "../layout/client/image/pro2.png";
import pro3 from "../layout/client/image/pro3.png";
import pro4 from "../layout/client/image/pro4.png";
import pro5 from "../layout/client/image/pro5.png";
import pro6 from "../layout/client/image/pro6.png";
import pro7 from "../layout/client/image/pro7.png";
import pro8 from "../layout/client/image/pro8.png";
import pro9 from "../layout/client/image/pro9.png";

import productImg6 from "../layout/client/image/img6.png";
import icon3 from "../layout/client/image/icon3.png";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <div className="product-page">
      <div className="pro-title">Töpfe & Behälter</div>
      <div className="flex gap-[92px] cat-all ml-[140px] mt-[31px] mb-[118px]">
        <div className="cat flex gap-[8px] items-center pl-[9px]">
          <img src={cat1} alt="" />
          <p>Eckige Töpfe</p>
        </div>
        <div className="cat flex gap-[8px] items-center pl-[9px]">
          <img src={cat2} alt="" />
          <p>Runde Töpfe</p>
        </div>{" "}
        <div className="cat flex gap-[8px] items-center pl-[9px]">
          <img src={cat3} alt="" />
          <p>Untersetzer</p>
        </div>
        <div className="cat flex gap-[8px] items-center pl-[9px]">
          <img src={cat4} alt="" />
          <p>Pflanzschalen</p>
        </div>
      </div>
      <div className="flex gap-[31px] mb-[22px] ml-[100px]">
        <div className="select flex gap-[13px]">
          <span className="mt-[8px]">Sort By :</span>
          <select className="bg-gray-50 border border-gray-400 rounded-lg block  p-2.5 dark:border-gray-600 text-gray-300 w-[222px]  ">
            <option selected>Newest</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="select flex gap-[13px]">
          <span className="mt-[8px]">Show :</span>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-400 rounded-lg block p-2.5 dark:border-gray-600 text-gray-300 w-[222px]  "
          >
            <option selected>Default</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div className="flex gap-[100px] ml-[100px]">
        <div className="grid grid-cols-3 gap-[98px] ">
          <div className="pro ">
            <img src={pro1} alt="" />
            <h3 className="pro-name">Square cultivation pots </h3>
            <div className="flex gap-[5px]">
              <p>$38.00</p>
              <p className="line-through text-gray-500">$45.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro2} alt="" />

            <h3 className="pro-name">Round plant pots</h3>
            <div className="flex gap-[5px]">
              <p>$28.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro3} alt="" />
            <h3 className="pro-name">Square plant pots </h3>
            <div className="flex gap-[5px]">
              <p>$21.00</p>
              <p className="line-through text-gray-500">$45.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro4} alt="" />
            <h3 className="pro-name">Mesh pots round </h3>
            <div className="flex gap-[5px]">
              <p>$45.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro5} alt="" />
            <h3 className="pro-name">Square cultivation pots </h3>
            <div className="flex gap-[5px]">
              <p>$23.00</p>
              <p className="line-through text-gray-500">$45.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro6} alt="" />
            <h3 className="pro-name">Mess pot</h3>
            <div className="flex gap-[5px]">
              <p>$43.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro7} alt="" />
            <h3 className="pro-name">Square plant</h3>
            <div className="flex gap-[5px]">
              <p>$10.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro8} alt="" />
            <h3 className="pro-name">Round plant pot </h3>
            <div className="flex gap-[5px]">
              <p>$25.00</p>
            </div>
          </div>
          <div className="pro">
            <img src={pro9} alt="" />
            <h3 className="pro-name">Square plant </h3>
            <div className="flex gap-[5px]">
              <p>$12.00</p>
            </div>
          </div>
        </div>
        <div className="cate  mr-[100px]">
          <h2>Kategorien</h2>
          <div className="flex items-center mb-4 ml-[10px] mt-[25px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
            />
            <label className="ml-[5px]">Eckige Töpfe</label>
          </div>
          <div className="flex items-center mb-4 ml-[10px] mt-[25px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
            />
            <label className="ml-[5px]">Runde Töpfe</label>
          </div>{" "}
          <div className="flex items-center mb-4 ml-[10px] mt-[25px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
            />
            <label className="ml-[5px]">Untersetzer</label>
          </div>{" "}
          <div className="flex items-center mb-4 ml-[10px] mt-[27px]">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
            />
            <label className="ml-[5px]">Pflanzschalen</label>
          </div>
          <div className="grid-item">
            <img
              src={productImg6}
              alt="Product"
              className="w-[213px] h-[262px]"
            />
            <div className="product-content">Grow your own favourite plant</div>
            <div className="product-content2 flex">
              <button>Shop Now </button>
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
                  stroke-width="1.4103"
                  stroke-miterlimit="10"
                />
                <path
                  d="M10.2543 12.3523L12.7473 9.85922L10.2543 7.36615"
                  stroke="white"
                  stroke-width="1.4103"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.87109 9.85925H12.7473"
                  stroke="white"
                  stroke-width="1.4103"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <h3 className="product-content3 mt-[24px]">Filter By Price</h3>
          <img src={icon3} alt="" />
          <div className="flex justify-between text-gray-500">
            <p>From $0 to $8000</p>
            <p>Filter</p>
          </div>
          <h3 className="product-content3 mt-[40px]">Filter By Size</h3>
          <img src={icon3} alt="" />
          <div className="flex justify-between text-gray-500">
            <p>2 mm by 50</p>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div className="new3 flex ">
        Etwas abonnieren
        <div>
          {" "}
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
              stroke-width="4.67895"
            />
            <path
              d="M25.3948 5.81079L2.00004 19.3177"
              stroke="#161819"
              stroke-width="4.67895"
            />
            <path
              d="M25.3948 19.3176L2.00004 5.81067"
              stroke="#161819"
              stroke-width="4.67895"
            />
          </svg>{" "}
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
            stroke-width="4.67895"
          />
        </svg>
        <div className="">Unser Newsletter</div>
      </div>
      <div className=" relative flex mb-[100px]">
        <p className="news-text">
          Get weekly update about our product on your email, no spam guaranteed
          we promise ✌️
        </p>
        <div className="relative w-[525px]  ">
          <input
            className="w-[508.446px] h-[62.386px] rounded-[3px] bg-white pl-4 pr-16 border border-gray-300 focus:outline-none"
            type="text"
            placeholder="  ✉️       youremail123@gmail.com"
          />
          <button
            className=" mt-[20px] absolute right-[17px] top-[20%] email-btn"
            type="button"
            id="button-addon4"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            ABONNIEREN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
