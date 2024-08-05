import productImg5 from "../layout/client/image/img5.png";
import productImg6 from "../layout/client/image/img6.png";
import productImg7 from "../layout/client/image/img7.png";
import productImg8 from "../layout/client/image/img8.png";
import productImg9 from "../layout/client/image/img9.png";
import bannerImage from "../layout/client/image/banner.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IProduct } from "../interface/product";
import { Tcate } from "../interface/cate";
import { Link } from "react-router-dom";
type Props = {
  products: IProduct[];
  categories: Tcate[];
};

const Home = ({ products, categories }: Props) => {
  const limitedProducts = products.slice(0, 4);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
                  Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
                </h1>
                <p className="read">
                  Lorem Ipsum chỉ đơn giản là văn bản giả được in và ngành sắp
                  chữ. Lorem Ipsum là người đứng đầu ngành văn bản giả tiêu
                  chuẩn kể từ những năm 1500,
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
                  Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
                </h1>
                <p className="read">
                  Lorem Ipsum chỉ đơn giản là văn bản giả được in và ngành sắp
                  chữ. Lorem Ipsum là người đứng đầu ngành văn bản giả tiêu
                  chuẩn kể từ những năm 1500,
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
                  Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
                </h1>
                <p className="read">
                  Lorem Ipsum chỉ đơn giản là văn bản giả được in và ngành sắp
                  chữ. Lorem Ipsum là người đứng đầu ngành văn bản giả tiêu
                  chuẩn kể từ những năm 1500,
                </p>
                <div className="banner-btn">
                  <a>Lern mehr</a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <h1 className="news">Bán chạy nhất</h1>

        <div className="products flex gap-[100px] pt-[70px] pl-[120px]">
          {limitedProducts.map((product) => (
            <div key={product.id} className="bg-white overflow-hidden ">
              <Link to={`/productdetail/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[200px] h-[200px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </Link>
              <div className="p-4">
                <h3 className="product-name text-lg font-bold">
                  {product.name}
                </h3>
                <p className="text-gray-600">${product.price}</p>
                {/* <p className="text-gray-600">Category: {product.category}</p> */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-container mb-[73px]">
          <div className="product-container-left">
            <img
              src={productImg5}
              alt="Product"
              className="w-[550px] h-[477px] "
            />
            <div className="product-text">Xẻng làm vườn</div>
          </div>
          <div className="product-container-right grid-container ">
            <div className="grid-item">
              <img src={productImg6} alt="Product" className="grid-image" />
              <div className="product-text-right">Cát</div>
            </div>
            <div className="grid-item">
              <img src={productImg7} alt="Product" className="grid-image" />
              <div className="product-text-right">Hộp</div>
            </div>
            <div className="grid-item">
              <img src={productImg8} alt="Product" className="grid-image" />
              <div className="product-text-right">Bánh bùn</div>
            </div>
            <div className="grid-item">
              <img src={productImg9} alt="Product" className="grid-image" />
              <div className="product-text-right">Cái kẹp</div>
            </div>
          </div>
        </div>

        <h1 className="news2 mb-[21px]">Danh mục</h1>
        <hr />
        <div className="category">
          {categories.map((category, index) => (
            <div key={index} className="cat1">
              <img
                src={category.image}
                alt="Product"
                className="category-image"
              />
              <div className="text-category">
                {category.name}
                <p className="font-light">{category.quantity} Items</p>
              </div>
            </div>
          ))}
        </div>
        <div className="new3 flex">
          Đăng ký một cái gì đó
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
          <div className="">Bản tin của chúng tôi</div>
        </div>
        <div className=" relative flex">
          <p className="news-text">
            Nhận cập nhật hàng tuần về sản phẩm của chúng tôi qua email của bạn,
            không có thư rác đảm bảo chúng tôi hứa ✌️
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
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
