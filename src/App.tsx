import { useEffect } from "react";
import "./_styles/App.scss";
import Scene from "./components/Scene";
import MainContent from "./components/content/MainContent";

function App() {
  useEffect(() => {
    // Set vh property for mobile devices
    const vh = window.innerHeight * 0.01;
    document.getElementById("App")!.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <div id="App" className="App">
      <Scene />
      <MainContent />
    </div>
  );
}

export default App;
