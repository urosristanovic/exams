import { getCookie, removeCookie } from '../modules/cookies.js';

const user = getCookie('logged-in-user');

if (!user) {
  location = '/13-login-page/pages/login.html';
}

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  removeCookie(user);
  location = `pages/login.html`;
});
