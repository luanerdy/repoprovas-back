import { connection } from "../config/database";
import { SubjectReturn, DataReturn } from "../entities/DataReturn";

const getSubjects = async () => {
    const sql = `SELECT * FROM subjects`;
    const returnData: DataReturn = {
        status: undefined,
        data: undefined
    };

    try {
        const subjects = await connection.query(sql, []);
        returnData.data = subjects.rows;
        returnData.status = 200;
        return returnData;
    } catch (err) {
        console.log(err);
        returnData.status = 500;
        return returnData;
    }
};

const getSubjectById = async (id: number) => {
    const sql = `
                SELECT * FROM subjects
                WHERE id = $1`;
    const returnData: SubjectReturn = {
        status: undefined,
        data: undefined
    };

    try {
        const subjects = await connection.query(sql, [id]);
        returnData.data = subjects.rows;
        returnData.status = 200;
        return returnData;
    } catch (err) {
        console.log(err);
        returnData.status = 500;
        return returnData;
    }
};

export { getSubjects, getSubjectById };
