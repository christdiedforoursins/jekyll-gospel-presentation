# The Gospel

## Project Overview

This is a simple, single-page website designed to share a clear and concise explanation of the Gospel message. It's built to be fast, responsive, and easy to navigate on any device. The content is written in Markdown for simple, text-based editing.

## Features

- **Responsive Design:** The layout automatically adjusts to fit various screen sizes, from desktops to mobile phones.
- **Dynamic Navigation:** A collapsible hamburger menu appears on smaller screens, allowing users to easily jump to different sections of the page.
- **Smooth Scrolling:** Links within the navigation provide a smooth, animated scroll to their corresponding sections on the page.
- **Clear & Simple Content:** The content is structured with headings and sections to present the message in an easy-to-read format.

## Technology Stack

- **HTML5:** Provides the core structure and layout of the website.
- **CSS3:** Handles all styling, including responsive design and layout for the hamburger menu.
- **Markdown:** Used for writing and organizing the main content in a simple, readable format.
- **Jekyll:** (Assumed) The project structure, including `_config.yaml` and the use of includes, suggests it is built on Jekyll, a static site generator.

## File Structure

- `_config.yaml`: Global site configuration (title, description, author).
- `index.md`: The main page content written in Markdown.
- `_includes/`: Contains reusable HTML components.
  - `footer.html`: The code for the site's footer.
  - `header.html`: The code for the site's header and navigation.
- `_layouts/`: Defines the basic page structure.
  - `default.html`: The primary layout that pulls together content and includes.
- `assets/`: Stores static assets like CSS files.
  - `css/style.css`: The main stylesheet for the entire project.

## How to Edit

1.  **Change Content:** Edit the `index.md` file to modify the text, add new sections, or update existing ones. Use Markdown syntax for formatting.
2.  **Adjust Styling:** To change the colors, fonts, or layout, modify the `assets/css/style.css` file.
3.  **Update Navigation:** To add or remove links from the menu, edit the `_includes/header.html` file.

This project is open for anyone to use and adapt for sharing the Gospel message.
