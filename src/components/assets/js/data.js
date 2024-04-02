import enterTitleHere from '../images/enterTitleHere.gif';
import youTripToParadise from '../images/youTripToPara.gif';
import spaceRage from '../images/spaceRage.gif';
import techtutorhub from '../images/techtutorhub.gif';

import { MdOutlineHomeRepairService } from "react-icons/md"
import { GiGrass } from "react-icons/gi"
import { BsCardChecklist } from "react-icons/bs"
import { BiStoreAlt } from "react-icons/bi"
import { IoMdCart } from "react-icons/io";

export const skillslang = [
  {
    percent: "80",
    name: "JavaScript",
    color: "#238176",
  },
  {
    percent: "75",
    name: "Java",
    color: "#1F75AC",
  },
  {
    percent: "85",
    name: "HTML",
    color: "#307B96",
  },
  {
    percent: "85",
    name: "CSS, SCSS",
    color: "#9A4D3D",
  },
  {
    percent: "75",
    name: "C++, C, C#",
    color: "#a46476",
  },
  {
    percent: "70",
    name: "SQL",
    color: "#238176",
  },
  {
    percent: "70",
    name: "Python",
    color: "#1F75AC",
  },
];

export const jobs = [
  {
    id: "job1",
    haveIcon: "icon",
    icon: <IoMdCart style={{marginLeft: '5px', marginTop: '5px', fontSize: '30px', color: 'white'}}/>,
    style: 0,
    color: "#238176",
    side: "left",
    title: "Ecommerce Devopler / Manager ",
    when: "Jan 2024 - Present",
    where: "Amaryllis International Inc",
  },
  {
    id: "job2",
    haveIcon: "icon",
    icon: <MdOutlineHomeRepairService style={{marginLeft: '5px', marginTop: '4px', fontSize: '30px', color: 'white'}}/>,
    style: 150,
    color: "#1F75AC",
    side: "right",
    title: "Service Technician",
    when: "April 2021 - Octoeber 2023",
    where: "Green Grass Lawn Sprinklers Ltd",
  },
  {
    id: "job3",
    haveIcon: "icon",
    icon: <GiGrass style={{marginLeft: '5px', marginTop: '-1px', fontSize: '30px', color: 'white'}}/>,
    style: 150,
    color: "#307B96",
    side: "left",
    title: "Gardener / Landscaper",
    when: "May 2020 - September 2020",
    where: "Mount Sinai Memorial Park",
  },  
  {
    id: "job4",
    haveIcon: "icon",
    icon: <BsCardChecklist style={{marginLeft: '6px', marginTop: '6px', fontSize: '28px', color: 'white'}}/>,
    style: 150,
    color: "#a46476",
    side: "right",
    title: "QA Analyst",
    when: "February 2020 - March 2020",
    where: "Edsby, Co-op",
  },
  {
    id: "job5",
    haveIcon: "icon",
    icon: <BiStoreAlt style={{marginLeft: '5px', marginTop: '5px', fontSize: '30px', color: 'white'}}/>,
    style: 150,
    color: "#238176",
    side: "left",
    title: "Store Associate",
    when: "May 2019 - September 2019",
    where: "Winners/Homesense",
  }
];

export const projects = [
  {
    title: "Enter Title Here",
    subtitle: "Java",
    description: "Made this with a friend, Dexter Yan, in grade 11, the game is very similar to Boogle",
    image: enterTitleHere,
    alt: "enterTitleHere",
    width: "494",
    link: "https://github.com/ggruenspan/Enter-Title-Here",
  },
  {
    title: "Your Trip To Paradise",
    subtitle: "React, Node.js, Express, MongoDB",
    description: "This is a personal project, which I am still working on. It will be like a travel planner website, similar to redtag.ca or booking.com",
    image: youTripToParadise,
    alt: "youTripToParadise",
    width: "600",
    link: "https://github.com/ggruenspan/YourTripToParadise",
  },
  {
    title: "Space Rage",
    subtitle: "Python",
    description: "Made this with a friend back in grade 10, the game is very similar space invaders",
    image: spaceRage,
    alt: "spaceRage",
    width: "500",
    link: "https://github.com/ggruenspan/Space-Rage",
  },
  {
    title: "Tech Tutor Hub",
    subtitle: "Angular, Bootstrap, Node.js",
    description: "Tech Tutor Hub is a web app project using Angular, Node.js, and Bootstrap for finding tailored tutors. Features include user-friendly design, Mongoose for scalability, and robust security for authentication. Mobile-friendly and accessible.",
    image: techtutorhub,
    alt: "techtutorhub",
    width: "600",
    link: "https://github.com/ggruenspan/Tech-Tutor-Hub",
  },
];

export const otherProjects = [
  {
    title: "Fragment API",
    subtitle: "Html, JavaScript, CSS, AWS, Docker",
    description: "The user can get, create, and update any fragment with an ID that is stored in the database. It was developed utilizing Node.js and the Express module, and is hosted on Amazon Web Services and is complemented by the use of AWS Cognito, DynamoDB, S3 and Docker",
    link: "https://github.com/ggruenspan/fragments",
    link2: "https://github.com/ggruenspan/fragments-ui",
  },
  {
    title: "File Renaming Script",
    subtitle: "Python",
    description: "This script simplifies the process of renaming and organizing image files within a directory. Developed to streamline everyday tasks, it offers functionalities to rename files with sequential numbering and move them to a specified destination.",
    link: "https://github.com/ggruenspan/File-Renaming-Script",
  }
];
