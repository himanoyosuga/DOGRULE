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