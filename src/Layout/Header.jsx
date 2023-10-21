import React from "react";
import SearchInput from "./../Component/Elements/SearchInput";
import Setting from "./../Component/Elements/Setting";
import Notification from "./../Component/Elements/Notification";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-baseline w-100">
      <SearchInput />
      <div className="d-flex align-items-baseline">
        <Setting />
        <Notification />
      </div>
    </div>
  );
};

export default Header;
