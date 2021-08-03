import { Subject } from "./Subject";

interface DataReturn {
    status: undefined | number;
    data: undefined | Array<Object>;
};

interface SubjectReturn {
    status: undefined | number;
    data: undefined | Array<Subject>;
};

export { DataReturn, SubjectReturn };
