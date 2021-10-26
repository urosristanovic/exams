import { redirectIfLoggedIn } from '../modules/user.js';

redirectIfLoggedIn('/13-login-page/index.html');

const formForgotPass = document.getElementById('form-forgot-password');
formForgotPass.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('confirmation').style.display = 'flex';
  document.getElementById('form-forgot-password').style.display = 'none';
});
