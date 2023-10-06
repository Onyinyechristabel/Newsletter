//accept email
//check if email is valid
//show thanks for subscribing else
//show error
const form = document.querySelector("form");
const input = document.querySelector(".email");
const button = document.querySelector(".btn");
const thanks = document.querySelector(".thanks");
const section = document.querySelector(".section");
const dbutton = document.querySelector(".dismiss__btn");

form.onsubmit = submit;
dbutton.onclick = submit;
function submit(e) {
  e.preventDefault();
  //add hide to classlist of section
  section.classList.toggle("hide");
  //remove hide from the classlist of thanks
  thanks.classList.toggle("hide");
  //remove hide from the claslist of section
}
