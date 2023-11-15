const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const overlayNav = document.getElementsByClassName("overlay-header")[0];

export function showNav() {
  openNav.addEventListener("click", () => {
    overlayNav.classList.add("overlay-visible");
  });
}

export function hideNav() {
  closeNav.addEventListener("click", () => {
    overlayNav.classList.remove("overlay-visible");
  });
}
