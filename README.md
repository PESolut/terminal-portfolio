# terminal-portfolio
Built with the React, this single-page application presents a software engineer's profile through a UNIX-style terminal interface. It features dynamic, window-like modals for additional pages, including About, Contact, and Projects(POST MVP).

## Components

### Terminal Component (Latest Update)
The `Terminal` component now implements a queue-based animation system that:
- Processes lines sequentially
- Renders animated text with typewriter effects
- Waits for each animation to complete before starting the next line
- Provides a fluid, terminal-like experience

### Line & AnimatedLine Components 
The application now has two text display components:
- `Line`: Renders static text with proper line wrapping
- `AnimatedLine`: Displays text with a typewriter animation effect using the custom Typify library

### Typify Library
A custom TypeScript animation library that:
- Provides typewriter-style text animations
- Supports customizable typing speed and behavior
- Includes proper cleanup and memory management
- Based on MIT-licensed code

### Ruler Component
The `Ruler` component is responsible for measuring the screen width and calculating the number of characters that fit within the terminal window. It uses a hidden span to determine the width of a single character and then dynamically calculates the maximum character count per line.

### Header Component 
The `Header` component accepts the following optional props:
- `name` (optional): If provided, displays the name in the greeting. Defaults to `'Jahaad Petty'` if not provided.
- `username` (optional): If provided, displays the username. Defaults to `'Jahaad Petty'` if not provided.

## What's Next?
- Implement project showcase feat. ( window system)
- Add user input handling for a fully interactive CLI experience
