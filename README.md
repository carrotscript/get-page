## Installation

This project is only for GET requests. To use this, just import the module:

```
<script src="https://carrotscript.github.io/get-page/install.js"></script>
```

## Usage

To use it, you use the function `get` and add a `.then` statement to get the promise. For example:

```
get("https://google.com").then(data => {
  console.log(data);
})
```
 If you are accessing JSON and want to parse it, you use the `json` function:
 
```
get("https://jsonplaceholder.typicode.com/todos/1").then(data => {
  console.log(data.id); // getting undefined
  data = json(data);
  console.log(data.id); // getting "1"
})
```
