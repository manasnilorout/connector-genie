# AI Programming Assistant

This project is a web application that uses an AI to generate tests based on user input. It's built with React and uses the Axios library to make HTTP requests to the AI service. The application also features a dark mode for a better user experience.

## Features

- **Generates hooks**: The application takes user input in the form of a text area. Upon clicking the "Generate hooks" button, it sends a request to the AI service to generate hooks based on the input.

- **Test Generation**: The application takes user input in the form of a text area. Upon clicking the "Generate Tests" button, it sends a request to the AI service to generate tests based on the input.

- **Markdown Display**: The generated tests are displayed in a markdown format. The application uses the `react-markdown` library to parse the markdown and the `react-syntax-highlighter` library to add syntax highlighting to the code blocks.

- **Dark Mode**: The markdown section has a dark mode for a better viewing experience. This is achieved by using a dark theme for the syntax highlighter and setting the background color of the markdown section to a dark color.

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/yourrepository.git`
2. Install the dependencies: `npm install`
