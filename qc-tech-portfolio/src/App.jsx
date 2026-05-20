import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";

import Home from "./pages/Home/Home";
import Websites from "./pages/Websites/Websites";
import Apps from "./pages/Apps/Apps";
import Modeling3D from "./pages/Modeling3D/Modeling3D";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sites-internet" element={<Websites />} />
          <Route path="/applications-logiciels" element={<Apps />} />
          <Route path="/modelisation-3d" element={<Modeling3D />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;