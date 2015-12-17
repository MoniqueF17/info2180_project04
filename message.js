function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("message").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "message.html", true);
  xhttp.send();
}

