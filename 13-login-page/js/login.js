import { getCookie, getCookieValue, createCookie } from '../modules/cookies.js';

loggedInUser();
rememberedUser();

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
function rememberedUser() {
  // remembered-user={"id":3,"name":"Uros","username":"uros","email":"uros@mysite.com"}
  const rememberMe = getCookie('remembered-user');
  if (rememberMe) {
    (async function () {
      const response = await fetch('../assets/json/users.json');
      const users = await response.json();

      const user = JSON.parse(getCookieValue(rememberMe)); // {"id":3,"name":"Uros","username":"uros","email":"uros@mysite.com"}
      const password = getUserPassword(users, user.username); // uros123.
      document.getElementById('username').value = `${user.username}`;
      document.getElementById('password').value = `${password}`;
    })();
  }
}

function handleUser(user) {
  if (!user) {
    document.getElementById('wrong-credentials').style.display = 'block';
  } else {
    const isCheckedRemember = document.getElementById('remember-me').checked;
    const { password, ...userWithoutPassword } = user;

    if (isCheckedRemember) {
      createCookie('remembered-user', JSON.stringify(userWithoutPassword));
    }
    createCookie('logged-in-user', JSON.stringify(userWithoutPassword));

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
