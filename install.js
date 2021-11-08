async function get(url) {
  const response = await fetch("https://proxy-for-cors.herokuapp.com/https://python-html-json.herokuapp.com/get/?link=" + url);
  const data = await response.json();
  return data.result;
}

function json(data) {
  return JSON.parse(data);
}