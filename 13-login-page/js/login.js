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
