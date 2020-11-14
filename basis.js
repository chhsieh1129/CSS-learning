const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const choosePlanButttons = document.querySelectorAll(".plan button");
const mobileNavButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < choosePlanButttons.length; i++) {
  choosePlanButttons[i].addEventListener("click", () => {
    backdrop.style.display = "block"
    modal.style.display = "block"
    setTimeout(() => {
      backdrop.classList.add("open");
      modal.classList.add("open")
    }, 10);
  });
}

backdrop.addEventListener ("click", () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener ("click", closeModal);
};



function closeModal () {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
  if (modal) {
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
    modal.classList.remove("open")
  }
  
}

mobileNavButton.addEventListener ("click", () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  backdrop.style.display = "block";
  mobileNav.classList.add("open");
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});