import { Exam } from "../entities/Exam";
import * as examsRepository from '../repositories/examsRepository';

const addExam = async (exam: Exam) => {
    const response = await examsRepository.addExam(exam);
    return response;
};

export { addExam };
