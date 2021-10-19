const username = getCookie('logged-in-user');

if (username) {
  location = '/13-login-page/index.html';
}

const formForgotPass = document.getElementById('form-forgot-password');
formForgotPass.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('confirmation').style.display = 'flex';
  document.getElementById('form-forgot-password').style.display = 'none';
});

function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
