import request from "supertest"
import { app } from "../app";

describe("Multiply REST api", () => {

    test("multiply request is correct", async () => {
        const res = await request(app).
            post("/multiply").
            send({
                "payload": "[1,2,3,4]"
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            result: 24
        });
    });

});