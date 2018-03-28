import React, { Component } from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div className="container">
            <h1>React here!</h1>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));