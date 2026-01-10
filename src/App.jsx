import React from "react";
import HomePage from "./Landing/HomePage";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurFirmPage from "./Landing/OurFirmPage";
import PeoplePage from "./Landing/PeoplePage";
import ServicesPage from "./Landing/ServicesPage";
import ContactPage from "./Landing/ContactPage";
import EventsPage from "./Landing/EventsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-firm" element={<OurFirmPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/research" element={<OurFirmPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
