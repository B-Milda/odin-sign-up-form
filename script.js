let fname = document.querySelector("#firstname");
let lname = document.querySelector("#lastname");
let phone = document.querySelector("#phone");
let psw = document.querySelector("#psw");
let pswrepeat = document.querySelector("#pswrepeat");

fname.addEventListener("focusout", (event) => {
  if (!fname.checkValidity()) {
    fname.style.border = "1px solid red";
  }
});

fname.addEventListener("focusin", (event) => {
  fname.style.border = "1px solid #E5E7EB";
});

lname.addEventListener("focusout", (event) => {
  if (!lname.checkValidity()) {
    lname.style.border = "1px solid red";
  }
});

lname.addEventListener("focusin", (event) => {
  lname.style.border = "1px solid #E5E7EB";
});

phone.addEventListener("focusout", (event) => {
  if (!phone.checkValidity()) {
    phone.style.border = "1px solid red";
  }
});

phone.addEventListener("focusin", (event) => {
  phone.style.border = "1px solid #E5E7EB";
});

psw.addEventListener("focusout", (event) => {
  if (!psw.checkValidity()) {
    psw.style.border = "1px solid red";
  }
});

psw.addEventListener("focusin", (event) => {
  psw.style.border = "1px solid #E5E7EB";
});

pswrepeat.addEventListener("focusout", (event) => {
  if (pswrepeat.value != psw.value) {
    pswrepeat.style.border = "1px solid red";
  }
});

pswrepeat.addEventListener("focusin", (event) => {
  pswrepeat.style.border = "1px solid #E5E7EB";
});
