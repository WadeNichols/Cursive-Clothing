import React from "react";

export default function Home() {
  return (
    <div className="wrapper">
        <div className="header"></div>
        <div className="img-container1">
            <img className="man" src={require("./assets/manPolo.jpg")}/>
        <div className="empty-space1">
            <div className="penguin"></div>
            <h1 className="cursive">Cursive</h1>
        </div>
        </div>
        <div className ="img-container2">
            <div className="girl"></div>
            <div className="empty-space2">
                <h1 className="cc">Clothing<br/> Company</h1>
            </div>
        </div>
        <div className ="footer"></div>
            
    </div>
  );
}
