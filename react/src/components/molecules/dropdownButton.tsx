// import { useDropdownMenu } from "../../hooks/useDropdownMenu";
import { Button, Image } from "../atoms";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const DropdownButton = () => {
  // const { dropdownButtonRef, chevronRef, toggleDropdownMenu } = useDropdownMenu();
  return (
    // <Button
    //   className="bg-primary w-30"
    //   id="dropdown-button" ref={dropdownButtonRef}
    //   onClick={toggleDropdownMenu}
    // >
    //   <Image className="mobile" src={"/images/menu.svg"} alt="" />
    //   <span id="chevron" className="chevron material-symbols-outlined" ref={chevronRef}></span>
    // </Button>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="IconButton" aria-label="Customise options">
          <Image className="mobile" src={"/images/menu.svg"} alt="" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
          Exchange
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
          Wallet
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
          Roqqu Hub
          </DropdownMenu.Item>

          <DropdownMenu.Item className="DropdownMenuItem">
          Log Out
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
