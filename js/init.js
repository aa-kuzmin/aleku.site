var initLang = "RU";

function onInitClickContinue(event) {

  this.removeEventListener("click", onInitClickContinue);

  elems = document.querySelectorAll("section");
  for (el of elems) el.style["content-visibility"] = "visible";
  
  elems = document.querySelectorAll("header");
  for (el of elems) el.style["content-visibility"] = "visible";
  
  elems = document.querySelectorAll("footer");
  for (el of elems) el.style["content-visibility"] = "visible";

  el = document.querySelector("section[class='init']");
  el.remove();

}

function onInitClickLang(event) {

  if (initLang == this.innerText) return;

  initLang = this.innerText;

  div = document.querySelector("div[class='init']");
  button = document.querySelector("button[class='init_continue']");
  buttonBackground = getComputedStyle(button)["background-color"];
  sectionBackground = getComputedStyle(document.querySelector("section[class='init']"))["background-color"];
  buttonColor = getComputedStyle(document.querySelector("button[class='init_continue']"))["color"];
  sectionColor = getComputedStyle(document.querySelector("section[class='init']"))["color"];

  elems = document.querySelectorAll("div[class='init_lang_switch']");
  for (el of elems) {
    el.style.setProperty("background-color", el["innerText"] == initLang ? buttonBackground : sectionBackground);
    el.style.setProperty("color", el["innerText"] == initLang ? buttonColor : sectionColor);
  };

  switch (initLang){
    case "RU":
    div.innerHTML = "<p style='text-align: center; padding: 5px;'>Добрый день!<p><p>Это сайт-резюме. Если вы не работодатель в поиске новых сотрудников, скорее всего ничего интересного вы здесь для себя не найдёте.<p>";
      button.innerText = "Продолжить";
      break;
    case "EN":
      div.innerHTML = "<p style='text-align: center; padding: 5px;'>Greetings!<p><p>It's just CV website. If your are not employer seeking new employee, there is no interesting content here.<p>";
      button.innerText = "Continue";
      break;
    case "FR":
      div.innerHTML = "<p style='text-align: center; padding: 5px;'>Madame, Monsieur!<p><p>Je ne mange pas six jours.<p>";
      button.innerText = "Procéder" + String.fromCodePoint(128540);
      break;
    default:
      div.innerHTML = "<p>Something wrong...<p>";
      button.innerText = "Ж8(";
      break;
  }
}

document.querySelector("section[class='init']").style["content-visibility"] = "visible";
div = document.querySelector("div[class='init']");
button = document.querySelector("button[class='init_continue']");
button.addEventListener("click", onInitClickContinue);
button.innerText = "Продолжить";
div.innerHTML = "<p style='text-align: center; padding: 5px;'>Добрый день!<p><p>Это сайт-резюме. Если вы не работодатель в поиске новых сотрудников, скорее всего ничего интересного вы здесь для себя не найдёте.<p>";
elems = document.querySelectorAll("div[class='init_lang_switch']");
for (el of elems) el.addEventListener("click", onInitClickLang);
elems[0].style.setProperty("background-color", getComputedStyle(document.querySelector("button[class='init_continue']"))["background-color"]);
elems[0].style.setProperty("color", getComputedStyle(document.querySelector("button[class='init_continue']"))["color"]);
