import View from "../view.js";

const application = document.getElementById("application");

export default {
  render: function (object) {
    application.innerHTML = View.render(object);

    //LIGTH/DARK-THEME
    const theme = application.querySelector(".header__theme");

    const body = application.parentElement;

    body.style.background = "black";

    theme.addEventListener("click", changeTheme);

    function changeTheme(event) {
      if (event.target.className === "theme__dark") {
        event.target.setAttribute("class", "theme__light");

        body.style.background = "white";

        //Header Navigation Mobile

        const headerNavPanel = application.querySelector(
          ".navigation__panel--mobile"
        );

        const closeBtnItem1 = headerNavPanel.querySelector(".close__item-1");
        const closeBtnItem2 = headerNavPanel.querySelector(".close__item-2");

        const panelNavLinks = headerNavPanel.querySelectorAll(
          ".navigation__link--mobile"
        );

        headerNavPanel.style.background = "white";
        closeBtnItem1.style.background = "black";
        closeBtnItem2.style.background = "black";

        for (const iterator of panelNavLinks) {
          iterator.style.color = "black";
        }

        // Skills
        const skillsBody = application.querySelector(".skills__body");
        const skillsLines = skillsBody.querySelectorAll(".skills__line");
        const skillsTitle = skillsBody.querySelector("h2");
        const skillsSubtitles =
          skillsBody.querySelectorAll(".skills__subtitle");
        const skillsTexts = skillsBody.querySelectorAll(".skills__text");

        for (const iterator of skillsLines) {
          iterator.style.background = "black";
        }

        skillsTitle.style.color = "black";

        for (const iterator of skillsSubtitles) {
          iterator.style.color = "black";
        }
        for (const iterator of skillsTexts) {
          iterator.style.color = "black";
        }

        // Portfolio

        const portfolioBody = application.querySelector(".portfolio__body");
        const portfolioLines =
          portfolioBody.querySelectorAll(".portfolio__line");

        const portfolioTitle = portfolioBody.querySelector("h2");

        for (const iterator of portfolioLines) {
          iterator.style.background = "black";
        }

        portfolioTitle.style.color = "black";

        //Video

        const videoBody = application.querySelector(".video__body");

        const videoLines = videoBody.querySelectorAll(".video__line");
        const videoTitle = videoBody.querySelector("h2");

        for (const iterator of videoLines) {
          iterator.style.background = "black";
        }
        videoTitle.style.color = "black";

        //Price
        const priceBody = application.querySelector(".price__body");

        const priceLines = priceBody.querySelectorAll(".price__line");
        const priceTitle = priceBody.querySelector("h2");

        const priceSubtitles = priceBody.querySelectorAll(".price__subtitle");

        const priceTexts = priceBody.querySelectorAll(".price__text span");

        for (const iterator of priceLines) {
          iterator.style.background = "black";
        }

        priceTitle.style.color = "black";

        for (const iterator of priceSubtitles) {
          iterator.style.color = "black";
        }

        for (const iterator of priceTexts) {
          iterator.style.color = "black";
        }
      } else {
        event.target.setAttribute("class", "theme__dark");
        body.style.background = "black";

        //Header Navigation Mobile

        const headerNavPanel = application.querySelector(
          ".navigation__panel--mobile"
        );

        const closeBtnItem1 = headerNavPanel.querySelector(".close__item-1");
        const closeBtnItem2 = headerNavPanel.querySelector(".close__item-2");

        const panelNavLinks = headerNavPanel.querySelectorAll(
          ".navigation__link--mobile"
        );

        headerNavPanel.style.background = "black";
        closeBtnItem1.style.background = "white";
        closeBtnItem2.style.background = "white";

        for (const iterator of panelNavLinks) {
          iterator.style.color = "white";
        }

        // Skills

        const skillsBody = application.querySelector(".skills__body");
        const skillsLines = skillsBody.querySelectorAll(".skills__line");
        const skillsTitle = skillsBody.querySelector("h2");
        const skillsSubtitles =
          skillsBody.querySelectorAll(".skills__subtitle");
        const skillsTexts = skillsBody.querySelectorAll(".skills__text");

        for (const iterator of skillsLines) {
          iterator.style.background = "#bdae82";
        }

        skillsTitle.style.color = "#bdae82";

        for (const iterator of skillsSubtitles) {
          iterator.style.color = "white";
        }
        for (const iterator of skillsTexts) {
          iterator.style.color = "white";
        }

        // Portfolio

        const portfolioBody = application.querySelector(".portfolio__body");
        const portfolioLines =
          portfolioBody.querySelectorAll(".portfolio__line");

        const portfolioTitle = portfolioBody.querySelector("h2");

        for (const iterator of portfolioLines) {
          iterator.style.background = "#bdae82";
        }

        portfolioTitle.style.color = "#bdae82";

        //Video

        const videoBody = application.querySelector(".video__body");

        const videoLines = videoBody.querySelectorAll(".video__line");
        const videoTitle = videoBody.querySelector("h2");

        for (const iterator of videoLines) {
          iterator.style.background = "#bdae82";
        }
        videoTitle.style.color = "#bdae82";

        //Price
        const priceBody = application.querySelector(".price__body");

        const priceLines = priceBody.querySelectorAll(".price__line");
        const priceTitle = priceBody.querySelector("h2");

        const priceSubtitles = priceBody.querySelectorAll(".price__subtitle");

        const priceTexts = priceBody.querySelectorAll(".price__text span");

        for (const iterator of priceLines) {
          iterator.style.background = "#bdae82";
        }

        priceTitle.style.color = "#bdae82";

        for (const iterator of priceSubtitles) {
          iterator.style.color = "white";
        }

        for (const iterator of priceTexts) {
          iterator.style.color = "white";
        }
      }
    }

    // BTN-LINK-ACTIVE

    const langList = application.querySelector(".languages__list");
    const ruLinkLang = langList.querySelector(".languages-ru ");

    ruLinkLang.classList.add("active__language--btn");

    // NAVIGATION PANEL

    const mobileNavigation = application.querySelector(
      ".header__navigation--mobile"
    );
    const openButton = mobileNavigation.querySelector(".open__btn--mobile");
    const closeButton = mobileNavigation.querySelector(".close__btn--mobile");
    const navigationPanel = mobileNavigation.querySelector(
      ".navigation__panel--mobile"
    );

    const portfolioLinks = mobileNavigation.querySelectorAll(
      ".navigation__link--mobile"
    );

    for (const iterator of portfolioLinks) {
      iterator.addEventListener("click", closePanel);
    }

    openButton.addEventListener("click", openPanel);
    closeButton.addEventListener("click", closePanel);

    function openPanel(event) {
      if (window.innerWidth < 620) {
        navigationPanel.style.width = "100%";
      } else {
        navigationPanel.style.width = "620px";
      }
    }

    function closePanel() {
      navigationPanel.style.width = "0px";
    }

    // CHANGE IMAGES

    const buttonWinter = application.querySelector("#button-winter");
    const buttonSpring = application.querySelector("#button-spring");
    const buttonSummer = application.querySelector("#button-summer");
    const buttonAutumn = application.querySelector("#button-autumn");

    buttonWinter.addEventListener("click", function () {
      getAllButtons();

      const images = getAllImages();

      for (let i = 0; i < images.length; i++) {
        images[i].src = `./images/images-winter/winter-${i + 1}.jpg`;
      }

      this.classList.toggle("active-btn");
    });

    buttonSpring.addEventListener("click", function () {
      getAllButtons();

      const images = getAllImages();

      for (let i = 0; i < images.length; i++) {
        images[i].src = `./images/images-spring/spring-${i + 1}.jpg`;
      }

      this.classList.toggle("active-btn");
    });

    buttonSummer.addEventListener("click", function () {
      getAllButtons();

      const images = getAllImages();

      for (let i = 0; i < images.length; i++) {
        images[i].src = `./images/images-summer/summer-${i + 1}.jpg`;
      }

      this.classList.toggle("active-btn");
    });

    buttonAutumn.addEventListener("click", function () {
      getAllButtons();

      const images = getAllImages();

      for (let i = 0; i < images.length; i++) {
        images[i].src = `./images/images-autumn/autumn-${i + 1}.jpg`;
      }

      this.classList.toggle("active-btn");
    });

    function getAllImages() {
      const images = document.querySelectorAll(".portfolio__image img");
      return images;
    }

    function getAllButtons() {
      const buttons = document.querySelectorAll(".portfolio__button");

      for (const iterator of buttons) {
        iterator.classList.remove("active-btn");
      }
    }
  },
};
