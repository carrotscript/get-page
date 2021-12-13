async function get(url) {
  const response = await fetch("https://proxy-for-cors.herokuapp.com/https://python-html-json.herokuapp.com/get/?link=" + url); // Change the proxies if you want to
  const data = await response.json();
  return data.result;
}

function json(data) {
  return JSON.parse(data);
}

function xml(xml_data, xml_tag, array) {
  var parser, xmlDoc;
  var text = xml_data;
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text,"text/xml");
  return xmlDoc.getElementsByTagName(xml_tag)[array].childNodes[0].nodeValue;
}
