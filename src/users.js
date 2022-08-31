import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import data from './data.js';

const router = express.Router();
// let users = [];
let users = data;

router.get('/', (req, res) => {
	res.send(users);
});

router.post('/', (req, res) => {
	const user = req.body;
	const userId = uuidv4();
	const userWithId = { ...user, id: uuidv4 };
	res.send(`Berhasil input ${user.name}`);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const find = users.find((user) => user.id === id);
	res.send(find);
});

router.delete('/:id', (res, req) => {
	const { id } = req.params;
	users = users.filter((user) => user.id !== id);
	res.send(`${id} Deleted!`);
});

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { name, age, birthDate } = req.body;
	// eslint-disable-next-line no-shadow
	const user = users.find((user) => user.id === id);
	if (name) user.name = name;
	if (age) user.age = age;
	if (birthDate) user.birthDate = birthDate;
});

export default router;
