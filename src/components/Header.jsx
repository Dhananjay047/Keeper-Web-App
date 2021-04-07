import React from "react";
import HeadingIcon from '@material-ui/icons/AssignmentOutlined';

function Header() {
  return (
    <header>
      <h1><HeadingIcon className="headIcon" style={{ fontSize: 40 }}/>Keeper</h1>
    </header>
  );
}

export default Header;
