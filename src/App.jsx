import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/Navbar'
import FlashCard from './components/FlashCard/FlashCard';
import DashBoard from './components/DashBoard/DashBoard';
import Footer from './components/Footer/Footer';
import { useState } from 'react';


function App() {

  const [dashboardData, setDashboardData] = useState({
    cardsDueToday: 0,
    cardsMastered: 0,
  });


  return (
    <>

      <NavBar />
      <Hero />
      <FlashCard setDashboardData={setDashboardData}/>
      <DashBoard dashboardData={dashboardData}/>
      <Footer />

    </>
  )
}

export default App
