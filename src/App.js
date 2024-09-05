import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GptModel from "./GptModel";

function App() {
  return (
    <BrowserRouter basename="Info_multimodel_GPT">
      <Routes>
        <Route path="/" element={<GptModel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
