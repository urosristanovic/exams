const user = getCookie('logged-in-user');

if (!user) {
  location = '/13-login-page/pages/login.html';
}

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  removeCookie(user);
  location = `pages/login.html`;
});

function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
}
function removeCookie(name) {
  document.cookie = `${name}; path=/; expires=${yesterday().toUTCString()}`;
}
