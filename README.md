# terminal-portfolio
Built with the React, this single-page application presents a software engineer’s profile through a UNIX-style terminal interface. It features dynamic, window-like modals for additional pages, including About, Contact, and Projects(POST MVP).

### Line Component (Current Update)
The `Line` component now dynamically renders lines of text, which can either be static or animated. Each line is wrapped according to the screen size, preventing overflow. The text is typed out character by character to simulate a typing effect, making the terminal feel more interactive.

### Ruler Component (Current Update)
The `Ruler` component is responsible for measuring the screen width and calculating the number of characters that fit within the terminal window. It uses a hidden span to determine the width of a single character and then dynamically calculates the maximum character count per line.

### Header Component 

The `Header` component now accepts the following optional props:
- `name` (optional): If provided, displays the name in the greeting. Defaults to `'Jahaad Petty'` if not provided.
- `username` (optional): If provided, displays the username. Defaults to `'Jahaad Petty'` if not provided.

## What's Next?
- Animate Text (Non-User Input):

- Implement the animation for text that is not user-generated (e.g., system messages, pre-configured info, etc.). This will involve simulating typing effects for static content, such as project descriptions, greetings, or other terminal-like system output.

- Include adding dynamic delay and speed adjustments to simulate real-time typing.
