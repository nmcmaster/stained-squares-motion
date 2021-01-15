import React from "react";
import "./App.css";
import TextField from "./TextField";

const obj = { name: "string" };

const App: React.FC = () => {
    return (
        <div className="App">
            <p>Hello {obj.name}</p>
            <TextField text={"passed hello"} />
        </div>
    );
};

export default App;
