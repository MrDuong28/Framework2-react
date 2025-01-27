import React from "react";
import pro5 from "../layout/client/image/pro5.png";
import selectImg from "../layout/client/image/select-img.png";
import star from "../layout/client/image/star.png";
import star2 from "../layout/client/image/star2.png";
import star3 from "../layout/client/image/star3.png";
import { IProduct } from "../interface/product";
import { useParams } from "react-router-dom";

type Props = {
  products: IProduct[];
};

const ProductDetail = ({ products }: Props) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <div className="flex mt-[100px]  gap-[200px]">
        <div className="ml-[180px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-[300px] h-[300px]"
          />
        </div>
        <div className="right-content">
          <h3>{product.name}</h3>
          <h1>{product.title}</h1>
          <p className="text2">{product.deslow}</p>
          <p className="text">{product.description}</p>
          <div className="price-all flex gap-[16px]">
            <p className="price">${product.price}</p>
            <p className="sale ">50%</p>
          </div>
          <p className="discount line line-through">$1200.00</p>
          <div className="flex gap-[15px] mt-[15px]">
            <div className="up-down ">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="5"
                  viewBox="0 0 12 5"
                  fill="none"
                >
                  <g clip-path="url(#clip0_28_4)">
                    <path
                      d="M11.357 3.832C11.4414 3.83227 11.5251 3.81585 11.6031 3.78369C11.6812 3.75153 11.7522 3.70427 11.8119 3.64461C11.8717 3.58496 11.919 3.51409 11.9513 3.43607C11.9836 3.35806 12.0001 3.27443 12 3.19V1.143C12.0003 1.05849 11.9838 0.974757 11.9516 0.896626C11.9194 0.818494 11.872 0.747505 11.8123 0.687745C11.7525 0.627984 11.6815 0.580631 11.6034 0.548411C11.5252 0.51619 11.4415 0.499739 11.357 0.500003H0.643003C0.558489 0.499739 0.474757 0.51619 0.396626 0.548411C0.318494 0.580631 0.247505 0.627984 0.187745 0.687745C0.127984 0.747505 0.0806309 0.818494 0.0484107 0.896626C0.0161904 0.974757 -0.000260978 1.05849 3.13019e-06 1.143V3.189C3.13019e-06 3.546 0.287003 3.832 0.643003 3.832H11.357Z"
                      fill="#505F4E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_28_4">
                      <rect
                        width="12"
                        height="4"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <p>3</p>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <g clip-path="url(#clip0_28_7)">
                    <path
                      d="M12 7.52301V5.47701C12.0003 5.3925 11.9838 5.30877 11.9516 5.23063C11.9194 5.1525 11.872 5.08151 11.8123 5.02175C11.7525 4.96199 11.6815 4.91464 11.6034 4.88242C11.5253 4.8502 11.4415 4.83375 11.357 4.83401H7.66701V1.14301C7.66728 1.05833 7.65076 0.974433 7.61842 0.89617C7.58607 0.817907 7.53854 0.746829 7.47857 0.687041C7.41859 0.627254 7.34737 0.579943 7.269 0.547841C7.19064 0.51574 7.10669 0.499484 7.02201 0.500013H4.97701C4.8925 0.499748 4.80877 0.5162 4.73063 0.54842C4.6525 0.58064 4.58151 0.627993 4.52175 0.687754C4.46199 0.747515 4.41464 0.818503 4.38242 0.896635C4.3502 0.974766 4.33375 1.0585 4.33401 1.14301V4.83301H0.643013C0.558329 4.83275 0.474433 4.84926 0.39617 4.88161C0.317907 4.91395 0.246829 4.96148 0.187041 5.02146C0.127254 5.08143 0.079943 5.15266 0.0478413 5.23102C0.0157396 5.30938 -0.000516362 5.39333 1.25014e-05 5.47801V7.52401C1.25014e-05 7.88001 0.287013 8.16701 0.643013 8.16701H4.33301V11.858C4.33301 12.214 4.62101 12.501 4.97701 12.501H7.02301C7.10753 12.5013 7.19126 12.4848 7.26939 12.4526C7.34752 12.4204 7.41851 12.373 7.47827 12.3133C7.53803 12.2535 7.58538 12.1825 7.6176 12.1044C7.64983 12.0263 7.66628 11.9425 7.66601 11.858V8.16801H11.357C11.4418 8.16828 11.5258 8.15173 11.6041 8.11932C11.6824 8.08692 11.7535 8.03929 11.8133 7.97921C11.8731 7.91914 11.9204 7.84779 11.9525 7.76931C11.9845 7.69083 12.0007 7.60678 12 7.52201V7.52301Z"
                      fill="#505F4E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_28_7">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <a className="cart gap-[10px] ">
              <div className="pt-[3px]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_0_713)">
                    <path
                      d="M16.1695 3.08621H2.98525L2.78975 0.903251C2.7743 0.73094 2.69491 0.570655 2.56719 0.453954C2.43948 0.337253 2.27271 0.272594 2.0997 0.272705H0.69334C0.509714 0.272705 0.333609 0.34565 0.203765 0.475494C0.0739218 0.605337 0.000976563 0.781443 0.000976562 0.965069C0.000976563 1.1487 0.0739218 1.3248 0.203765 1.45464C0.333609 1.58449 0.509714 1.65743 0.69334 1.65743H1.46607L2.26275 10.5307C2.31916 11.1705 2.66457 11.8644 3.26034 12.3358C2.18702 13.7066 3.16761 15.7273 4.91398 15.7273C6.36284 15.7273 7.38438 14.2823 6.88752 12.913H10.6777C10.1817 14.2807 11.2009 15.7273 12.6521 15.7273C13.2087 15.7266 13.7424 15.5052 14.136 15.1116C14.5296 14.718 14.751 14.1844 14.7516 13.6278C14.751 13.0711 14.5296 12.5375 14.136 12.1439C13.7424 11.7503 13.2087 11.5289 12.6521 11.5283H4.91861C4.39239 11.5283 3.93416 11.2114 3.73634 10.7486L14.8026 10.0979C14.9498 10.0893 15.0904 10.034 15.204 9.93986C15.3175 9.84577 15.3981 9.71786 15.4339 9.5748L16.841 3.94702C16.8665 3.84488 16.8684 3.73827 16.8465 3.6353C16.8246 3.53232 16.7796 3.43568 16.7148 3.35271C16.65 3.26974 16.5671 3.20262 16.4725 3.15645C16.3779 3.11027 16.274 3.08625 16.1687 3.08621H16.1695ZM4.9132 14.3425C4.72938 14.334 4.55592 14.2549 4.42886 14.1218C4.3018 13.9887 4.2309 13.8118 4.2309 13.6278C4.2309 13.4437 4.3018 13.2668 4.42886 13.1337C4.55592 13.0006 4.72938 12.9215 4.9132 12.913C5.09702 12.9215 5.27048 13.0006 5.39755 13.1337C5.52461 13.2668 5.5955 13.4437 5.5955 13.6278C5.5955 13.8118 5.52461 13.9887 5.39755 14.1218C5.27048 14.2549 5.09702 14.334 4.9132 14.3425ZM12.6521 14.3425C12.4682 14.334 12.2948 14.2549 12.1677 14.1218C12.0407 13.9887 11.9698 13.8118 11.9698 13.6278C11.9698 13.4437 12.0407 13.2668 12.1677 13.1337C12.2948 13.0006 12.4682 12.9215 12.6521 12.913C12.8359 12.9215 13.0093 13.0006 13.1364 13.1337C13.2635 13.2668 13.3344 13.4437 13.3344 13.6278C13.3344 13.8118 13.2635 13.9887 13.1364 14.1218C13.0093 14.2549 12.8359 14.334 12.6521 14.3425ZM14.2137 8.74566L3.55011 9.37157L3.10966 4.47171H15.2824L14.2137 8.74489V8.74566Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_713">
                      <rect
                        width="17"
                        height="15.4545"
                        fill="white"
                        transform="translate(0 0.272705)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <a href="">Thêm vào giỏ hàng</a>
            </a>
          </div>
        </div>
      </div>

      <div className="flex ml-[150px] gap-[10px] mb-[120px] ">
        <img src={product.image} className=" w-[106px] h-[106px]" alt="" />
        <img src={product.image} className="w-[106px] h-[106px]" alt="" />
        <img src={product.image} className="w-[106px] h-[106px]" alt="" />
      </div>
      <div className="description pl-[190px] mb-[57px]">
        <h2>Mô tả </h2>
        <p>
          Lorem Ipsum chỉ đơn giản là văn bản giả của việc in ấn và sắp chữ
          ngành công nghiệp. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của
          ngành từ trước đến nay kể từ những năm 1500, khi một nhà in vô danh sử
          dụng rất nhiều loại và tranh giành tôi
        </p>
        <h2 className="mt-[30px]">Khác</h2>
        <p>
          Lorem Ipsum chỉ đơn giản là văn bản giả của việc in ấn và sắp chữ
          ngành công nghiệp. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của
          ngành từ trước đến nay kể từ những năm 1500, khi một nhà in vô danh sử
          dụng rất nhiều loại và tranh giành tôi
        </p>
      </div>
      <div className="flex pl-[225px] gap-[350px]">
        <div className="flex">
          <img src={pro5} className=" w-[150px] h-[150px]" alt="" />{" "}
          <div>
            <div className="flex mt-[50px]">
              <img src={star} className="w-[32px] h-[31px]" alt="" />
              <img src={star} className="w-[32px] h-[31px]" alt="" />
              <img src={star} className="w-[32px] h-[31px]" alt="" />
              <img src={star} className="w-[32px] h-[31px]" alt="" />
              <img src={star} className="w-[32px] h-[31px]" alt="" />
            </div>
            <div className="flex gap-[5px] ml-[50px] ">
              <p className="star">5.0 </p>
              <p className="number">(388)</p>
            </div>
          </div>
        </div>
        <button className="write">Viết đánh giá</button>
      </div>
      <div className="ml-[222px]">
        <div className="flex rank gap-[5px]">
          <div className="flex ">
            <p>1</p>
            <img src={star2} alt="" className="w-[13px] h-[13px] mt-[6px]" />
          </div>
          <p className="mt-[8px] w-[447px] h-[10px] bg-[#A2A0A0] border-r-[2px]"></p>
          <p>(388)</p>
        </div>
        <div className="flex rank gap-[5px]">
          <div className="flex ">
            <p>2</p>
            <img src={star2} alt="" className="w-[13px] h-[13px] mt-[6px] " />
          </div>
          <p className="mt-[8px] w-[69px] h-[10px] bg-[#D9D9D9] border-r-[2px]"></p>
        </div>
        <div className="flex rank gap-[5px]">
          <div className="flex ">
            <p>3</p>
            <img src={star2} alt="" className="w-[13px] h-[13px] mt-[6px] " />
          </div>
          <p className="mt-[8px] w-[69px] h-[10px] bg-[#D9D9D9] border-r-[2px]"></p>
        </div>
        <div className="flex rank gap-[5px]">
          <div className="flex ">
            <p>4</p>
            <img src={star2} alt="" className="w-[13px] h-[13px] mt-[6px] " />
          </div>
          <p className="mt-[8px] w-[69px] h-[10px] bg-[#D9D9D9] border-r-[2px]"></p>
        </div>
        <div className="flex rank gap-[5px]">
          <div className="flex ">
            <p>5</p>
            <img src={star2} alt="" className="w-[13px] h-[13px] mt-[6px] " />
          </div>
          <p className="mt-[8px] w-[69px] h-[10px] bg-[#D9D9D9] border-r-[2px]"></p>
        </div>
      </div>
      <div className="comment pt-[48px] ml-[718px]">
        <div className="flex gap-[20px] comment-name">
          <p>Đỗ Tuấn Dương</p>
          <div className="flex">
            <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />
            <img
              src={star3}
              alt=""
              className="w-[10px] h-[10px] mt-[8px]"
            />{" "}
            <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />{" "}
            <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />{" "}
            <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />
          </div>
        </div>
        <div className="comment-text">
          <p>
            Tôi đã sử dụng loại sữa rửa mặt này được khoảng năm hoặc sáu tháng
            và mụn của tôi gần như đã biến mất hoàn toàn. Tôi thực sự phải vật
            lộn với làn da của mình trong nhiều năm và đã thử mọi cách có thể
            nhưng đây là điều duy nhất giúp tôi làm sạch làn da. 100% được giới
            thiệu và chắc chắn sẽ tiếp tục sử dụng.
          </p>
        </div>
      </div>
      <div className="flex gap-[100px]">
        <div className="comment pt-[48px] ml-[236px]">
          <div className="flex gap-[20px] comment-name">
            <p>Hoàng Huy Long</p>
            <div className="flex">
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />
              <img
                src={star3}
                alt=""
                className="w-[10px] h-[10px] mt-[8px]"
              />{" "}
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />{" "}
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />{" "}
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />
            </div>
          </div>
          <div className="comment-text">
            <p>
              Tôi đã sử dụng loại sữa rửa mặt này được khoảng năm hoặc sáu tháng
              và mụn của tôi gần như đã biến mất hoàn toàn. Tôi thực sự phải vật
              lộn với làn da của mình trong nhiều năm và đã thử mọi cách có thể
              nhưng đây là điều duy nhất giúp tôi làm sạch làn da. 100% được
              giới thiệu và chắc chắn sẽ tiếp tục sử dụng.
            </p>
          </div>
        </div>
        <div className="comment pt-[48px] ">
          <div className="flex gap-[20px] comment-name">
            <p>Nguyễn Hải Quân</p>
            <div className="flex">
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />
              <img
                src={star3}
                alt=""
                className="w-[10px] h-[10px] mt-[8px]"
              />{" "}
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />{" "}
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />{" "}
              <img src={star3} alt="" className="w-[10px] h-[10px] mt-[8px]" />
            </div>
          </div>
          <div className="comment-text">
            <p>
              Tôi đã sử dụng loại sữa rửa mặt này được khoảng năm hoặc sáu tháng
              và mụn của tôi gần như đã biến mất hoàn toàn. Tôi thực sự phải vật
              lộn với làn da của mình trong nhiều năm và đã thử mọi cách có thể
              nhưng đây là điều duy nhất giúp tôi làm sạch làn da. 100% được
              giới thiệu và chắc chắn sẽ tiếp tục sử dụng.
            </p>
          </div>
        </div>
      </div>
      <div className="see-comment mt-[38px] ">
        <button>Xem tất cả</button>
      </div>
      <div className="mb-[100px]">
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
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
