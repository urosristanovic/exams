export function clearActiveButtons() {
  const listOfButtons = document.querySelectorAll('button');
  listOfButtons.forEach(btn => {
    if (btn.classList.contains('active')) btn.classList.remove('active');
  });
}
export function setActiveButton(id) {
  const active = document.getElementsByClassName(id);
  active[0].classList.add('active');
}
export function setQuery(filter, value) {
  const query = new URLSearchParams();
  query.set(`${filter}`, `${value}`);
  return query;
}
export function redirect(query) {
  location = query;
}
export function setCheckboxes(categories, separate) {
  const lowerCategories = categories.map(category => category.toLowerCase());

  lowerCategories.filter(food => {
    document.getElementById(food).checked = true;
  });
  if (separate) document.getElementById(`radio-${separate}`).checked = true;
}
