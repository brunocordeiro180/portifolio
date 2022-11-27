import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/home.component";
import { About } from "./components/About/about.component";
import { Skills } from "./components/Skills/skills.component";
import { Projects } from "./components/Projects/projects.component";
import { Contact } from "./components/contact/contact.component";
import { Footer } from "./components/Footer/footer.component";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
