import React from "react";
import Sketch from "react-p5";

function App() {
  let a = 10;
  let b = 20;
  let speed = 6;
  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(1000, 200).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y);
  };
  let draw = (p5) => {
    p5.background("rgb(100%,0%,5%)");
    p5.stroke(255);
    p5.strokeWeight(15);
    p5.noFill();
    p5.rect(a, b, 175, 125);
    if (a >= p5.width - 175) {
      speed = -5;
    }
    if (a <= 0) {
      speed = 8;
    }

    a = a + speed;
  };
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
