import React from "react";
import PieChart from "./components/PieChart/PieChart.js";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Foods from './components/Foods';
import InputFields from "./testComponents/InputFields.js";
import AddFood from "./components/AddFood/AddFood.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/foods',
    element: <Foods />,
  },
]);

function App() {



  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;



