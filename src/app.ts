import express from 'express';
import cors from 'cors';
import { sumRequest } from './operations/sum';
import { multiply } from './operations/multiplying';

export const app: express.Application = express();


//enable cors-policy
app.use(cors());

// enable json-parse middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/sum', (req: express.Request, res: express.Response): void => {
    sumRequest(req, res);
});

app.post('/multiply', (req: express.Request, res: express.Response): void => {
    multiply(req, res);
});
