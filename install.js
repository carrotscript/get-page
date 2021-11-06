async function get(url) {
  const response = await fetch("https://htmltojson.pythonanywhere.com/get/?link=" + url);
  const data = await response.json();
  return data.result;
}
