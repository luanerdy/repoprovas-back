import { Subject } from "../entities/Subject";
import * as professorsRepository from '../repositories/professorsRepository';

const getProfessorsBySubject = async (subject: Subject) => {
    const response = await professorsRepository.getProfessorsBySubject(subject);
    return response;
};

export { getProfessorsBySubject };
