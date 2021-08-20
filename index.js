const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startButtonRef: document.querySelector("[data-action=start]"),

  stopButtonRef: document.querySelector("[data-action=stop]"),

  bodyRef: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.startButtonRef.addEventListener("click", () => {
  refs.startButtonRef.disabled = true;

  timerId = setInterval(() => {
    refs.bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

refs.stopButtonRef.addEventListener("click", () => {
  if (refs.startButtonRef.disabled !== true) {
    return;
  }

  clearInterval(timerId);
  refs.startButtonRef.disabled = false;
});
