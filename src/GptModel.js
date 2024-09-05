import React from "react";
import Footer from "./Footer";
import GptModelTiles from "./GptModelTiles";

export default function GptModel() {
  return (
    <div className="fullscreen">
      <main>
        <GptModelTiles />
      </main>
      <Footer />
    </div>
  );
}
