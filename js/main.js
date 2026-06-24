const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.16
});

reveals.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
  observer.observe(el);
});

const homeNewsList = document.getElementById("home-news-list");

if (homeNewsList && typeof newsItems !== "undefined") {
  homeNewsList.innerHTML = newsItems
    .slice(0, 3)
    .map((item) => {
      return `
        <a href="${item.url}" class="home-news-item">
          <span>${item.date}</span>
          <span>${item.title}</span>
        </a>
      `;
    })
    .join("");
}

const siteHeader = document.querySelector(".js-site-header");
const siteMenuToggle = document.querySelector(".js-site-menu-toggle");

if (siteHeader && siteMenuToggle) {
  const closeSiteMenu = () => {
    siteHeader.classList.remove("is-open");
    siteMenuToggle.setAttribute("aria-expanded", "false");
    siteMenuToggle.setAttribute("aria-label", "Open menu");
  };

  siteMenuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");

    siteMenuToggle.setAttribute("aria-expanded", String(isOpen));
    siteMenuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  siteHeader.querySelectorAll(".site-header__links a").forEach((link) => {
    link.addEventListener("click", closeSiteMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSiteMenu();
    }
  });
}