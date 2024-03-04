import React from "react";
import Home from "./home";
import NotFound from "./components/notFound/NotFound";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

const app = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/JakeGehrke" element={<Navigate to="/" />} />
        {/* <Route path="/menu" element={<Menu />}>
          <Route index element={<Specials />} />
          <Route path=":menuItem" element={<MenuItem />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default app;
