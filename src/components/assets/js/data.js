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
];

export const jobs = [
  {
    id: "job1",
    haveIcon: "icon",
    icon: <MdOutlineHomeRepairService style={{marginLeft: '6px', marginTop: '4px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 0,
    color: "#238176",
    title: "Service Technician",
    when: "April 2021 - August 2022",
    where: "Green Grass Lawn Sprinklers Ltd",
    desc: "Green Grass Lawn Sprinklers, is a company with an expertise in installation and servicing of professional sprinkler systems and landscape lighting.",
    acomp : [ {
      key: "Installed in-ground sprinkler systems"
    }, {
      key: "Installed landscape lighting"
    }, {
      key: "Serviced / repaired sprinkler systems"
    }, {
      key: "Customer service"
    } ],
    heightBox: 304
  },
  {
    id: "job2",
    haveIcon: "icon",
    icon: <GiGrass style={{marginLeft: '6px', marginTop: '-1px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 80,
    color: "#1F75AC",
    title: "Gardener / Landscaper",
    when: "May 2020 - September 2020",
    where: "Mount Sinai Memorial Park",
    desc: "Mount Sinai Memorial Park, is cemetery that offers burial, funeral and unveiling services.",
    acomp : [ {
      key: "Operated machinery such as Kubota’s Track Carrier"
    }, {
      key: "Kept grounds up to standards"
    }, {
      key: "Planted / Watered flowers"
    } ]
  },
  {
    id: "job3",
    haveIcon: "icon",
    icon: <BsCardChecklist style={{marginLeft: '6px', marginTop: '4.5px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 80,
    color: "#307B96",
    title: "Quality Assurance",
    when: "February 2020 - March 2020",
    where: "Edsby, Co-op",
    desc: "Edsby, is a software application that combines social networking with class and student management features.",
    acomp : [ {
      key: "Followed test scripts to find bugs in the website"
    }, {
      key: "Create / Edited test scripts for new parts of the website"
    }, {
      key: "Reported any bugs/problems to the appropriate team"
    } ]
  },
  {
    id: "job4",
    haveIcon: "icon",
    icon: <BiStoreAlt style={{marginLeft: '6px', marginTop: '5px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 80,
    color: "#a46476",
    title: "Store Associate",
    when: "May 2019 - September 2019",
    where: "Winners/Homesense",
    desc: "Winners and Homesense, are both Canadian stores owned by TJX companies. Winners, is a department store and Homesense, is a discount home furnishing store.",
    acomp : [ {
      key: "Assisted customers in finding or selecting items, and provided recommendations"
    }, {
      key: "Stocked, replenished, and organized inventory"
    }, {
      key: "Processed and prepared merchandise for the sales floor"
    }, {
      key: "Assisted customers in processing all refunds, exchanges, and purchases"
    } ],
    heightBox: 304
  }
];

export const skillslang = [
  {
    percent: "95",
    name: "JavaScript",
    color: "#238176",
  },
  {
    percent: "80",
    name: "Java",
    color: "#1F75AC",
  },
  {
    percent: "95",
    name: "HTML",
    color: "#307B96",
  },
  {
    percent: "90",
    name: "CSS",
    color: "#9A4D3D",
  },
  {
    percent: "90",
    name: "C++, C, C#",
    color: "#a46476",
  },
  {
    percent: "80",
    name: "SQL",
    color: "#238176",
  },
  {
    percent: "65",
    name: "jQuery",
    color: "#1F75AC",
  },
];