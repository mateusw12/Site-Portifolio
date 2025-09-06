import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "./components/nav-bar";
import { Home } from "./pages/home";
import { Toaster } from "./components/ui/toaster";

import { PROJECTS } from "./constants/projects";
import { SKILLS } from "./constants/skills";
import { LazySection } from "./components/lazy-on-view";

// Componentes carregados sob demanda
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const SkillsGrid = lazy(() => import("./pages/skills"));
const Contact = lazy(() => import("./pages/contact"));
const Footer = lazy(() => import("./pages/footer"));
const Socials = lazy(() => import("./components/socials"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <Navbar />
        <Home />

        <Suspense fallback={<div>Carregando...</div>}>
          <LazySection Component={About} />
          <LazySection Component={Projects} props={{ projects: PROJECTS }} />
          <LazySection Component={SkillsGrid} props={{ skills: SKILLS }} />
          <LazySection Component={Contact} />
          <LazySection Component={Footer} />
          <LazySection Component={Socials} />
        </Suspense>

        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
