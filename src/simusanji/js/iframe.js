(function () {
  //   if (new URLSearchParams(window.location.search).get("iframe") !== "1") {
  //     document.getElementById("body").style.display = "block";
  //     return;
  //   }

  //   func = function () {
  //     document.querySelectorAll("header, footer, [href='/talents']").forEach(function (element) {
  //       element.remove();
  //     });

  //     document.querySelectorAll('[data-testid="FavoriteButton"]').forEach(function (element) {
  //       element.parentElement.remove();
  //     });

  //     document.querySelectorAll("main").forEach(function (element) {
  //       element.style.paddingTop = "0";
  //     });

  //     document.documentElement.style.overscrollBehaviorY = "auto";

  //     // document.getElementById("body").style.display = "block";
  //   }

  //   window.addEventListener("load", func, { once: true });
  (function () {
    if (new URLSearchParams(window.location.search).get("iframe") !== "1") {
      return;
    }

    const style = document.createElement("style");

    style.textContent = `
header,
footer {
  display: none !important;
}

main {
  padding-top: 0 !important;
}

a[href="/talents"] {
  display: none !important;
}

div:has(> div[data-testid="FavoriteButton"]) {
  display: none !important;
}
`;

    document.head.appendChild(style);
  })();
})();
