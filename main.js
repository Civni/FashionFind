localStorage.clear()
const mediaQuery480 = window.matchMedia("(max-width: 480px)");
const mediaQuery1024 = window.matchMedia("(max-width: 1024px)");

function HandleScreenChange() {
  const logged = JSON.parse(localStorage.getItem('logged'));
  const about_us = document.getElementById('us');
  const registerbtn = document.getElementById('register_btn');

  if (mediaQuery480.matches && logged) {
    console.log("Пользователь авторизован на экране до 480px");
    registerbtn.style.display = "none";
    about_us.style.marginLeft = "210px";
  } else if (mediaQuery480.matches && !logged) {
    console.log("Пользователь не авторизован на экране до 480px");
  } else if (mediaQuery1024.matches && logged){
    console.log("Пользователь авторизован на экране до 1024px");
    registerbtn.style.display = "none";
    about_us.style.marginLeft = "570px";
  } else if (mediaQuery1024.matches && !logged) {
    console.log("Пользователь не авторизован на экране до 1024px");
  } else {
    console.log("Пользователь не авторизован");
  }
}

HandleScreenChange();

mediaQuery480.addEventListener("change", HandleScreenChange);
mediaQuery1024.addEventListener("change", HandleScreenChange);


document.addEventListener('DOMContentLoaded', () => {
  const logged = JSON.parse(localStorage.getItem('logged'));

  if (logged) {
    console.log('Пользователь авторизован');
  } else {
    console.log('Пользователь не авторизован');
  }
});

let registerbtn2 = document.getElementById('register_btn');
registerbtn2.addEventListener('click', (event) => {
  window.location.href = "register.html";
})


const virtualTryOn = document.getElementById("virtual_try_on");
const listOfImages = [
    "assets.img/fashion_image.jpg",
    "assets.img/fashion_image5.jpg",
    "assets.img/fashion_image6.jpg"
];

document.getElementById("try").addEventListener("click", () => {
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
  });
});

let currentIndex = 0;

function updateImage() {
    virtualTryOn.src = listOfImages[currentIndex];
    currentIndex = (currentIndex + 1) % listOfImages.length;
}

setInterval(updateImage, 3000);

updateImage();


let submitbtn = document.getElementById("submit_button");

submitbtn.addEventListener('click', () => {
  let f_name = document.getElementById("first-name").value.trim();
  let l_name = document.getElementById("last-name").value.trim();
  let email = document.getElementById("email").value.trim();
  let company = document.getElementById("company").value.trim();
  let country = document.getElementById("country").value.trim();
  if (f_name === "" || l_name === "" || email === "" || company === "" || country === "") {
    document.getElementById('message').innerText = "Заполните все поля.";
    return;
  }else {
    alert("Заявка подана!");
    location.reload();
  }
});

const aboutLink = document.querySelector(".About");
const footer = document.getElementById("footer");

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth"
    });
});

const servicesLink = document.querySelector(".Collaborations");
const service_section = document.getElementById("service");

servicesLink.addEventListener("click", (event) => {
  event.preventDefault();
  service_section.scrollIntoView({
    behavior: "smooth"
  });
});

const appLink = document.querySelector(".App");
const app_section = document.getElementById("app_section");

appLink.addEventListener("click", (event) => {
  event.preventDefault();
  app_section.scrollIntoView({
    behavior: "smooth"
  });
});