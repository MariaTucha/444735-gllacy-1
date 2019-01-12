  var link = document.querySelector(".modal-contact-form-button");
  var popup = document.querySelector(".modal-form");
  var close = document.querySelector(".modal-close");
  var login = popup.querySelector("[name=name]");
  var form = popup.querySelector(".contact-us-form");
  var email = popup.querySelector("[name=contact-us-email]");
  var name = popup.querySelector("[name=username]");
  var text = popup.querySelector("[name=name]");
  
  var isStorageSupport = true;
  var storageName = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storageName) {
      name.value = storageName;
      email.focus();
    } else {
      login.focus();
    }
    });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-errow");
    });

  form.addEventListener("submit", function (evt) {
    if (!email.value || !name.value || !text.value) {
    evt.preventDefault();
    popup.classList.add("modal-errow");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
  }
  }
});

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
      }
    }
  });
