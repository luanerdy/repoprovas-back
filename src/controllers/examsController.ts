import {Request, Response} from 'express';
import * as examsService from '../services/examsService';

const addExam = async (req: Request, res: Response) => {
    const response = await examsService.addExam(req.body);
    res.sendStatus(response.status);
};

export { addExam };
