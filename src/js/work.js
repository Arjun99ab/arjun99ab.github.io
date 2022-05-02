
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function elementsOutro() {
  document.getElementById('btnWork').style.animation = "navBarBtnsOutro 0.5s ease";
  document.getElementById('btnAbout').style.animation = "navBarBtnsOutro 0.5s ease";
  document.getElementById('btnContact').style.animation = "navBarBtnsOutro 0.5s ease";
  document.getElementById('homePfp').style.animation = "homePfpOutro 0.5s ease";
  document.getElementById('github').style.animation = "githubLogoOutro 0.5s ease";
  document.getElementById('textHi').style.animation = "hiOutro 0.5s ease";
}

function githubClick() {
  window.open("https://github.com/Arjun99ab", "_blank");
}

function homeClick() {
  elementsOutro();

  sleep(600).then(() => {
    $("body").load("index.html");
    window.history.pushState({}, "", "index.html");
    document.title = "Arjun Samavedam";
  });
}

function workClick() {
  elementsOutro();

  sleep(600).then(() => {
    $("body").load("work.html");
    window.history.pushState({}, "", "work.html");
    document.title = "Work";
  });
}

function aboutClick() {
  elementsOutro();

  sleep(600).then(() => {
    $("body").load("about.html");
    window.history.pushState({}, "", "about.html");
    document.title = "About Me";
  });
}

function contactClick() {
  elementsOutro();

  sleep(600).then(() => {
    $("body").load("contact.html");
    window.history.pushState({}, "", "contact.html");
    document.title = "Contact Me";
  });
}
  