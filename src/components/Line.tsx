import React from "react";

export type LineProps = {
    text?: string,
    limit?: number,
    type?: string,
};

const Line: React.FC<LineProps> = ({text}) => {


  return (
    <div className="line">
        <h2>{`> `} {text}</h2>
    </div>
  );
};

export default Line;


// Future functionality:
//  the 'name' and 'username' will likely need to change in the future based on user input
//  via React's useState
