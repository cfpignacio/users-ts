import { getUserById, getUsers } from './users/userService';

const listadoUsuarios = await getUsers();

//console.log(listadoUsuarios.map((u) => u.addres.geo.lat));

const user = await getUserById(2);

console.log(user);
