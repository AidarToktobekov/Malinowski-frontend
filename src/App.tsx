import "./App.css";
import Main from "./features/main/Main.tsx";
import Header from "./ui/Header/Header.tsx";
import { useEffect, useState } from "react";
import Footer from "./ui/Footer/Footer.tsx";

const App = () => {
  const [language, setLanguage] = useState("eng");
  const [section, setSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        setSection(visibleSection);
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} section={section} />
      <Main language={language} />
      <Footer language={language}></Footer>
    </>
  );
};

export default App;
