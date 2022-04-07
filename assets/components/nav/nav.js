export default function Navigation() {
  const homeBtn = document.querySelector('[data-js="home"]');
  const homeContent = document.querySelector('[data-js="home-site"]');

  const bookmarkBtn = document.querySelector('[data-js="bookmarks"]');
  const bookmarkContent = document.querySelector('[data-js="bookmarks-site"]');

  const createBtn = document.querySelector('[data-js="create"]');
  const createContent = document.querySelector('[data-js="create-site"]');

  const profileBtn = document.querySelector('[data-js="profile"]');
  const profileContent = document.querySelector('[data-js="profile-site"]');

  homeBtn.addEventListener("click", () => {
    bookmarkContent.classList.add("hide");
    homeContent.classList.remove("hide");
    createContent.classList.add("hide");
    profileContent.classList.add("hide");

    homeBtn.classList.add("nav__item--clicked");
    bookmarkBtn.classList.remove("nav__item--clicked");
    createBtn.classList.remove("nav__item--clicked");
    profileBtn.classList.remove("nav__item--clicked");
  });

  bookmarkBtn.addEventListener("click", () => {
    bookmarkContent.classList.remove("hide");
    homeContent.classList.add("hide");
    createContent.classList.add("hide");
    profileContent.classList.add("hide");

    homeBtn.classList.remove("nav__item--clicked");
    bookmarkBtn.classList.add("nav__item--clicked");
    createBtn.classList.remove("nav__item--clicked");
    profileBtn.classList.remove("nav__item--clicked");
  });

  createBtn.addEventListener("click", () => {
    bookmarkContent.classList.add("hide");
    homeContent.classList.add("hide");
    createContent.classList.remove("hide");
    profileContent.classList.add("hide");

    homeBtn.classList.remove("nav__item--clicked");
    bookmarkBtn.classList.remove("nav__item--clicked");
    createBtn.classList.add("nav__item--clicked");
    profileBtn.classList.remove("nav__item--clicked");
  });

  profileBtn.addEventListener("click", () => {
    bookmarkContent.classList.add("hide");
    homeContent.classList.add("hide");
    createContent.classList.add("hide");
    profileContent.classList.remove("hide");

    homeBtn.classList.remove("nav__item--clicked");
    bookmarkBtn.classList.remove("nav__item--clicked");
    createBtn.classList.remove("nav__item--clicked");
    profileBtn.classList.add("nav__item--clicked");
  });
}
