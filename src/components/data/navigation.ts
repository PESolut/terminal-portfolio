export const navigationData = [
    {
        name: "home",
        path: "/",
        isActive: true,
        icon: null,
        onClick: () => {
            console.log("Navigating to home");
      },
    },
    {
        name: "projects",
        path: "/projects",
        isActive: false,
        icon: null,
        onClick: () => {
            console.log("Navigating to projects");
        },
    },
    {
        name: "about",
        path: "/about",
        isActive: false,
        icon: null,
        onClick: () => {
            console.log("Navigating to about");
      },
    },
  ];
  