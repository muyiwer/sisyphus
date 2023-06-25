import { Image } from "../atoms";
import { Menu } from "../molecules/menu";
import { UserProfile } from "../molecules/profile";
import { DropdownMenu } from "../organisms/dropdownMenu";

export const HeaderTemplate = () => {
  return (
    <header>
      <div className="header__left">
        <div className="header__left-logo">
          <Image width="121" height="34" src={"/images/logo.svg"} alt="" />
        </div>
        <Menu />
      </div>
      <div className="header__right">
        <UserProfile />
        <Image src={"/images/globe.svg"} alt="" />
        <Image
          width="32"
          height="32"
          className="rounded-full mobile"
          id="profile-pic"
          alt=""
        />
        <Image className="desktop" src={"/images/sign-out.svg"} alt="" />
        <DropdownMenu />
      </div>
    </header>
  );
};
