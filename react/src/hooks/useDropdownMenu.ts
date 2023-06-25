import { useEffect, useRef, useState } from "react";

export const useDropdownMenu = () => {
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const chevronRef = useRef<HTMLSpanElement | null>(null);
  const mainMenuRef = useRef<HTMLDivElement | null>(null);
  const [topMenu, setTopMenu] = useState(0);
  const [rightMenu, setRightMenu] = useState(0);
  useEffect(() => {
    const dropdownButton = dropdownButtonRef.current;
    const chevron = chevronRef.current;
    const mainMenu = mainMenuRef.current;

    if (!dropdownButton || !chevron || !mainMenu) return;

    const buttonBoundingClientRect = dropdownButton.getBoundingClientRect();
    const chevronBoundingClientRect = chevron.getBoundingClientRect();
    setRightMenu(
      buttonBoundingClientRect.right - chevronBoundingClientRect.right
    );
    setTopMenu(chevronBoundingClientRect.top - buttonBoundingClientRect.top);
    mainMenu.style.top = `${topMenu}px`;
    mainMenu.style.right = `${rightMenu}px`;
  }, []);

  const toggleDropdownMenu = () => {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const mainMenu = mainMenuRef.current;

    if (!dropdownMenu || !mainMenu) return;

    if (dropdownMenu.classList.contains("open")) {
      mainMenu.style.top = `${topMenu}px`;
      mainMenu.style.right = `${rightMenu}px`;
    } else {
      const dropdownButton = dropdownButtonRef.current;
      if (!dropdownButton) return;

      mainMenu.style.top = `${dropdownButton.clientHeight + 10}px`;
      mainMenu.style.right = "0";
    }

    dropdownMenu.classList.toggle("open");
  };

  return { dropdownButtonRef, chevronRef, mainMenuRef, toggleDropdownMenu };
};

