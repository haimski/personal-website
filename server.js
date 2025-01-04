import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import handler from './src/sendMail.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.post('/submit-form', handler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});