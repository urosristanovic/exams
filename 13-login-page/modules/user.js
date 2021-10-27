import { getCookie } from './cookies.js';
import { redirect } from './redirect.js';

export function redirectIfLoggedIn(path) {
  const user = getCookie('logged-in-user');
  if (user) {
    redirect(path);
  }
}
export function redirectIfNotLoggedIn(path) {
  const user = getCookie('logged-in-user');
  if (!user) {
    redirect(path);
  }
}
export function getUser(users, username, password) {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  return user;
}
export async function fetchUsers() {
  const response = await fetch('../assets/json/users.json');
  return response.json();
}
export function saveUser(user, isCheckedRemember) {
  const { password, ...userWithoutPassword } = user;
  const stringifiedUser = JSON.stringify(userWithoutPassword);

  if (isCheckedRemember) {
    createCookie('logged-in-user', stringifiedUser, 7);
  } else {
    createCookie('logged-in-user', stringifiedUser);
  }
}
