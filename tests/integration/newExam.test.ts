import supertest from "supertest";
import app from "../../src/app";
import { connection } from "../../src/config/database";

afterAll(async () => {
	connection.end();
});

beforeEach(async () => {
	await connection.query('TRUNCATE exams RESTART IDENTITY');
});

describe("POST /exams", () => {
  it("should answer with status 201 for valid params", async () => {
    const body = {
      name: 'teste',
      category: 1,
      subject: 2,
      professor: 1,
      url: 'http://www.s3.com/teste.pdf'
    };

    const response = await supertest(app).post("/exams").send(body);
    expect(response.status).toBe(201);
  });
});
