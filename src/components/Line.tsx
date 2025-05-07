import React from "react";

export type LineProps = {
    text?: string,
    limit?: number | null,
    type?: string,
};

const Line: React.FC<LineProps> = ({text = '', limit, type = 'user'}) => {
    const effectiveLimit = (limit ?? 80) - 3; 
    const chunks = text.match(new RegExp(`.{1,${effectiveLimit}}`, 'g')) || [];



  return (
    <>
      {chunks.map((chunk, i) => (
        <div key={i} className="line">
          <span className="prompt">{type === "user" ? ">" : ""}</span>
          {chunk}
        </div>
      ))}
    </>
  );
};

export default Line;


// Future functionality:
//  the 'name' and 'username' will likely need to change in the future based on user input
//  via React's useState
