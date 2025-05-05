import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import "./Terminal.css";
import Header from "./Header";
import Line from "./Line";
import Ruler from "./Ruler";

type LineData = {
  text: string;
  type: "animated" | "user";
};

const Terminal: React.FC = () => {
  const [charLimit, setCharLimit] = useState<number | null>(null)
  const [lines, setLines] = useState<LineData[]>([])

  useEffect(() => {
    const initialLines: LineData[] = [
      { text: "Initializing virtual interface...", type: "animated" },
      { text: "Loading kernel modules...", type: "animated" },
      { text: "Establishing encrypted link...", type: "animated" },
      { text: "Authenticating session...", type: "animated" },
      { text: "Welcome to Gridlock CLI.", type: "animated" },
    ];
    setLines(initialLines);

    const testLines: LineData[] = [
      // { text: `${'M'.repeat(2343)}`, type: "animated" },
    ];
    setLines(prevLines => [...prevLines, ...testLines])
  }, []);
  

  return (
    <div className="terminal">
      <Ruler onMeasure={setCharLimit}/>
      <NavBar/>
      <Header/>
      <div className="terminal-lines">
        {lines.map((line, idx) => (
          <Line
          key={idx}
          text={line.text}
          type={line.type}
          limit={charLimit}
          />
  ))}
</div>
      {/* <Line/>
      <Line/> */}


    </div>
  );
};

export default Terminal;
