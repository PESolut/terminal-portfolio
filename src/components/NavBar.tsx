import React from "react";
import NavBarItem from "./NavBarItem";
import { navigationData } from './data/navigation'
import type { NavigationProps } from './NavBarItem';


const NavBar: React.FC = () => {
  return (
    <div className="navbar">
        {navigationData.map((nav: NavigationProps, idx: number) => (
            <NavBarItem key={idx} {...nav} />
        ))}
        
    </div>
  );
};

export default NavBar;
