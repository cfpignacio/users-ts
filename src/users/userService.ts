import axios, { AxiosResponse } from 'axios';
import { User } from './interfaces/user.interface';

export async function getUsers() {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);

	const users: User[] = response.data;

	return users;
}

export async function getUserById(id: number) {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);

	const user: User = response.data;

	return user;
}
