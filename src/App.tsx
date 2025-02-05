import "./App.css";
import Main from "./features/main/Main.tsx";
import Header from "./ui/header/Header.tsx";
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("eng");
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Main language={language} />
    </>
  );
};

export default App;
