let checkin = 0;
function language(lan) {
  jezik = lan;

  localStorage["jezik"] = jezik;
  reload();
}

function reload() {
  let jezik = localStorage["jezik"];
  document.querySelector("body").style.overflow = "hidden";

  if (jezik != null) {
    const lan_form = document.querySelector("#language_form");
    lan_form.style.opacity = "0";
    document.querySelector("body").style.overflow = "auto";
    page(jezik);
  }
}

function page(jezik) {
  let url = document.location.href;
  let check = url.match(jezik);

  if (url == "https://apartmentsguscic.com/") {
    check = "index";
  }

  if (!check) {
    check = "nana";
  }

  switch (jezik) {
    case check[0]:
      break;

    case "index":
      document.location.href = "index.html";
      break;
    case "Deutsch":
      document.location.href = "Deutsch.html";
      break;
    case "Italiano":
      document.location.href = "Italiano.html";
      break;
    case "Hrvatski":
      document.location.href = "Hrvatski.html";
      break;

    default:
      break;
  }
}

// za micanje upozorenja o kolacicima
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = "none";
}
