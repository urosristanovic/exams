import { setCookie } from '../modules/cookies.js';
import { redirectIfLoggedIn, getUser, fetchUsers } from '../modules/user.js';
import { redirect } from '../modules/redirect.js';

redirectIfLoggedIn('/13-login-page/index.html');

const loginForm = document.getElementById('form-login');
loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  const users = await fetchUsers();
  const user = getUser(users, username.value, password.value);

  handleUser(user);

  username.value = '';
  password.value = '';
});

function handleUser(user) {
  const wrongCredentials = document.getElementById('wrong-credentials');
  if (!user) {
    wrongCredentials.style.display = 'block';
  } else {
    const isCheckedRemember = document.getElementById('remember-me').checked;
    wrongCredentials.style.display = 'none';

    setCookie(user, isCheckedRemember);
    redirect('/13-login-page/index.html');
  }
}
