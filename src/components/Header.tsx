import React from "react";

export type HeaderProps = {
    // The '?' symbol after each property indicates that the property is optional
    name?: string;
    username?: string;
};

const Header: React.FC<HeaderProps> = ({name ='Jahaad Petty', username='pesolut'}) => {
    /* If 'name' and 'username' are not passed in as props, the default values ('Default Name' and 'Guest') will be used.
    These default values can be overridden later if needed to update the name or username dynamically.
    Example: Setting new values based on a user action or external event.
    */
  return (
    <div className="header">
        <h1>{username}</h1>
    </div>
  );
};

export default Header;


// Future functionality:
//  the 'name' and 'username' will likely need to change in the future based on user input
//  via React's useState
