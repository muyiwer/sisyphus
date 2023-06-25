export const UserProfile = () => {
  return (
    <div className="header__right__profile">
      <img
        width="32"
        height="32"
        className="rounded-full"
        id="profile-pic-mobile"
        alt=""
      />
      <span id="profile-name">Olumuyiwa...</span>
      <img src={"/images/chevron-right.svg"} alt="" />
    </div>
  );
};
