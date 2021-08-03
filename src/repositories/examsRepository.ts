import { connection } from "../config/database";
import { DataReturn } from "../entities/DataReturn";
import { Exam } from "../entities/Exam";

const addExam = async (exam: Exam) => {
    const sql = `
                INSERT INTO exams
                (name, category_id, subject_id, professor_id, url)
                VALUES ($1, $2, $3, $4, $5)`;
    const {name, category, subject, professor, url} = exam;
    const returnData: DataReturn = {
        status: undefined,
        data: undefined
    };

    try {
        await connection.query(sql, [name, category, subject, professor, url]);
        returnData.status = 201;
        return returnData;
    } catch (err) {
        console.log(err);
        returnData.status = 500;
        return returnData;
    }
};

export { addExam };
