// Togle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambuergermenudiklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// togle class active untuk search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// togle class active untuk shoping cart
const shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shoppingcart.classList.toggle("active");
  e.preventDefault();
};
// klik diluar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!scb.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});

// modal Box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) =>{
  btn.onclick = (e) => {
    itemDetailModal.style.display ='flex';
    e.preventDefault();
  }
})


// close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = 'none';
};

// diluarmodal

const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
