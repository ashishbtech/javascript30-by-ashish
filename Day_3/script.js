const space = document.getElementById("space");
const blur = document.getElementById("blur");
const color = document.getElementById("color");

space.addEventListener("input", () => {
  document.documentElement.style.setProperty("--space", space.value + "px");
});

blur.addEventListener("input", () => {
  document.documentElement.style.setProperty("--blur", blur.value + "px");
});

color.addEventListener("input", () => {
  document.documentElement.style.setProperty("--color", color.value);
});