import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "./register";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Props = {};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const navigate = useNavigate();
  const onSubmit = async (registerdata: IUser) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        registerdata
      );
      alert("Đăng nhập thành công");
      navigate("/admin");

      sessionStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  };
  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-transparent opacity-60"></div>
        <div className="relative bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-10 max-w-lg mx-auto border border-white/30">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-white">
            Đăng nhập tài khoản
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@(\S+\.)+\S{2,6}$/,
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
              />
              {errors.email && (
                <span className="text-red-600 text-sm mt-2 block">
                  Sai định dạng email
                </span>
              )}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="Mật khẩu"
                {...register("password", { required: true, minLength: 6 })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
              />
              {errors.password && (
                <span className="text-red-600 text-sm mt-2 block">
                  Mật khẩu lớn hơn 6 kí tự
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
