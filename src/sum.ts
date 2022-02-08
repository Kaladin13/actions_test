import express from 'express';

export const sumRequest = async(req: express.Request, res: express.Response) => {
    let values: any[];
    try {
        values = JSON.parse(req.body.payload);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send("Invalid request");
    }
    console.log(values);
    const obj = {result: values.reduce((a: number, b: number) => a-b, 0)}
    res.status(200).json(obj);
};