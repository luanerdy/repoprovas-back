import { Express } from 'express';
import * as professorsController from '../controllers/professorsController';

const professors = (app: Express) => {
    app.get('/professors/:subjectId', professorsController.getProfessorsBySubject);
};

export { professors };
