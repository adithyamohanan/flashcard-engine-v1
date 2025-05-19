import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';
import FlashCard from './components/FlashCard/FlashCard';
import MyFlashCard from './components/FlashCard/MyFlashCard/MyFlashCard'; // ✅
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  const [dashboardData, setDashboardData] = useState({
    cardsDueToday: 0,
    cardsMastered: 0,
  });

  return (
    <Router>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar/>
              <Hero />
              <FlashCard setDashboardData={setDashboardData} />
              <DashBoard dashboardData={dashboardData} />
              <Footer />
            </>
          }
        />

        
        <Route
          path="/myflashcards"
          element={
            <>
              <MyFlashCard/>
            </>
          }
        />
         <Route path="/dashboard" element={<DashBoard dashboardData={dashboardData} />} />
         <Route path="/hero" element={<App />} />
      </Routes>
    </Router>
  );
}

export default App;
