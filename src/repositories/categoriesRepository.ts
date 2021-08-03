import { connection } from "../config/database";
import { DataReturn } from "../entities/DataReturn";

const getCategories = async () => {
    const sql = `SELECT * FROM categories`;
    const returnData: DataReturn = {
        status: undefined,
        data: undefined
    };

    try {
        const categories = await connection.query(sql, []);
        returnData.data = categories.rows;
        returnData.status = 200;
        return returnData;
    } catch (err) {
        console.log(err);
        returnData.status = 500;
        return returnData;
    }
};

export { getCategories };
