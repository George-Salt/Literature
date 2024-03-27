
function saveData(key, value) {
  localStorage.setItem(key, value);
};


function getData(key) {
  let data = localStorage.getItem(key);
  return data;
};