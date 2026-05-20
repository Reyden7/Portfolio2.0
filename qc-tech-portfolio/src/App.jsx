import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import { PageTransitionProvider } from "./context/PageTransitionContext";

import Home from "./pages/Home/Home";
import Websites from "./pages/Websites/Websites";
import Apps from "./pages/Apps/Apps";
import Modeling3D from "./pages/Modeling3D/Modeling3D";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <BrowserRouter>
        {!isLoading && (
          <PageTransitionProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sites-internet" element={<Websites />} />
              <Route path="/applications-logiciels" element={<Apps />} />
              <Route path="/modelisation-3d" element={<Modeling3D />} />
              <Route path="/projets/:slug" element={<ProjectDetail />} />
            </Routes>
          </PageTransitionProvider>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;