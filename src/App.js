import React from "react";
import Sketch from "react-p5";

function App() {
  let a = 300;
  let b = 300;
  let speed = 3;
  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y);
    p5.textAlign(p5.CENTER);
  p5.textSize(18);
  p5.fill(255);
  p5.sentenceArray = p5.sentence.p5.split(""); // splits a string into an array of chars

    p5.print(p5.sentenceArray);
  };
  let draw = (p5) => {
    p5.background("rgb(100%,0%,10%)");
    p5.stroke(255);
    p5.strokeWeight(4);
    p5.noFill();
    p5.ellipse(a, b, 100, 100);

    if (a >= p5.width) {
      speed = -3;
    }
    if (a === 90) {
      speed = 3;
    }
    a = a + speed;

    p5.translate(p5.width / 3, p5.height / 3);
  let x = p5.r * p5.cos(p5.theta);
  let y = p5.r * p5.sin(p5.theta);

  for (let i = 0; i < p5.sentenceArray.length; i++) {
    p5.rotate(p5.QUARTER_PI / 1.25);
    p5.text(p5.sentenceArray[i], x, y);
  }
  };
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
