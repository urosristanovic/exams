import { getCookie } from './cookies.js';

export function loggedInUser() {
  const user = getCookie('logged-in-user');
  if (user) {
    location = '/13-login-page/index.html';
  }
}
export function getUser(users, username, password) {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  return user;
}
