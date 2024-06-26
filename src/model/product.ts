// NOTE: cloudinary 임시 타입
interface cloudinaryResource {
  [key: string]: number | string;
  url: string;
}

export interface ProductType {
  category: string;
  description?: string;
  detailImage: cloudinaryResource[];
  image: cloudinaryResource[];
  id: string;
  name: string;
  option: string[];
  price: number | "무료";
}
