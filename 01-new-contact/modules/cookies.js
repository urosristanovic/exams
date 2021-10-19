export function updateCookie(name, counter) {
  document.cookie = `${name}=${counter}`;
}

export function getCookie(searchCookie) {
  const cookies = document.cookie;
  const array = cookies.split(';');

  return array.find(cookie => cookie.trim().split('=')[0] === searchCookie);
}

export function getCookieValue(cookie) {
  return cookie.split('=')[1];
}

export function setCookieValue(nameCookie) {
  const cookie = getCookie(nameCookie);
  if (cookie) {
    return getCookieValue(cookie);
  }
}
