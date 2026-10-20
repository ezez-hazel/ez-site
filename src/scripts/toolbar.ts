(() => {

const toolbarElement = document.querySelector<HTMLElement>(".toolbar-menu");
const toggle = toolbarElement?.querySelector<HTMLButtonElement>(".toolbar-toggle");
const links = toolbarElement?.querySelector<HTMLElement>(".toolbar-links");
const toolMenus = toolbarElement
  ? Array.from(toolbarElement.querySelectorAll<HTMLDetailsElement>(".tool-menu"))
  : [];

if (toolbarElement && toggle && links) {
  const closeToolMenu = (toolMenu: HTMLDetailsElement) => {
    toolMenu.classList.remove("is-open");
    toolMenu.querySelector("summary")?.setAttribute("aria-expanded", "false");
    window.setTimeout(() => {
      if (!toolMenu.classList.contains("is-open")) {
        toolMenu.open = false;
      }
    }, 180);
  };

  const openToolMenu = (toolMenu: HTMLDetailsElement) => {
    toolMenu.open = true;
    toolMenu.classList.add("is-open");
    toolMenu.querySelector("summary")?.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    toolbarElement.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toolMenus.forEach(closeToolMenu);
  };

  const toggleMenu = () => {
    const isOpen = toolbarElement.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", toggleMenu);

  toolMenus.forEach((toolMenu) => {
    const summary = toolMenu.querySelector("summary");
    toolMenu.open = false;

    summary?.addEventListener("click", (event) => {
      event.preventDefault();
      if (toolMenu.classList.contains("is-open")) {
        closeToolMenu(toolMenu);
      } else {
        toolMenus.forEach((otherToolMenu) => {
          if (otherToolMenu !== toolMenu) {
            closeToolMenu(otherToolMenu);
          }
        });
        openToolMenu(toolMenu);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!toolbarElement.contains(event.target as Node)) {
      closeMenu();
      return;
    }

    toolMenus.forEach((toolMenu) => {
      if (!toolMenu.contains(event.target as Node)) {
        closeToolMenu(toolMenu);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });

  links.addEventListener("click", (event) => {
    if ((event.target as Element).closest("a")) {
      closeMenu();
    }
  });
}
})();