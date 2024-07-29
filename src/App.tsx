import { useEffect, useState } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";

import "./App.css";
import Client from "./layout/client";
import Home from "./components/home";
import ProductPage from "./components/productPage";
import ProductDetail from "./components/productDetail";
import Dashboard from "./layout/dashboard";
import Admin from "./layout/dashboard/admin";
import ProductList from "./components/productList";
import { AddProduct, GetAllProduct, updateProduct } from "./service/product";
import { IProduct } from "./interface/product";
import { useForm } from "react-hook-form";
import axios from "axios";
import EditProduct from "./components/productEdit";
import AddProductElement from "./components/productAdd";
import AddCategory from "./components/categoryAdd";
import { Tcate } from "./interface/cate";
import CategoryList from "./components/categoryList";
import { AddCategories, GetAllCategory, updateCategory } from "./service/cate";
import EditCategory from "./components/categoryEdit";
type formType = Pick<IProduct, "name" | "price" | "image" | "category">;
type formTypeC = Pick<Tcate, "name">;

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<Tcate[]>([]);
  const { register, handleSubmit, reset } = useForm<formType>();
  const [flag, setFlag] = useState<string | number>(0);
  const [click, setClick] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const data = await GetAllProduct();
      setProducts(data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const data = await GetAllCategory();
      setCategories(data);
    })();
  }, []);
  const onDelete = async (id: number | string) => {
    try {
      if (confirm("Are you sure you want to delete")) {
        const { data } = await axios.delete(
          `http://localhost:3000/products/${id}`
        );
        alert("Xóa thành công");
        setProducts(products.filter((product: IProduct) => product.id !== id));
      }
    } catch (error) {}
  };
  //deleteCate
  const onDeleteCate = async (id: number | string) => {
    try {
      if (confirm("Are you sure you want to delete")) {
        const { data } = await axios.delete(
          `http://localhost:3000/categories/${id}`
        );
        alert("Xóa thành công");
        setCategories(
          categories.filter((category: Tcate) => category.id !== id)
        );
      }
    } catch (error) {}
  };
  const onSubmitUpdate = async (formData: formType, id: string | number) => {
    try {
      const data = await updateProduct(formData, id);
      const newproducts = products.map((product) =>
        product.id == id ? data : product
      );
      setProducts(newproducts);
      alert("Cập nhật thành công");
    } catch (error) {}
  };
  //categoryEdit
  const onSubmitUpdateCate = async (
    formData: formTypeC,
    id: string | number
  ) => {
    try {
      const data = await updateCategory(formData, id);
      const newcategories = categories.map((category) =>
        category.id == id ? data : category
      );
      setCategories(newcategories);
      alert("Cập nhật thành công");
    } catch (error) {}
  };
  const onEdit = (id: number | string) => {
    setFlag(id);
    const product = products.filter((p: IProduct) => p.id === id);
    reset({
      name: product[0].name,
      image: product[0].image,
      price: product[0].price,
      category: product[0].category,
    });
  };
  //onEditCate
  const onEditCate = (id: number | string) => {
    setFlag(id);
    const category = categories.filter((p: Tcate) => p.id === id);
    reset({
      name: category[0].name,
    });
  };
  const onAdd = async (dataproduct: formType) => {
    try {
      const data = await AddProduct(dataproduct);
      setProducts([...products, data]);
      alert("Thêm mới thành công");
    } catch (error) {
      console.log(error);
    }
  };
  //onAddCate
  const onAddCate = async (datacategory: formTypeC) => {
    try {
      const data = await AddCategories(datacategory);
      setCategories([...categories, data]);
      alert("Thêm mới thành công");
    } catch (error) {
      console.log(error);
    }
  };
  const routes = useRoutes([
    {
      path: "",
      Component: Client,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/product",
          element: <ProductPage onDelete={onDelete} products={products} />,
        },
        { path: "/productdetail", element: <ProductDetail /> },
      ],
    },
    {
      path: "",

      Component: Dashboard,

      children: [
        { path: "admin", element: <Admin /> },
        {
          path: "productlist",
          element: <ProductList onDelete={onDelete} products={products} />,
        },
        {
          path: "products/add",
          element: (
            <AddProductElement
              title="Thêm mới sản phẩm"
              onAdd={onAdd}
              categories={categories}
            />
          ),
        },
        {
          path: "products/edit/:id",
          element: (
            <EditProduct onUpdate={onSubmitUpdate} categories={categories} />
          ),
        },
        {
          path: "category/add",
          element: <AddCategory onAdd={onAddCate} />,
        },
        {
          path: "categories/edit/:id",
          element: <EditCategory onUpdate={onSubmitUpdateCate} />,
        },
        {
          path: "categorylist",
          element: (
            <CategoryList onDelete={onDeleteCate} categories={categories} />
          ),
        },
      ],
    },
  ]);
  return routes;
}
export default App;
