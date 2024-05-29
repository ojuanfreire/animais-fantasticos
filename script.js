function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "ativo";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      const direcaoAnimacao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, direcaoAnimacao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initSmoothScroll() {
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

initSmoothScroll();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowTamanho = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowTamanho;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();
