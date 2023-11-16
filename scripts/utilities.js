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

export function handleProgramTabs() {
  const fcsTab = document.getElementById("programs-body-tabs-fcs");
  const fswTab = document.getElementById("programs-body-tabs-fsw");
  const fsdTab = document.getElementById("programs-body-tabs-fsd");
  const uixTab = document.getElementById("programs-body-tabs-uix");

  const fcsDiv = document.getElementsByClassName(
    "programs-body-context-fsc"
  )[0];
  const fswDiv = document.getElementsByClassName(
    "programs-body-context-fsw"
  )[0];
  const fsdDiv = document.getElementsByClassName(
    "programs-body-context-fsd"
  )[0];
  const uixDiv = document.getElementsByClassName(
    "programs-body-context-uix"
  )[0];

  const removeAllActiveTabs = () => {
    fcsTab.classList.remove("fsc-active");
    fswTab.classList.remove("fsw-active");
    fsdTab.classList.remove("fsd-active");
    uixTab.classList.remove("uix-active");

    fcsDiv.style.display = "none";
    fcsDiv.style.opacity = "0";
    fswDiv.style.display = "none";
    fswDiv.style.opacity = "0";
    fsdDiv.style.display = "none";
    fsdDiv.style.opacity = "0";
    uixDiv.style.display = "none";
    uixDiv.style.opacity = "0";
  };

  fcsTab.addEventListener("click", () => {
    removeAllActiveTabs();

    fcsTab.classList.add("fsc-active");
    fcsDiv.style.display = "flex";
    fcsDiv.style.opacity = "1";
  });

  fswTab.addEventListener("click", () => {
    removeAllActiveTabs();

    fswTab.classList.add("fsw-active");
    fswDiv.style.display = "flex";
    fswDiv.style.opacity = "1";
  });

  fsdTab.addEventListener("click", () => {
    removeAllActiveTabs();

    fsdTab.classList.add("fsd-active");
    fsdDiv.style.display = "flex";
    fsdDiv.style.opacity = "1";
  });

  uixTab.addEventListener("click", () => {
    removeAllActiveTabs();

    uixTab.classList.add("uix-active");
    uixDiv.style.display = "flex";
    uixDiv.style.opacity = "1";
  });
}
