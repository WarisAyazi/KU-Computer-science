var theme = document.querySelector(".lig-dark-btn");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
theme.onclick = function () {
  document.body.classList.toggle("dark-themes");
  if (document.body.classList.contains("dark-themes")) {
    moon.classList.add("icon-hidden");
    sun.classList.remove("icon-hidden");
  } else {
    sun.classList.add("icon-hidden");
    moon.classList.remove("icon-hidden");
  }
};

// --------------------------------sub header------------

const subHeader = document.querySelector(".sec-sub");
const hero = document.querySelector(".hero");

const sticky = function (entries) {
  const [entry] = entries;
  // console.log(entries);

  if (!entry.isIntersecting) {
    subHeader.classList.add("sec-sub-show");
    subHeader.classList.remove("sec-sub-hidden");
  } else subHeader.classList.remove("sec-sub-show");
  subHeader.classList.add("sec-sub-hidden");
};

const observer = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
});

observer.observe(hero);
