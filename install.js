async function get(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


/*
get("https://jsonplaceholder.typicode.com/todos/1").then(data => {
  console.log(data);
});
*/
