import {Request, Response} from 'express';
import * as subjectsService from '../services/subjectsService';

const getSubjects = async (req: Request, res: Response) => {
    const response = await subjectsService.getSubjects();
    if(response.status === 200) {
        return res.send(response.data);
    }

    res.sendStatus(500);
};

export { getSubjects };
