import React from "react";
import Home from "./home";
import NotFound from "./components/notFound/NotFound";
import Project from "./components/project/Project";
import Projects from "./components/project/Projects";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

const app = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/JakeGehrke" element={<Navigate to="/" />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<Project />} />
          {/* <Route path=":menuItem" element={<MenuItem />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default app;
