import { getCookie, getCookieValue, setCookie } from '../modules/cookies.js';

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

function loggedInUser() {
  const user = getCookie('logged-in-user');
  if (user) {
    location = '/13-login-page/index.html';
  }
}
function handleUser(user) {
  if (!user) {
    document.getElementById('wrong-credentials').style.display = 'block';
  } else {
    const isCheckedRemember = document.getElementById('remember-me').checked;
    const { password, ...userWithoutPassword } = user;

    if (isCheckedRemember) {
      setCookie('logged-in-user', JSON.stringify(userWithoutPassword), 7);
    } else {
      setCookie('logged-in-user', JSON.stringify(userWithoutPassword));
    }

    document.getElementById('wrong-credentials').style.display = 'none';
    location = '/13-login-page/index.html';
  }
}

function getUser(users, username, password) {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  return user;
}

function getUserPassword(users, username) {
  const user = users.find(user => user.username === username);
  return user.password;
}
