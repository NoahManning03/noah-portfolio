import { lazy, Suspense } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Offers from "./components/Offers";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Atmosphere from "./components/Atmosphere";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BootSequence from "./components/BootSequence";
import WorldColumn from "./components/WorldColumn";
import EnvironmentField from "./components/EnvironmentField";
import { HighlightProvider } from "./context/HighlightContext";

const BackgroundCanvas = lazy(() => import("./components/canvas/BackgroundCanvas"));

export default function App() {
  return (
    <HighlightProvider>
      <div className="relative min-h-screen bg-bg text-[#f8fafc] selection:bg-accent/40">
        <BootSequence />
        <CustomCursor />
        <ScrollProgress />
        <Suspense fallback={null}>
          <BackgroundCanvas />
        </Suspense>
        <Atmosphere />
        <EnvironmentField />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <WorldColumn>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Offers />
              <Certifications />
              <Contact />
            </WorldColumn>
          </main>
        </SmoothScroll>
      </div>
    </HighlightProvider>
  );
}
