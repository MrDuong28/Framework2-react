import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    const { keywords } = data;

    navigate(`/search?keyword=${keywords}`);
  };
  return (
    <div className="header">
      <div className="header1 flex">
        <form
          className="relative w-[525px] pt-[42px]  ml-[250px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("keywords")}
            className="w-full h-[42.962px] rounded-[3px] bg-white pl-4 pr-16 border border-gray-300 focus:outline-none"
            type="text"
            placeholder="Tìm kiếm theo sản phẩm, nhãn hiệu và hơn thế nữa"
          />
          <button
            className=" float-right mt-[20px] absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center rounded-[3px] bg-primary px-5 py-1 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            type="button"
            id="button-addon4"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </button>
        </form>
        <div className="dropdown1 pt-[35px] ml-[100px] mr-[120px]">
          <button className="dropbtn flex">
            En
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-[4.38px] mt-[46px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M23.0153 23.8549C22.4835 22.3665 21.3117 21.0512 19.6817 20.1132C18.0517 19.1751 16.0545 18.6666 14 18.6666C11.9454 18.6666 9.9482 19.1751 8.31819 20.1132C6.68817 21.0512 5.51642 22.3665 4.98465 23.8549"
              stroke="white"
              stroke-width="3.09872"
              stroke-linecap="round"
            />
            <circle
              cx="14"
              cy="9.33329"
              r="4.66667"
              stroke="white"
              stroke-width="2.33333"
              stroke-linecap="round"
            />
          </svg>
          <p className="text-white mt-[2px] ">
            <a href="/register">Tài khoản</a>
          </p>
        </div>
        <div
          className="flex gap-[10.64px] mt-[47px] ml-[30.62px]
      "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M8.45459 12.6819L8.45459 8.45461C8.45459 6.11994 10.3472 4.22732 12.6819 4.22732V4.22732C15.0165 4.22732 16.9092 6.11994 16.9092 8.4546L16.9092 12.6819"
              stroke="white"
              stroke-width="2.19112"
              stroke-linecap="round"
            />
            <path
              d="M3.89237 13.5297C4.05131 11.6224 4.13078 10.6688 4.75972 10.0901C5.38867 9.51135 6.3456 9.51135 8.25947 9.51135H17.1041C19.018 9.51135 19.9749 9.51135 20.6039 10.0901C21.2328 10.6688 21.3123 11.6224 21.4712 13.5297L22.0024 19.904C22.0917 20.9752 22.1363 21.5107 21.8223 21.852C21.5083 22.1932 20.9709 22.1932 19.8961 22.1932H5.46751C4.39267 22.1932 3.85525 22.1932 3.54127 21.852C3.22728 21.5107 3.27191 20.9752 3.36117 19.904L3.89237 13.5297Z"
              stroke="white"
              stroke-width="2.19112"
            />
          </svg>
          <p className="text-white pt-[1px]">Giỏ hàng</p>
        </div>
      </div>
      <div>
        <p className="bg-[#E3E3E3] w-[1150px] h-[0.852px] ml-[110px]  mt-[10.32px] "></p>
      </div>
      <div className="ml-[100px]">
        <div className="dropdown ">
          <button className="dropbtn flex ">
            <NavLink to={"/"}>Thắp sáng</NavLink>
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown ">
          <button className="dropbtn flex">
            Hộp trồng trọt
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="dropdown-content">
            <a href="/product">
              <li>Bộ hoàn chỉnh</li>
            </a>
          </div>
        </div>
        <div className="dropdown ">
          <button className="dropbtn flex">
            Phân bón
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown  ">
          <button className="dropbtn flex">
            Đất & chất nền
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown ">
          <button className="dropbtn flex">
            Chậu & Hộp đựng
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="dropdown-content">
            <a href="#link1">
              <li> Chậu vuông</li>{" "}
            </a>
            <a href="#link2">
              <li> Chậu tròn</li>{" "}
            </a>
            <a href="#link3">
              <li>Đế lót ly</li>{" "}
            </a>
            <a href="#link3">
              <li>Chậu trồng cây</li>{" "}
            </a>
          </div>
        </div>
        <div className="dropdown ">
          <button className="dropbtn flex">
            Thủy lợi
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown ">
          <button className="dropbtn flex">
            Cây & Làm vườn
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown ">
          <button className="dropbtn flex">
            Thông gió & điều hòa không khí
            <svg
              className="w-2.5 h-2.5 ms-3 mt-[8px] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
