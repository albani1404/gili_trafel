import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DestinationDetail from './pages/DestinationDetail';

// Scroll to the #section on the home page, or to the top on any other route change
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const navigate = useNavigate();
  // Shared so any "Enquire" button can pre-select its destination in the contact form
  const [destination, setDestination] = useState('');

  const handleEnquire = (id) => {
    setDestination(id);
    navigate('/#contact');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home destination={destination} onDestinationChange={setDestination} />} />
          <Route path="/destinations/:id" element={<DestinationDetail onEnquire={handleEnquire} />} />
          <Route path="*" element={<DestinationDetail onEnquire={handleEnquire} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
