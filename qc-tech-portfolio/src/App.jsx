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
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import AdminProjects from "./pages/AdminProject/AdminProjects";
import Services from "./pages/Services/Services";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

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
              <Route path="/admin" element={<AdminProjects />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </PageTransitionProvider>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;