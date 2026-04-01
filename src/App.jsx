// import { useState } from 'react'
import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Stats from "./components/stats/Stats";
import Steps from "./components/steps/Steps";
import Premium from "./components/premiumTools/Premium";
import Simple from "./components/simple/simple";
import Workflow from "./components/workflow/Workflow";
import Footer from "./components/footer/Footer";






const fetchPremium = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const premiumPromise = fetchPremium();

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Premium premiumPromise={premiumPromise} />
      </Suspense>
      <Steps />
      <Simple />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
