import { connection } from "../config/database";
import { DataReturn } from "../entities/DataReturn";
import { Subject } from "../entities/Subject";

const getProfessorsBySubject = async (subject: Subject) => {
    const sql = `
                SELECT professors.* FROM professors
                JOIN subjects_professors
                ON professors.id = subjects_professors.professor_id
                JOIN subjects
                ON subjects.id = subjects_professors.subject_id
                WHERE subjects.id = $1`;
    const returnData: DataReturn = {
        status: undefined,
        data: undefined
    };

    try {
        const subjects = await connection.query(sql, [subject.id]);
        returnData.data = subjects.rows;
        returnData.status = 200;
        return returnData;
    } catch (err) {
        console.log(err);
        returnData.status = 500;
        return returnData;
    }
};

export { getProfessorsBySubject };
