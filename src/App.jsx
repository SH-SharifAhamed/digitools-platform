// import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from "./components/banner/Banner";
import Stats from "./components/stats/Stats";
import Steps from "./components/steps/Steps";
import Premium from "./components/premiumTools/Premium";
import Simple from './components/simple/simple';
import Workflow from './components/workflow/Workflow';
import Footer from './components/footer/Footer';









function App() {






  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Premium />
      <Steps />
      <Simple />
      <Workflow />
      <Footer />
    </>
  );
}

export default App
