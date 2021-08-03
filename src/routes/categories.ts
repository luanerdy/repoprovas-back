import { Express } from 'express';
import * as categoriesController from '../controllers/categoriesController';

const categories = (app: Express) => {
    app.get('/categories', categoriesController.getCategories);
};

export { categories };
