const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

function closeMenu() {
  menu.classList.remove("menu-opened");
  menuToggle.classList.remove("fa-xmark");
  menuToggle.classList.add("fa-bars");
}

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent this click from bubbling to document
  menu.classList.toggle("menu-opened");
  
  document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("menu-opened")) {
    closeMenu();
  }
});


  // Icon switch
  if (menuToggle.classList.contains("fa-bars")) {
    menuToggle.classList.remove("fa-bars");
    menuToggle.classList.add("fa-xmark");
  } else {
    menuToggle.classList.remove("fa-xmark");
    menuToggle.classList.add("fa-bars");
  }
});

// 🔥 Click anywhere outside to close the menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu = menu.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains("menu-opened")) {
    closeMenu();
  }
});


//form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  if (!form.checkValidity()) {
    form.reportValidity(); // Show native HTML5 validation
    return;
  }

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      document.getElementById("form-status").style.display = "block";
      form.reset();
    } else {
      alert("Something went wrong.");
    }
  });
});


