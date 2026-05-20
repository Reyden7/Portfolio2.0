import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { PageTransitionProvider } from "./context/PageTransitionContext";

import Home from "./pages/Home/Home";
import Websites from "./pages/Websites/Websites";
import Apps from "./pages/Apps/Apps";
import Modeling3D from "./pages/Modeling3D/Modeling3D";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />

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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransitionProvider>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;