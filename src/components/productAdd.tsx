import React from "react";
import { formType } from "../interface/product";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Tcate } from "../interface/cate";
import {
  FaHome,
  FaProductHunt,
  FaPlus,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
type Props = {
  title: string;
  onAdd: (data: formType) => void;
  categories: Tcate[];
};

const AddProductElement = ({ categories, onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formType>();
  const navigate = useNavigate();
  const onSubmit = async (formData: formType) => {
    await onAdd(formData);
    navigate("/productlist");
    reset();
  };

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex">
        <div className="bg-blue-900 text-white w-64 p-4 space-y-6">
          <div className="text-2xl font-bold">Dashboard</div>
          <nav>
            <a
              href="/admin"
              className="flex items-center  py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <FaHome className="mr-2" />
              Home
            </a>
            <a
              href="/productlist"
              className="flex items-center  py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <FaProductHunt className="mr-2" />
              Product
            </a>
            <a
              href="/products/add"
              className="flex items-center  py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <FaPlus className="mr-2" />
              Add Product
            </a>
            <a
              href="/categorylist"
              className="flex items-center  py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <FaList className="mr-2" />
              Category
            </a>
            <a
              href="/category/add"
              className="flex items-center  py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <FaPlus className="mr-2" />
              Add Category
            </a>
            <a
              href="/"
              className="flex items-center  py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <FaSignOutAlt className="mr-2" />
              Exit
            </a>
          </nav>
        </div>

        <form
          className="flex-1 p-6 bg-white shadow-md rounded-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Tên sản phẩm
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Tên sản phẩm không được để trống",
                minLength: {
                  value: 6,
                  message: "Tên sản phẩm phải có ít nhất 6 ký tự",
                },
              })}
              placeholder="Tên sản phẩm"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.name && (
              <p className="text-red-600 text-[12px]">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Ảnh sản phẩm
            </label>
            <input
              type="text"
              id="image"
              {...register("image", {
                required: "Ảnh sản phẩm không được để trống",
              })}
              placeholder="Ảnh sản phẩm"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.image && (
              <p className="text-red-600 text-[12px]">{errors.image.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Giá sản phẩm
            </label>
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "Giá sản phẩm không được để trống",
                min: { value: 1, message: "Giá sản phẩm phải lớn hơn 0" },
              })}
              placeholder="Giá sản phẩm"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.price && (
              <p className="text-red-600 text-[12px]">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Danh mục
            </label>
            <select
              id="category"
              {...register("category", {
                required: "Danh mục không được để trống",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" disabled selected>
                Chọn danh mục
              </option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-600 text-[12px]">
                {errors.category.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductElement;
