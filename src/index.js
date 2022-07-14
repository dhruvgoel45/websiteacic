import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutPage from "./components/Pages/AboutPage";
import GalleryPage from "./components/Pages/GalleryPage"
import Application from "./components/Application";
import OnBoard from "./components/onboard-startup/OnBoard";
import StartupPage from "./components/Pages/StartupPage";
import EventPage from "./components/Pages/EventPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path="/apply" element={<Application/>}/>
      <Route path="/onboard" element={<OnBoard/>}/>
      <Route path="/startups" element={<StartupPage/>}/>
      <Route path="/events" element={<EventPage/>}/>
    </Routes>
  </BrowserRouter>
);
