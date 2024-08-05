export interface Tcate {
  id: number;
  name: string;
  image: string;
  quantity: string;
}
export type formTypeC = Pick<Tcate, "id" | "name" | "image" | "quantity">;
