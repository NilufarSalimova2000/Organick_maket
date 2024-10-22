import React from "react";
import {Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Shop } from "./pages/shop";
import { Projects } from "./pages/projects";
import { News } from "./pages/news";
import { Typography } from "@mui/material";
import { ProductDeatil } from "./components/product-detail";
import { NotFound } from "./components/not-found";
import { Page } from "./pages/page";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDeatil />} />
          <Route path="about" element={<About />} />
          <Route path="pages" element={<Page />} />
          <Route path="shop" element={<Shop />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<News />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
