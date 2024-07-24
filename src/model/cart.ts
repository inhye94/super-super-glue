import { ProductType } from "./product";

// NOTE: cloudinary 임시 타입
interface cloudinaryResource {
  [key: string]: number | string;
  url: string;
}

export interface ShortcutProductType {
  id: string;
  image: cloudinaryResource;
  name: string;
  price: number | "무료";
}

export interface CartItemType extends ShortcutProductType {
  option: string[];
  quantity: number;
}
