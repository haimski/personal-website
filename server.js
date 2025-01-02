import express from 'express';
import bodyParser from 'body-parser';
import sendEmail from './src/sendMail.js';

const app = express();
const port = 3001; // You can choose any port

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    sendEmail(formData);
    res.send('Form details sent to your email.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});