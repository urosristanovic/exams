import { createCookie } from '../modules/cookies.js';
import { loggedInUser, getUser } from '../modules/user.js';

loggedInUser();

const loginForm = document.getElementById('form-login');
loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  const response = await fetch('../assets/json/users.json');
  const users = await response.json();

  const user = getUser(users, username.value, password.value);

  handleUser(user);

  username.value = '';
  password.value = '';
});

function handleUser(user) {
  if (!user) {
    document.getElementById('wrong-credentials').style.display = 'block';
  } else {
    const isCheckedRemember = document.getElementById('remember-me').checked;
    const { password, ...userWithoutPassword } = user;

    if (isCheckedRemember) {
      createCookie('logged-in-user', JSON.stringify(userWithoutPassword), 7);
    } else {
      createCookie('logged-in-user', JSON.stringify(userWithoutPassword));
    }

    document.getElementById('wrong-credentials').style.display = 'none';
    location = '/13-login-page/index.html';
  }
}
