import { useSelector } from "react-redux";
import { State } from "../../model/state";
import { Image } from "../atoms";
export const UserProfile = () => {
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  return (
    <div className="header__right__profile">
      <Image
        width="32"
        height="32"
        className="rounded-full"
        id="profile-pic-mobile"
        alt=""
        src={state.profileSrc}
      />
      <span id="profile-name">{state.email}...</span>
      <Image src={"/images/chevron-right.svg"} alt="" />
    </div>
  );
};
