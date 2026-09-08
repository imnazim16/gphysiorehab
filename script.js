const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

$(function () {
  const heroSlider = $(".hero-slider");
  const reviewSlider = $(".review-slider");

  if (heroSlider.length && $.fn.slick) {
    heroSlider.slick({
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      appendDots: ".hero-dots",
      fade: true,
      speed: 800,
      pauseOnHover: false,
    });
  }

  if (reviewSlider.length && $.fn.slick) {
    reviewSlider.slick({
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      prevArrow:
        '<button type="button" class="slick-prev" aria-label="Previous review"><i class="ri-arrow-left-line"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next" aria-label="Next review"><i class="ri-arrow-right-line"></i></button>',
    });
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="ri-close-line" aria-hidden="true"></i><span>Close</span>'
    : '<i class="ri-menu-3-line" aria-hidden="true"></i><span>Menu</span>';
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML =
      '<i class="ri-menu-3-line" aria-hidden="true"></i><span>Menu</span>';
  });
});

const bookingModal = document.querySelector(".booking-modal");
const openBookingLinks = document.querySelectorAll(".open-booking");
const closeBooking = () => {
  bookingModal.classList.remove("is-open");
  bookingModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

openBookingLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    bookingModal.classList.add("is-open");
    bookingModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    bookingModal.querySelector("input").focus();
  });
});

document.querySelector(".modal-close").addEventListener("click", closeBooking);
bookingModal.addEventListener("click", (event) => {
  if (event.target === bookingModal) closeBooking();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeBooking();
});

document.querySelector(".booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = event.currentTarget.querySelector(".form-message");
  message.textContent = "Thank you. Our team will be in touch shortly.";
  event.currentTarget.reset();
});

document
  .querySelector(".modal-booking-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const message = event.currentTarget.querySelector(".form-message");
    message.textContent = "Thank you. Our team will be in touch shortly.";
    event.currentTarget.reset();
  });
