
import { useState, Suspense } from "react";
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

const [cartCount, setCartCount] = useState(0);
const [selectedItems, setSelectedItems] = useState([]);  
  
  return (
    <>
      <Navbar cart={cartCount} />
      <Banner />
      <Stats />

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Premium premiumPromise={premiumPromise}
          setCartCount={setCartCount}
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems} />
      </Suspense>
      <Steps />
      <Simple />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
