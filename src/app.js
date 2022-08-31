import bodyParser from 'body-parser';
import express from 'express';
import users from './users.js';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => {
	res.send('Ok');
});

app.listen(PORT, () => {
	return console.log(`Running on port: http://localhost:${PORT}`);
});
