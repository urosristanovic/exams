import { getCookie, getCookieValue, removeCookie } from '../modules/cookies.js';

const userCookie = getCookie('logged-in-user');
if (!userCookie) {
  location = '/13-login-page/pages/login.html';
}

const user = JSON.parse(getCookieValue(userCookie));

const name = document.getElementById('user-name');
name.innerText = `${user.name}`;

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  removeCookie(userCookie);
  location = `pages/login.html`;
});
