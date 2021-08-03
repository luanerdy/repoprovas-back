import { Express } from 'express';
import * as subjectsController from '../controllers/subjectsController';

const subjects = (app: Express) => {
    app.get('/subjects', subjectsController.getSubjects);
};

export { subjects };
