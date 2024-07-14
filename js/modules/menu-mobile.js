import outsideClick from "./outsideclick.js";

export default class initMenuMobile {
  constructor(menuButton, menuList, events = ["click", "touchstart"]) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add("active");
    this.menuList.classList.add("active");

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
