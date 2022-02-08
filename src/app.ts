import express from 'express';
import cors from 'cors';
import { sumRequest } from './sum';

const app: express.Application = express();


const PORT: number = 8080;

//enable cors-policy
app.use(cors());

// enable json-parse middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/sum', (req: express.Request, res: express.Response): void => {
    sumRequest(req, res);
});


app.listen(PORT, () => {
    console.info("Server successfully started on port %s", PORT);
})