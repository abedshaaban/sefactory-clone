import { showNav, hideNav } from "./utilities.js";

const overlayNav = document.getElementsByClassName("overlay-header")[0];
const navLinks = document.getElementsByClassName("overlay-header-body-links-a");

// hero tying animation
const heroAnimationData = [
  {
    id: 0,
    title: "SOFTWARE ENGINEER?",
    textColor: "#363738",
    backgroundColor: "rgba(40, 238, 167, 0.9)",
  },
  {
    id: 1,
    title: "DATA ENGINEER?",
    textColor: "#fcfcfd",
    backgroundColor: "rgba(152, 100, 218, 0.9)",
  },
  {
    id: 2,
    title: "UI/UX DESIGNER?",
    textColor: "#fcfcfd",
    backgroundColor: "rgba(251, 80, 142, 0.9)",
  },
];

const leftHeroSection = document.getElementById("left-hero-animation");
const leftHeroColor = document.getElementsByClassName("color-overlay")[0];
const typingCursor = document.getElementById("typing-cursor");

const heroText = document.getElementById("left-hero-animation-text").innerText;

const removeTitleText = async () => {
  let i = document.getElementById("left-hero-animation-text").innerText.length;

  for (i; i > -2; i--) {
    const word =
      heroText.length - i === -1
        ? ""
        : heroText.length === 0
        ? heroText.charAt(0)
        : heroText.slice(0, heroText.length - i);

    await new Promise((r) => setTimeout(r, 75 * i));
    document.getElementById("left-hero-animation-text").innerText = word;
  }
};

const addTitleText = async (item) => {
  let j = 0;
  for (j; j < item.title.length; j++) {
    const word =
      item.title.length === j
        ? item.title
        : item.title.length === 0
        ? item.title.charAt(0)
        : item.title.slice(0, j);

    await new Promise((r) => setTimeout(r, 300 * j * j));
    document.getElementById("left-hero-animation-text").innerText = word;
  }
};

async function loopTextAnimation() {
  const obj = heroAnimationData;

  for (let k = 0; k < obj.length; k++) {
    const element = obj[k];

    typingCursor.classList.add("animate-opacity");

    removeTitleText();

    leftHeroColor.style.backgroundColor = element.backgroundColor;
    leftHeroSection.style.color = element.textColor;
    document.getElementById("left-hero-animation-text").style.color =
      element.textColor;

    await new Promise((r) => setTimeout(r, 2000));
    addTitleText(element);

    await new Promise((r) => setTimeout(r, 2000));

    typingCursor.classList.remove("animate-opacity");
  }
}

setInterval(loopTextAnimation, 3000);

// nav clicks
showNav();
hideNav();

for (let i = 0; i < navLinks.length; i++) {
  const element = navLinks[i];

  element.addEventListener("click", () => {
    overlayNav.classList.remove("overlay-visible");
  });
}
