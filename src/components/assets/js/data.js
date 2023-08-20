import enterTitleHere from '../images/enterTitleHere.gif';
import youTripToPara from '../images/youTripToPara.gif';
import spaceRage from '../images/spaceRage.gif';

import { MdOutlineHomeRepairService } from "react-icons/md"
import { GiGrass } from "react-icons/gi"
import { BsCardChecklist } from "react-icons/bs"
import { BiStoreAlt } from "react-icons/bi"

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
    subtitle: "Html, JavaScript, CSS, Handlebars",
    description: "This is a personal project, which I am still working on switching it to use .NET framework. It will be like a travel planner website, similar to redtag.ca or booking.com.",
    image: youTripToPara,
    alt: "yourTripToPara",
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
      key: "Responsible for installing state-of-the-art in-ground sprinkler systems for residential and commercial properties."
    }, {
      key: "Involved in the installation of landscape lighting. This includes strategically placing lighting fixtures to enhance the aesthetic appeal."
    }, {
      key: "A significant part of my role involves routine servicing and responding to repair calls. Regular maintenance is essential to ensure the systems operate at peak efficiency."
    }, {
      key: "Understood the value of excellent customer service. Actively engage with clients to understand their specific needs and preferences."
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
      key: "Operating machinery such as Kubota's Track Carrier to move materials around the facility efficiently and safely."
    }, {
      key: "Kept grounds up to standards by mowing lawns, trimming bushes, hedges, and trees, and ensuring the overall cleanliness of the area."
    }, {
      key: "Planted flowers strategically, considering colour schemes. I also established a watering schedule to ensure the flowers remained healthy and vibrant."
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
      key: "Meticulously followed test scripts designed to simulate user interactions and usage scenarios"
    }, {
      key: "Actively contributed to the improvement of the QA process by creating and editing test scripts"
    }, {
      key: "Upon detecting any bugs or problems during testing, I promptly reported them to the appropriate development and technical teams"
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
      key: "Assisted assisted customers in finding items and provided recommendations based on their preferences."
    }, {
      key: "Stocked, replenished, and organized merchandise to maintain a well-presented and orderly store."
    }, {
      key: "Prepared merchandise for the sales floor, including unpacking shipments and tagging items."
    }, {
      key: "Collaborated with colleagues to ensure the store ran smoothly and communicated effectively to resolve any issues."
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
