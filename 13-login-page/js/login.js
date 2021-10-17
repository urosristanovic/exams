const username = getCookie('username');

if (username) {
  location = '/13-login-page/index.html';
}

const loginForm = document.getElementById('form-login');
loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  const response = await fetch('../assets/json/users.json');
  const users = await response.json();

  const user = getUser(users, username.value, password.value);
  if (!user) {
    document.getElementById('wrong-credentials').style.display = 'block';
  } else {
    document.getElementById('wrong-credentials').style.display = 'none';

    const remember = document.getElementById('remember-me').checked;
    if (remember) {
      document.cookie = `remember-me=${username.value}; path=/`;
    }

    document.cookie = `username=${username.value}; path=/`;
    location = '/13-login-page/index.html';
  }

  username.value = '';
  password.value = '';
});

function getUser(users, username, password) {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  return user;
}
function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
