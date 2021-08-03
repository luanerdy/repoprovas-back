import { Category } from "../entities/Category";
import * as categoriesRepository from '../repositories/categoriesRepository';

const getCategories = async () => {
    const response = await categoriesRepository.getCategories();
    return response;
};

export { getCategories };
