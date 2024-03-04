import React from "react";
import { Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>

      <Outlet />
    </>
  );
}
