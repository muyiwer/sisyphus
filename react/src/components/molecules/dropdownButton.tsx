import { useDropdownMenu } from "../../hooks/useDropdownMenu";
import { Button, Image } from "../atoms";

export const DropdownButton = () => {
    const { dropdownButtonRef, chevronRef } = useDropdownMenu();
  return (
    <Button
      className="bg-primary w-30"
      id="dropdown-button" ref={dropdownButtonRef}
    >
      <Image className="mobile" src={"/images/menu.svg"} alt="" />
      <span id="chevron" className="chevron material-symbols-outlined" ref={chevronRef}></span>
    </Button>
  );
};
