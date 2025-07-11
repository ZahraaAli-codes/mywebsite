import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './Header'; // Adjust path if Header is not in 'components'
import Footer from './Footer'; // You'll need to create your Footer component

function Layout() {
  return (
    <div>
      <Header />
      <main> {/* Use a <main> tag for semantic content */}
        <Outlet /> {/* This is where the routed components will render */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;