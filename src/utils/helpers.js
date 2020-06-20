export function generateId(arr) {
  let id = 0;
  id = Math.random()
    .toString(36)
    .substr(2, 6);
  if (arr.some(el => el.id === id)) generateId();
  else return id;
}

export function getIndexById(item, arr) {
  return arr.findIndex(el => el.id === item.id);
}
