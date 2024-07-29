import instance from "../config/axios";
import { formTypeC } from "../interface/cate";

export const GetAllCategory = async () => {
  try {
    const { data } = await instance.get("categories");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
export const GetCategoryByID = async (id: number | string) => {
  try {
    const { data } = await instance.get(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
export const AddCategories = async (categorydata: formTypeC) => {
  try {
    const { data } = await instance.post("categories", categorydata);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updateCategory = async (
  categorydata: formTypeC,
  id: string | number
) => {
  try {
    const { data } = await instance.put(`categories/${id}`, categorydata);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
export const DeleteCategory = async (id: string | number) => {
  try {
    const { data } = await instance.delete(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
