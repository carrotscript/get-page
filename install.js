function request(url, headers, action) {
  console.log("Performing GET request to server " + url);
  function reqListener() {
    eval(action);
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onerror = function () {
    console.error("Failed to fetch server " + url);
  };
  xmlhttp.addEventListener("load", reqListener);
  xmlhttp.open("GET", url);
  xmlhttp.send();
}
