import React from "react";
import { Link } from "react-router-dom";
import { Tcate } from "../interface/cate";
import {
  FaHome,
  FaProductHunt,
  FaPlus,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
type Props = {
  categories: Tcate[];
  onDelete: (id: number | string) => void;
};

const CategoryList = ({ categories, onDelete }: Props) => {
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
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Category List</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category Name
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {category.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <Link to={`/categories/edit/${category.id}`}>Sửa</Link>
                      </button>

                      <button
                        onClick={() => {
                          if (category.id !== undefined) {
                            onDelete(category.id);
                          }
                        }}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
