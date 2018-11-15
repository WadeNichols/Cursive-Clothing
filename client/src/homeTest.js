import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <div className="wallpaper">
        <img className="man-polo" src={require("./assets/manPolo.jpg")} />
        <img className="penguin" src={require("./assets/penguin-suit.png")} />
        <div>
          <p className="cursive">Cursive</p>
          <p className="clothing">Clothing</p>
          <p className="company">Company</p>
        </div>
      </div>
    </div>
  );
}
