import {Request, Response} from 'express';
import * as categoriesService from '../services/categoriesService';

const getCategories = async (req: Request, res: Response) => {
    const response = await categoriesService.getCategories();
    if(response.status === 200) {
        return res.send(response.data);
    }

    res.sendStatus(500);
};

export { getCategories };
