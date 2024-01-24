import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home.page";
import AboutPage from "./page/About.page";
import ContentPage from "./page/Content.page";
import NavComponents from "./components/Nav.components";
import BookPage from "./page/Book/Book.page";
import DetailBookPage from "./page/Book/DetailBook.page";
import AuthorPage from "./page/Book/Author.page";
import NotFound from "./not-found";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavComponents />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/book/:id" element={<DetailBookPage />} />
          <Route path="/book/:id/author" element={<AuthorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
