import React from "react";
import PieChart from "./components/PieChart/PieChart.js";
import "./index.css";
import InputFields from "./testComponents/InputFields.js";
import AddFood from "./components/AddFood/AddFood.js";


function App() {




  return (
    <div className="App">
      <PieChart ></PieChart>

      <InputFields></InputFields>

      <AddFood></AddFood>

    </div>
  );
}

export default App;
