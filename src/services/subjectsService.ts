import * as subjectsRepository from '../repositories/subjectsRepository';

const getSubjects = async () => {
    const response = await subjectsRepository.getSubjects();
    return response;
};

const getSubjectById = async (id: number) => {
    const response = await subjectsRepository.getSubjectById(id);
    return response;
};


export { getSubjects, getSubjectById };
