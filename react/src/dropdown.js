const dropdownButton = document.getElementById("dropdown-button");
const buttonBoundingClientRect = dropdownButton.getBoundingClientRect();
const chevron = document.getElementById("chevron");
const chevronBoudingClientRect = chevron.getBoundingClientRect();
const rightMenu =
  buttonBoundingClientRect.right - chevronBoudingClientRect.right;
const topMenu = chevronBoudingClientRect.top - buttonBoundingClientRect.top;

const mainMenu = document.getElementById("main-menu");
mainMenu.style.top = `${topMenu}px`;
mainMenu.style.right = `${rightMenu}px`;

const toggleDropdownMenu = () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.classList.contains("open")) {
    mainMenu.style.top = `${topMenu}px`;
    mainMenu.style.right = `${rightMenu}px`;
  } else {
    mainMenu.style.top = `${dropdownButton.clientHeight + 10}px`;
    mainMenu.style.right = 0;
  }

  dropdownMenu.classList.toggle("open");
};