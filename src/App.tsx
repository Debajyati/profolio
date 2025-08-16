import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  lazy,
  Suspense,
} from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Works = lazy(() => import("./components/Works"));

import StartupModal ,{ type modalRef } from "./components/StartupModal";
import NotFoundModal, { type NotFoundModalRef } from "./components/NotFoundModal.tsx";
import introsound from "./public/sounds/intro.mp3";
import SEO from "./components/SEO.tsx";
import Background from "./components/arwes/Background.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";

const pathSet = new Set<string>(["/", "/works", "/about", "/contact"]);

const MainApp = (): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    const audio = new Audio(introsound);
    audio.volume = 0.6;
    audio.play().catch((err) => {
      console.error("Audio play failed:", err);
    });
  }, [location.pathname]);

  return (
    <Suspense fallback={<Background bgType="onlyMovingLines" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Suspense>
  );
};

const App = (): ReactElement => {
  const dialog = useRef<modalRef>(null);
  const notFoundModalRef = useRef<NotFoundModalRef>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  function handleStartUpModalOpen() {
    dialog.current?.open();
  }
  function handleStartUpModalClose() {
    dialog.current?.close();
    setAudioUnlocked(true);
  }
  const handleGoBack = () => {
    if (notFoundModalRef.current) {
      notFoundModalRef.current.close();
    }
    // Navigate to home page
    navigate("/");
  };
  const handleNotFoundModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleGoBack();
    }
  };

  useEffect(() => {
    if (!pathSet.has(location.pathname)) {
      notFoundModalRef.current?.open();
    } else if (!audioUnlocked) {
      handleStartUpModalOpen();
    }
  }, [audioUnlocked, location.pathname]);
  return (
    <HelmetProvider>
      <SEO />
      <StartupModal
        onClick={handleStartUpModalClose}
        ref={dialog}
        style={{
          fontFamily: "JetBrains Mono",
          backgroundColor: "hsl(180, 80%, 10%)",
          color: "hsl(180, 75%, 65%)",
          textAlign: "center",
          paddingBottom: "2rem",
        }}
      />
      <NotFoundModal
        ref={notFoundModalRef}
        onClick={handleNotFoundModalClick}
        onGoBack={handleGoBack}
      />
      {!dialog.current?.isopen() && audioUnlocked ? (
        <>
          <header>
            <Navbar />
          </header>
          <div className="App">
            <MainApp />
          </div>
          {location.pathname !== "/" && <Footer />}
        </>
      ) : (
        <Background bgType="onlygrid" />
      )}
    </HelmetProvider>
  );
};

export default App;
