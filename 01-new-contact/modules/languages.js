import { getCookieValue, getCookie } from './cookies.js';

export function getCurrentLanguage() {
  const cookieLanguage = getCookie('language');
  if (cookieLanguage) {
    return getCookieValue(cookieLanguage);
  }
  return navigator.language;
}

export async function fetchLanguages() {
  const response = await fetch('languages/languages.json');
  return response.json();
}
