import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <>
      <div className="text-center">
        <h4 className="text-2xl font-bold">Admin Panel</h4>
        <div className="list-group">
          <NavLink
            to="/dashboard/admin/crete-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/crete-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AdminMenu;
