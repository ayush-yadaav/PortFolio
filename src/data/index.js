import noteNest from '../assets/image/notenest.jpg'
import ticTacToe from '../assets/image/tictactoe.jpg'
import gameMania from '../assets/image/gamemania.jpg'
import staffManegment from '../assets/image/staff.png'
import recipeFinder from '../assets/image/recipefinder.png'
import genEmail from '../assets/image/genemail.png'
import newsSummarizer from '../assets/image/newssummarizer.png'

import cssPng from '../assets/skill/css.png'
import ejsPng from '../assets/skill/ejs.png'
import gitPng from '../assets/skill/git.png'
import htmlPng from '../assets/skill/html-5.png'
import jsPng from '../assets/skill/js.png'
import nodejsPng from '../assets/skill/node-js.png'
import reactPng from '../assets/skill/react.png'
import tailwindPng from '../assets/skill/tailwind.png'


export const navItem = ['about', 'project', 'skill', 'contact'];


export const  projects = [
  {
    id: 1,
    title: "Note Nest",
    content: "Note Nest is a simple and responsive note-taking app for storing quick thoughts and important text.",
    full: "Note Nest is a lightweight, user-friendly note-taking application built to help users quickly create, update, and manage their personal notes or text-based reminders. Designed with a clean interface and responsive layout, it allows for fast and organized note keeping. Whether you're planning tasks, writing ideas, or saving code snippets, Note Nest keeps your notes safe and accessible.",
    image: noteNest,
    link: "https://note-nest-ak.vercel.app",
    github: "https://github.com/ayush-yadaav/NoteNest.git"
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    content: "A simple Tic Tac Toe game built with React. Play against a friend and enjoy clean, responsive UI..",
    full: "This is a classic Tic Tac Toe game developed using React. It features a two-player mode, turn-based logic, and automatic win/draw detection. The interface is responsive and styled with Tailwind CSS. It was a great project for practicing state management and conditional rendering in React.",
    image: ticTacToe,
    link: "https://tic-tac-toe-ten-hazel.vercel.app/",
    github: "https://github.com/ayush-yadaav/Tic-Tac-Toe.git"
  },
  {
    id: 3,
    title: "Game Mania",
    content: "GameMania is a responsive web app with multiple mini-games, built using Html Css Js, offering smooth gameplay and a clean UI.",
    full: "GameMania is a web-based collection of casual mini-games like puzzles, memory tests, and reaction challenges. Built with React and Tailwind CSS, it features a responsive design, light/dark mode, and local high score tracking. It offers a smooth single-page experience for users seeking quick, fun gameplay across all devices.",
    image: gameMania,
    link: "https://games-mania.netlify.app/",
    github: "https://github.com/ayush-yadaav/Game-Mania.git"
  },
  {
    id: 4,
    title: "Staff Manegment",
    content: "Staff Management is a responsive web app to manage employee data, built with React, featuring CRUD operations and role-based views.",
    full: "Staff Management is a web application designed to handle employee records efficiently. It supports adding, updating, and deleting staff details, with features like role-based access, search, and filter. Built using React and Tailwind CSS, the app ensures a clean, responsive UI for managing staff data across devices.",
    image: staffManegment,
    link: "https://yourstore.com",
    github: "https://github.com/ayush-yadaav/Staff-Manegment.git"
  },
  {
    id: 5,
    title: "Recipe Finder",
    content: "A responsive React app to find recipes instantly by name or cuisine. It shows ingredients, instructions, and uses Spoonacular API with clean UI and modals.",
    full: "Discover recipes for your favorite meals instantly. Whether you're craving Indian food or global cuisine, simply search by name or category to view detailed ingredients and easy-to-follow instructions. A simple and helpful way to find inspiration and cook something amazing at home.",
    image: recipeFinder,
    link: "https://recipe-finder-ten-kohl.vercel.app/",
    github: "https://github.com/ayush-yadaav/Recipe-Finder.git"
  },
  {
    id: 6,
    title: "Gen Email",
    content: "GenMail is a smart and intuitive web application designed to help users instantly generate professional, personalized emails using AI.",
    full: "A smart email generation tool built with React that leverages the Gemini API to create context-aware, professionally written emails. Users can input a brief message or prompt, and the system instantly generates polished email drafts suitable for various use cases like job applications, formal communication, or casual responses.",
    image: genEmail,
    link: "gen-email-five.vercel.app",
    github: "https://github.com/ayush-yadaav/GenEmail"
  },
  {
    id: 7,
    title: "News Summarizer",
    content: "News Summarizer is your smart AI tool to stay updated quickly. You can summarize any news instantly by entering text or a URL. The platform also provides the latest headlines in the News Section, keeping you informed with fresh and reliable updates. You can save your favorite summaries to the Saved Summaries page for later reading and easily manage your details through your Profile Section. With secure user authentication and complete data privacy, your information stays protected. Stay informed, save time, and read smarter with News Summarizer — your shortcut to smarter news consumption.",
    image: newsSummarizer,
    link: "https://news-summarizer-frontend-sigma.vercel.app",
    github: "https://github.com/ayush-yadaav/News-Summarizer-Frontend.git"
  },
  // Add more projects...
];

export const skills = [
  {
    item: 'HTML',
    img: htmlPng
  },
  {
    item: 'CSS',
    img: cssPng
  },
  {
    item: 'JavaScript',
    img: jsPng
  },
  {
    item: 'React',
    img: reactPng
  },
  {
    item: 'Tailwind CSS',
    img: tailwindPng
  },
  {
    item: 'Git',
    img: gitPng
  },
  {
    item: 'Express',
    img: ejsPng
  },
  {
    item: 'Node.js',
    img: nodejsPng
  },
];
