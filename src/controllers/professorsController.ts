import {Request, Response} from 'express';
import * as professorsService from '../services/professorsService';
import * as subjectsService from '../services/subjectsService';

const getProfessorsBySubject = async (req: Request, res: Response) => {
    const subject = await subjectsService.getSubjectById(Number(req.params.subjectId));
    const response = await professorsService.getProfessorsBySubject(subject.data[0]);
    if(response.status === 200) {
        return res.send(response.data);
    }

    res.sendStatus(500);
};

export { getProfessorsBySubject };
