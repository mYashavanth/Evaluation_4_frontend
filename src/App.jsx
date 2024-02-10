import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
