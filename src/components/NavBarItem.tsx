import React from "react";

export type NavigationProps = {
    name: string;
    path: string;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    icon: React.ReactNode | null;
};

const NavBarItem: React.FC<NavigationProps> = ({ name, path, isActive, onClick, icon }) => {
  return (
    <div className="navbar">
        <h1>{name}</h1>
        
    </div>
  );
};

export default NavBarItem;
