const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementsByName("name")[0].value;
  let surname = document.getElementsByName("surname")[0].value;

  if (username.value == null && surname.value == null) {
    console.log("success");
    // document.location.href = "";
  }
});
