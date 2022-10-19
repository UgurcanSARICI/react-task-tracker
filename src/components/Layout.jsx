import React, { useState } from "react";
import { Header } from ".";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <Header active={isActive} setActive={setIsActive} />
    </div>
  );
};

export default Layout;
