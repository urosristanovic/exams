export function createCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}
export function removeCookie(name) {
  document.cookie = `${name}; path=/; expires=${yesterday().toUTCString()}`;
}
export function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
export function getCookieValue(cookie) {
  return cookie.split('=')[1];
}

function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
}
