import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formTypeC } from "../interface/cate";
import {
  FaHome,
  FaProductHunt,
  FaPlus,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
type Props = {
  onAdd: (data: formTypeC) => void;
};

const AddCategory = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formTypeC>();
  const navigate = useNavigate();

  const onSubmit = async (formData: formTypeC) => {
    await onAdd(formData);
    navigate("/categorylist");
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
              Tên danh mục
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Tên không được để trống",
                minLength: {
                  value: 6,
                  message: "Tên danh mục phải có ít nhất 6 ký tự",
                },
              })}
              placeholder="Tên danh mục"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.name && (
              <p className="text-red-600 text-[12px]">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Ảnh
            </label>
            <input
              type="text"
              {...register("image", {
                required: "Ảnh không được để trống",
              })}
              placeholder="Ảnh"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.image && (
              <p className="text-red-600 text-[12px]">{errors.image.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Số lượng
            </label>
            <input
              type="text"
              id="name"
              {...register("quantity", {
                required: "Số lượng không được để trống",
              })}
              placeholder="Số lượng"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.quantity && (
              <p className="text-red-600 text-[12px]">
                {errors.quantity.message}
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

export default AddCategory;
