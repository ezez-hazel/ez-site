const script = document.currentScript;
const randomBackgroundImage =
  script?.dataset.backgroundImages?.split(",")[
    Math.floor(
      Math.random() * script.dataset.backgroundImages.split(",").length,
    )
  ];

if (randomBackgroundImage) {
  document.body.style.backgroundImage = `url("${randomBackgroundImage}")`;
}
