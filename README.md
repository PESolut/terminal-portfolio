# terminal-portfolio
Built with the React, this single-page application presents a software engineer’s profile through a UNIX-style terminal interface. It features dynamic, window-like modals for additional pages, including About, Contact, and Projects(POST MVP).

### Header Component (Current Update)

The `Header` component now accepts the following optional props:
- `name` (optional): If provided, displays the name in the greeting. Defaults to `'Jahaad Petty'` if not provided.
- `username` (optional): If provided, displays the username. Defaults to `'Jahaad Petty'` if not provided.

**Key Update:** 
- If neither `name` nor `username` are provided, default values will be used. 
- This setup lays the groundwork for future dynamic updates where these values can be changed later (e.g., user input or other logic).
  
**What’s Next?**  
- Later updates will likely involve dynamically overriding these default values. 
