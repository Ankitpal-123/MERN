import React from "react";
import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <>
      <div className="text-center">
        <h4 className="text-2xl font-bold">User DashBOrd</h4>
        <div className="list-group">
          <NavLink
            to="/dashboard/user/Profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default UserMenu;
