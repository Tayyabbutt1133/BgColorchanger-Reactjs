import { useState } from "react";
import "./App.css";

function App() {
  // using state
  const [color, SetColor] = useState("Olive");
 
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>SetColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button onClick={()=>SetColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button onClick={()=>SetColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button onClick={()=>SetColor("grey")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button onClick={()=>SetColor("Purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Purple" }}
            >
              Purple
            </button>
            <button onClick={()=>SetColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button onClick={()=>SetColor("Black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
            <button onClick={()=>SetColor("Orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>
            <button onClick={()=>SetColor("DarkBlue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "DarkBlue" }}
            >
              DarkBlue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
//
