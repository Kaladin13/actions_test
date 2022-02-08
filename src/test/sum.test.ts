import request from "supertest"
import { app } from "../app";

describe("Sum REST api", () => {

    test("sum request is correct", async () => {
        const res = await request(app).
            post("/sum").
            send({
                "payload": "[1,2,3,4]"
            });
        console.log(res);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            result: 10
        });
    });

});