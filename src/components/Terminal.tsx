import React, {useState} from "react";
import NavBar from "./NavBar";
import "./Terminal.css";
import Header from "./Header";
import Line from "./Line";
import Ruler from "./Ruler";


const Terminal: React.FC = () => {
  const [charLimit, setCharLimit] = useState<number | null>(null)

  return (
    <div className="terminal">
      <Ruler onMeasure={setCharLimit}/>
      
      <NavBar/>
      <Header/>
      <Line/>
      <Line/>


    </div>
  );
};

export default Terminal;
