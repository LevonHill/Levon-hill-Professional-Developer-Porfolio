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
