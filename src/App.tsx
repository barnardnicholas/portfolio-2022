import "./_styles/App.scss";
import Scene from "./components/Scene";
import MainContent from "./components/content/MainContent";

function App() {
  return (
    <div className="App">
      <Scene />
      <div
        style={{
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.4)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: "none",
        }}
      />
      <MainContent />
    </div>
  );
}

export default App;
