import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Reservations from "./pages/Reservations";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events" element={<Events />} />
      <Route path="/reservations" element={<Reservations />} />
      {/* Existing routes will be preserved */}
    </Routes>
  </Router>
);

export default App;