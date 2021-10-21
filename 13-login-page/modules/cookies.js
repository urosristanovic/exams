export function removeCookie(name) {
  document.cookie = `${name}; path=/; expires=${yesterday().toUTCString()}`;
}
export function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}
export function getCookieValue(cookie) {
  if (cookie) {
    return cookie.split('=')[1];
  }
  return false;
}

function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
}

export function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  // document.cookie = name + '=' + (value || '') + expires + '; path=/';
  document.cookie = `${name}=${value}${expires}; path=/`;
}
