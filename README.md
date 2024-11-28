# Real-time Markdown Editor with Live Preview

This project is a **real-time Markdown editor** built with **React** for the frontend and **Node.js** for the backend. It converts Markdown text to HTML in real-time and displays the HTML output in a live preview pane.

## Features
- Real-time Markdown to HTML conversion.
- Live preview of HTML output.
- Backend processing using Node.js to convert Markdown to HTML.
- Simple and clean user interface for editing and previewing Markdown.

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js, Express, Marked
- **Styling**: CSS

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js, but you can also install it separately.
- **Git**: [Install Git](https://git-scm.com/)

## Steps to Clone and Run the Project

### 1. Clone the Repository
Open your terminal and clone the repository using the following command:

```bash
git clone https://github.com/deepakkumar5396/markdown-editor

2. Navigate to the Project Folder
After cloning the repository, navigate into the project folder:

bash
Copy code
cd markdown-editor
3. Install Dependencies
Backend (Node.js)
Navigate to the backend folder and install the required dependencies:

bash
Copy code
cd backend
npm install
Frontend (React)
Navigate to the frontend folder and install the required dependencies:

bash
Copy code
cd ../frontend
npm install
4. Set Up and Run the Backend
In the backend folder, run the server with the following command:

bash
Copy code
npm run dev
This will start the Node.js server, which listens on port 5000 by default.

5. Run the Frontend
In a new terminal window, navigate to the frontend folder and run the React development server:

bash
Copy code
cd frontend
npm start
This will start the React development server and open the application in your default browser, typically at http://localhost:3000.

6. Open the Application
Open your browser and navigate to http://localhost:3000 to view the real-time Markdown editor.

You can start typing Markdown in the editor, and the converted HTML will appear in the live preview pane.

How It Works
As you type Markdown text in the editor, the frontend sends a POST request to the backend at http://localhost:5000/convert with the Markdown content. The backend uses the marked library to convert the Markdown text into HTML. The backend responds with the HTML, which is then displayed in the live preview pane on the frontend.

vbnet
Copy code

Make sure the `README.md` file is in the root directory of your project and properly committed to the repository. If you're still not seeing the full content, check for any file encoding issues or hidden characters. You can also preview the markdown locally on your computer by using any markdown viewer to make sure the formatting is correct.

This updated `README.md` file should display all the steps, tech stack, and instructions as expected on