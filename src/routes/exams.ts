import { Express } from 'express';
import * as examsController from '../controllers/examsController';

const exams = (app: Express) => {
    app.post('/exams', examsController.addExam);
};

export { exams };
