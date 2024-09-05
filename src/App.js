import "./App.css";
import Footer from "./Footer";
import GptModelTiles from "./GptModelTiles";

function App() {
  return (
    <div className="fullscreen">
      <main>
        <GptModelTiles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
