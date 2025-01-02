import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import handler from './src/sendMail.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.post('/submit-form', handler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});