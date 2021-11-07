async function get(url) {
  const response = await fetch("https://proxy-for-cors.herokuapp.com/https://python-html-json.herokuapp.com/get/?link=" + url);
  const data = await response.json();
  return data.result;
}

function json(data) {
  return JSON.parse(data);
}

function parseXML(xml, array) {
  var parser, xmlDoc;
  var text = xml;

  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text,"text/xml");

  document.getElementById("demo").innerHTML =
  xmlDoc.getElementsByTagName("title")[array].childNodes[0].nodeValue;
}
