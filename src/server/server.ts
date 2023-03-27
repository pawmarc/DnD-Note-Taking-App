import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.get('/hellooo', (req, res) => res.sendStatus(200));

app.listen(`${PORT}`, () => console.log(`Server running on port ${PORT}...`))