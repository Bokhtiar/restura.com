import { ICategory } from "./category.type";
import { IIngredient } from "./ingredient.type";

export interface IProduct {
    _id?: string;
    name: string;
    price: number;
    ingredient?: IIngredient[] | null;
    category?: ICategory|null;
    description: string;
    image: string;
    cooking_time?: string;

}