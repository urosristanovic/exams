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
  const user = getCookie('username');
  if (user) {
    location = '/13-login-page/index.html';
  }
}
function rememberedUser() {
  const rememberMe = getCookie('remember-me'); // 'remember-me=uros'
  if (rememberMe) {
    (async function () {
      const response = await fetch('../assets/json/users.json');
      const users = await response.json();

      const username = getCookieValue(rememberMe); // 'uros'
      const password = getPassword(users, username); // 'uros123'

      document.getElementById('username').value = `${username}`;
      document.getElementById('password').value = `${password}`;
    })();
  }
}

function handleUser(user) {
  if (!user) {
    document.getElementById('wrong-credentials').style.display = 'block';
  } else {
    const username = document.getElementById('username');
    const isCheckedRemember = document.getElementById('remember-me').checked;

    if (isCheckedRemember) {
      createCookie('remember-me', username.value);
    }
    createCookie('username', username.value);

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

function getPassword(users, username) {
  const user = users.find(user => user.username === username);
  return user.password;
}

function createCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}
function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
function getCookieValue(cookie) {
  return cookie.split('=')[1];
}
