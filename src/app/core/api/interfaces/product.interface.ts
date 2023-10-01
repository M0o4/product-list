import { ICategory } from './category.interface';

export interface IProduct {
    id: number;
    price: number;
    discount: number;
    img: string;
    name: string;
    description: string;
    categories: ICategory[];
}
