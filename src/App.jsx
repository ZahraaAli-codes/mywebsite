// Consolidated imports for React Router, components, and pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
// Adjust paths as necessary based on your actual file structure
// (e.g., if Header.jsx is directly in 'src', then './Header.jsx')
import Layout from './Components/Layout'; // Assuming Layout is in 'src/components'
import Home from './Pages/Home'; // Assuming Home is in 'src/pages'
import Menu from './Pages/Menu';
import Shop from './Pages/Shop';
import ContactUs from './pages/ContactUs';
import Careers from './Pages/Careers';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use the Layout component as a parent route */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes will render inside the <Outlet> of Layout */}
          {/* Set Home as the default/index route for the layout */}
          <Route index element={<Home />} />
          {/* Optional: Keep /Home specifically if you want it explicitly navigable besides just '/' */}
          <Route path="Home" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Careers" element={<Careers />} />
          <Route path="AboutUs" element={<AboutUs />} />
        </Route>
        {/* You can add routes outside the layout here if you have pages
            that should NOT have the header/footer (e.g., a login page) */}
      </Routes>
    </Router>
  );
}

export default App;