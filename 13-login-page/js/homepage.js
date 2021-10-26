import { getCookie, getCookieValue, removeCookie } from '../modules/cookies.js';
import { redirect } from '../modules/redirect.js';
import { redirectIfNotLoggedIn } from '../modules/user.js';

redirectIfNotLoggedIn('/13-login-page/pages/login.html');

const userCookie = getCookie('logged-in-user');
const user = JSON.parse(getCookieValue(userCookie));

const name = document.getElementById('user-name');
name.innerText = `${user.name}`;

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  removeCookie(userCookie);
  redirect(`pages/login.html`);
});
