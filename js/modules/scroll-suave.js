export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    '[data-menu = "suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();

    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((linkInterno) => {
    linkInterno.addEventListener("click", scrollToSection);
  });
}
