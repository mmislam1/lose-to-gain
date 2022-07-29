import React from "react";
import PieChart from "./components/PieChart.js";
import "./index.css";
import{useState} from 'react'
import InputFields from "./testComponents/InputFields.js";


function App() {
  



  return (
    <div className="App">
      <PieChart ></PieChart>

      <InputFields></InputFields>
      
    </div>
  );
}

export default App;
