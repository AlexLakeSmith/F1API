import React from "react";
import { Outlet } from "react-router-dom";

// Outlet is used to render our children routes.
const InnerContent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default InnerContent;
