export interface IProduct {
  id: number | string;
  name: string;
  image: string;
  price: number;
  category: string;
  categoryId: number;
  title: string;
  deslow: string;
  description: string;
}

export type formType = Pick<
  IProduct,
  "categoryId" | "name" | "price" | "image" | "category"
>;
