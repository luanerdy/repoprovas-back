import { Express } from "express";
import { categories } from "./categories";
import { exams } from "./exams";
import { professors } from "./professors";
import { subjects } from "./subjects";

const routes = (app: Express) => {
    exams(app);
    categories(app);
    subjects(app);
    professors(app);
};

export { routes };
