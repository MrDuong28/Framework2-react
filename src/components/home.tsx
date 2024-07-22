import React from "react";
import productImg1 from "../layout/client/image/img1.png";
import productImg2 from "../layout/client/image/img2.png";
import productImg3 from "../layout/client/image/img3.png";
import productImg4 from "../layout/client/image/img4.png";
import productImg5 from "../layout/client/image/img5.png";
import productImg6 from "../layout/client/image/img6.png";
import productImg7 from "../layout/client/image/img7.png";
import productImg8 from "../layout/client/image/img8.png";
import productImg9 from "../layout/client/image/img9.png";
import bannerImage from "../layout/client/image/banner.png";
import productImage1 from "../layout/client/image/product3-1.png";
import productImage2 from "../layout/client/image/product3-2.png";
import productImage3 from "../layout/client/image/product3-3.png";
import productImage4 from "../layout/client/image/product3-4.png";
import productImage5 from "../layout/client/image/product3-5.png";
import productImage6 from "../layout/client/image/product3-6.png";
import productImage7 from "../layout/client/image/product3-7.png";
import productImage8 from "../layout/client/image/product3-8.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
type Props = {};

const Home = (props: Props) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const categories = [
    { src: productImage1, text: "Beleuchtung", items: 30 },
    { src: productImage2, text: "Dünger", items: 20 },
    { src: productImage3, text: "Erde & Substrate", items: 20 },
    { src: productImage4, text: "Bewässerung", items: 20 },
    { src: productImage5, text: "Töpfe & Behälter", items: 20 },
    { src: productImage6, text: "Growbox", items: 20 },
    { src: productImage7, text: "Pflanzen & Gärtnern", items: 30 },
    { src: productImage8, text: "Lüftung & Klimaanlage", items: 20 },
  ];
  return (
    <>
      <div className="home">
        <Slider {...settings}>
          <div className="banner">
            <div className="banner-container">
              <img
                src={bannerImage}
                alt="Mô tả hình ảnh"
                className="banner-image"
              />
              <div className="banner-content">
                <h1 className="title">
                  Wir kümmern uns um Ihre schöner Garten und Haus
                </h1>
                <p className="read">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="banner-btn">
                  <a>Lern mehr</a>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="banner-container ">
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20231221/pngtree-indoor-green-plants-green-potted-plants-photo-image_15533808.png"
                alt="Mô tả hình ảnh"
                className="banner-image"
              />
              <div className="banner-content  ">
                <h1 className="title">
                  Wir kümmern uns um Ihre schöner Garten und Haus
                </h1>
                <p className="read">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="banner-btn">
                  <a>Lern mehr</a>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="banner-container">
              <img
                src="https://caycanh.garden1900.com/wp-content/uploads/2020/09/top-10-cay-canh-van-phong-cay-canh-noi-that-garden1900.jpg"
                alt="Mô tả hình ảnh"
                className=" banner-image   h-[645px]"
              />
              <div className="banner-content">
                <h1 className="title">
                  Wir kümmern uns um Ihre schöner Garten und Haus
                </h1>
                <p className="read">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="banner-btn">
                  <a>Lern mehr</a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <h1 className="news">Best sellers</h1>

        <div className="products flex ">
          <div className="product">
            <img className="w-[200px] h-[200px]" src={productImg1} alt="" />
            <h3 className="product-name">Growbox</h3>
            <div className="flex justify-between mt-[7px]">
              <p className="product-title">Dress</p>
              <p className="product-price">$ 963.85</p>
            </div>
          </div>
          <div className="product">
            <img className="w-[200px] h-[200px]" src={productImg2} alt="" />
            <h3 className="product-name">Töpfe</h3>
            <div className="flex justify-between mt-[7px]">
              <p className="product-title">5 by 5 pots for planting</p>
              <p className="product-price">$ 6130.00</p>
            </div>
          </div>
          <div className="product">
            <img className="w-[200px] h-[200px]" src={productImg3} alt="" />
            <h3 className="product-name">Lichthänger-Set</h3>
            <div className="flex justify-between mt-[7px]">
              <p className="product-title">Light-hanger set </p>
              <p className="product-price">$ 753.00</p>
            </div>
          </div>
          <div className="product">
            <p className="sale bg-[#1E2832] w-[47.393px] h-[21.874px] float-left  ">
              SALE
            </p>
            <img className="w-[200px] h-[200px]" src={productImg4} alt="" />
            <h3 className="product-name">Licht</h3>
            <div className="flex justify-between mt-[7px]">
              <p className="product-title">Dress</p>
              <div className="flex gap-[15px]">
                {" "}
                <p className="price-sale">$ 2364.00</p>
                <p className="product-price text-red-600">$ 1155.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container mb-[73px]">
          <div className="product-container-left">
            <img
              src={productImg5}
              alt="Product"
              className="w-[550px] h-[477px] "
            />
            <div className="product-text">garten spaten</div>
          </div>
          <div className="product-container-right grid-container ">
            <div className="grid-item">
              <img src={productImg6} alt="Product" className="grid-image" />
              <div className="product-text-right">sand</div>
            </div>
            <div className="grid-item">
              <img src={productImg7} alt="Product" className="grid-image" />
              <div className="product-text-right">pflanzer</div>
            </div>
            <div className="grid-item">
              <img src={productImg8} alt="Product" className="grid-image" />
              <div className="product-text-right">schlammkuchen</div>
            </div>
            <div className="grid-item">
              <img src={productImg9} alt="Product" className="grid-image" />
              <div className="product-text-right">klemmen</div>
            </div>
          </div>
        </div>

        <h1 className="news2 mb-[21px]">Kategorien</h1>
        <hr />
        <div className="category">
          {categories.map((category, index) => (
            <div key={index} className="cat1">
              <img
                src={category.src}
                alt="Product"
                className="category-image"
              />
              <div className="text-category">
                {category.text}
                <p>{category.items} items</p>
              </div>
            </div>
          ))}
        </div>
        <div className="new3 flex">
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
        <div className=" relative flex">
          <p className="news-text">
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
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
    </>
  );
};

export default Home;
