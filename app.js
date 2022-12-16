const input = document.querySelector("#inputvalue");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/valspeak.json";

function translateUrl(txt) {
  return url + "?" + "text=" + txt;
}

function toTranslate() {
  var textInput = input.value;

  fetch(translateUrl(textInput))
    .then(res => res.json())
    .then(json => {
        output.innerText = json.contents.translated
    })
    .catch(catcherror);
}

function catcherror(error){
    console.log("error occured", error);
    alert("something went wrong , please Try again after some time")
}

button.addEventListener("click", toTranslate);