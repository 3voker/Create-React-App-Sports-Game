import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game/Game";
import bunnyImg from "./assets/images/bunny.png";
import houndImg from "./assets/images/hound.png";
import raccoonImg from "./assets/images/raccoon.png";
import squirrelImg from "./assets/images/squirrel.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoonImg,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrelImg,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunnyImg,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: houndImg,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
