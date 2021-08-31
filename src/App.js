import "./App.css";
import P5Wrapper from "react-p5-wrapper";
import p5 from "p5";

function App() {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(750, 300);
    };
    p5.draw = () => {
      p5.background(220);

      p5.fill(250, 0, 0);
      p5.rect(10, 150, 50, 50);
    };
  };

  return <P5Wrapper sketch={sketch} />;
}

export default App;
