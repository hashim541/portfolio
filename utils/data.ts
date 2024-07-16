import harvardSvg from '../public/assets/svg/harvard.svg'
import hackerrankSvg from '../public/assets/svg/hackerrank.svg'
import fccSvg from '../public/assets/svg/fcc.svg'

import react from '../public/assets/svg/react.svg'
import next from '../public/assets/svg/next.svg'
import node from '../public/assets/svg/node.svg'
import express from '../public/assets/svg/express.svg'
import sqlSvg from '../public/assets/svg/sql.svg'
import mongodb from '../public/assets/svg/mongodb.svg'
import html from '../public/assets/svg/html.svg'
import css from '../public/assets/svg/css.svg'
import js from '../public/assets/svg/javascript.svg'
import git from '../public/assets/svg/git.svg'
import tailwind from '../public/assets/svg/tailwind.svg'
import ts from '../public/assets/svg/ts.svg'
import python from '../public/assets/svg/python.svg'
import c from '../public/assets/svg/c.svg'

export const certification = [
    {
        courseName: 'CS50X',
        url: 'https://certificates.cs50.io/cd313d1c-6c0e-4939-9e69-df6bdedb6950.pdf?size=letter',
        img:'cs50x.png',
        institute: {
            name: 'Harvard University',
            svg: harvardSvg
        }
    },
    {
        courseName: 'Frontend developer (React)',
        url: 'https://www.hackerrank.com/certificates/f0a202081047',
        img:'fdreact.png',
        institute: {
            name: 'Hackerrank',
            svg: hackerrankSvg
        }
    },
    {
        courseName: 'REST API (Intermediate)',
        url: 'https://www.hackerrank.com/certificates/58acc83edcd5',
        img:'rest.png',
        institute: {
            name: 'Hackerrank',
            svg: hackerrankSvg
        }
    },
    {
        courseName: 'SQL (Intermediate)',
        url: 'https://www.hackerrank.com/certificates/be3145f4b05f',
        img:'sql.png',
        institute: {
            name: 'Hackerrank',
            svg: hackerrankSvg
        }
    },
    {
        courseName: 'Responsive Web Design',
        url: 'https://www.freecodecamp.org/certification/fccbb485e8c-6a70-49b4-9981-abd088e1269c/responsive-web-design',
        img:'reswebdes.png',
        institute: {
            name: 'Free Code Camp',
            svg: fccSvg
        }
    },
    {
        courseName: 'Introduction to Programming in C',
        url: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS02S2434176403006784',
        img: 'cpro.jpg',
        institute: {
            name: 'NPTEL',
            svg:'nptel.jpg'
        }
    }
    
]

export const contact = [
    {
        site: 'Linked in',
        userId: 'linkedin.com/in/hashim541',
        url: 'https://www.linkedin.com/in/hashim541/',
        svg: '/assets/svg/linkedin.svg',
    },
    {
        site: 'GitHub',
        userId: 'github.com/hashim541',
        url: 'https://github.com/hashim541',
        svg: '/assets/svg/github.svg',
    },
    {
        site: 'Hackerrank',
        userId: 'hackerrank.com/profile/hashim00541x',
        url: 'https://www.hackerrank.com/profile/hashim00541x',
        svg: '/assets/svg/hackerrank.svg',
    },
    {
        site: 'Mail',
        userId: 'hashim00541x@gmail.com',
        url: 'https://mail.google.com/mail/u/0/?to=hashim00541x@gmail.com&fs=1&tf=cm',
        svg: '/assets/svg/gmail.svg',
    },
]

export const skills = [
    { name:'React.js', svg: react },
    { name:'Next.js', svg: next },
    { name:'Node.js', svg: node },
    { name:'Express.js', svg: express },
    { name:'SQL', svg: sqlSvg },
    { name:'Mongodb', svg: mongodb },
    { name:'Tailwind', svg: tailwind },
    { name:'HTML5', svg: html },
    { name:'CSS3', svg: css },
    { name:'Javascript', svg: js },
    { name:'Typescript', svg: ts },
    { name:'Python', svg: python },
    { name:'C', svg: c },
    { name:'Git', svg: git },
]
export const projects = {
    fullStack: [
        {
            name: 'Thread',
            code:'https://github.com/hashim541/Thread-',
            live: 'https://thread-one.vercel.app/',
            design: 'thread.png',
            desc:'Developed a full-stack web application with Next.js, Clerk, Tailwind, and MongoDB, featuring a platform for threads with multi-level comments and image uploads. Implemented search with pagination for efficient content discovery, designed an intuitive UI to enhance user experience, and integrated recommendations for users and communities to boost engagement.',
            tech: ['Next', 'Tailwind', 'Mongodb']
        },
        {
            name: 'Smart Prompt',
            code:'https://github.com/hashim541/smart-prompt',
            live: 'https://smart-prompt-nu.vercel.app',
            design: 'smartp.png',
            desc:'Developed a web application using Next.js, TailwindCSS, and MongoDB that allows users to share prompts for AI-powered platforms. Integrated next-auth with Google Auth provider for seamless login. The application features search functionality by username, prompt, and tag, and enables users to perform CRUD operations on prompts.',
            tech: ['Next', 'Tailwind', 'Mongodb']
        },
        {
            name: 'Gsheetdb',
            code:'https://github.com/hashim541/gsheetdb',
            live: 'https://hashim541.github.io/gsheetdb',
            design: 'gsheet.png',
            desc:'Built a robust API using React.js, Node.js, Express.js, and MongoDB, leveraging Google Spreadsheet as a database. Implemented CRUD endpoints with advanced sorting and filtering capabilities. Integrated a caching mechanism to drastically reduce data retrieval time from 2 seconds to under 30ms, ensuring type safety and dynamic schema generation for seamless functionality.',
            tech: ['React', 'Node', 'Express', 'Mongodb']
        },
        {
            name: 'Ezproject',
            code:'https://github.com/hashim541/ezproject',
            live: 'https://hashim541.github.io/ezproject',
            design: 'ezproject.png',
            desc:'Developed a full-stack web application with React.js, Node.js, Express.js, and PostgreSQL, designed for developers to showcase projects and build profiles. Implemented a recommendation system for new users and latest projects, along with advanced search functionality. Enabled users to visit and view profiles and projects of other developers, and edit their own profiles and projects. Enhanced user interaction and profile management through dynamic content rendering and efficient data handling.',
            tech: ['React', 'Node', 'Express', 'PostgreSql']
        },
        {
            name: 'Nike Landing Page',
            code:'https://github.com/hashim541/nike_landing_page',
            live: 'https://hashim541.github.io/nike_landing_page',
            design: 'nike.png',
            desc:'Developed a landing page utilizing React.js, TailwindCSS, and Framer Motion. Designed a clean and responsive user interface to showcase the product, incorporating smooth animations through TailwindCSS and Framer Motion. Ensured semantic HTML5 usage and adhered to React best practices for creating components, delivering a sleek and effective web design across all devices and media types.',
            tech: ['React', 'Tailwind', 'Framer motion']
        },
        {
            name: 'UltimateXO',
            code:'https://github.com/hashim541/ultimate-xo',
            live: 'https://ultimate-xo.vercel.app/',
            design: 'xo.png',
            desc:'Developed an simple Tic-Tac-Toe with Next.js and TailwindCSS with infinite game mode and upto 4 players can play in a board.',
            tech: ['Next', 'Tailwind']
        },
    ],
    fem: {
        set1: [
            {
              "name": "Age Calculator App",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Age-calculator-app",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Age-calculator-app",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Age-calculator-app/design/desktop-preview.jpg"
            },
            {
              "name": "Article Preview Component",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Article-preview-component",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Article-preview-component",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Article-preview-component/design/desktop-preview.jpg"
            },
            {
              "name": "Base Apparel Coming Soon",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Base-apparel-coming-soon",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Base-apparel-coming-soon",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Base-apparel-coming-soon/design/desktop-preview.jpg"
            },
            {
              "name": "Expenses Chart Component",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Expenses-chart-component",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Expenses-chart-component",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Expenses-chart-component/design/desktop-preview.jpg"
            },
            {
              "name": "FAQ Accordion Card",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Faq-accordion-card",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Faq-accordion-card",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Faq-accordion-card/design/desktop-preview.jpg"
            },
            {
              "name": "Four Card Feature Section",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Four-card-feature-section",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Four-card-feature-section",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Four-card-feature-section/design/desktop-preview.jpg"
            },
            {
              "name": "Huddle Landing Page with Single Introductory Section",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Huddle-landing-page-with-single-introductory-section",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Huddle-landing-page-with-single-introductory-section",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Huddle-landing-page-with-single-introductory-section/design/desktop-preview.jpg"
            },
            {
              "name": "Interactive Card Details Form",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Interactive-card-details-form",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Interactive-card-details-form",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Interactive-card-details-form/design/desktop-preview.jpg"
            },
            {
              "name": "Interactive Rating Component",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Interactive-rating-component",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Interactive-rating-component",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Interactive-rating-component/design/desktop-preview.jpg"
            },
            {
              "name": "Intro Component with Signup Form",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Intro-component-with-signup-form",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Intro-component-with-signup-form",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Intro-component-with-signup-form/design/desktop-preview.jpg"
            },
            {
              "name": "Intro Section with Dropdown Navigation",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Intro-section-with-dropdown-navigation",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Intro-section-with-dropdown-navigation",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Intro-section-with-dropdown-navigation/design/desktop-preview.jpg"
            },
            {
              "name": "News Homepage",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/News-homepage",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/News-homepage",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/News-homepage/design/desktop-preview.jpg"
            },
            {
              "name": "Newsletter Signup with Success Message",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Newsletter-sign-up-with-success-message-main",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Newsletter-sign-up-with-success-message-main",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Newsletter-sign-up-with-success-message-main/design/desktop-preview.jpg"
            },
            {
              "name": "NFT Preview Card Component",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Nft-preview-card-component",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Nft-preview-card-component",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Nft-preview-card-component/design/desktop-preview.jpg"
            },
            {
              "name": "Notifications Page",
              "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Notifications-page",
              "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Notifications-page",
              "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Notifications-page/design/desktop-preview.jpg"
            },
            
          ],
        set2: [
            {
                "name": "Order Summary Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Order-summary-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Order-summary-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Order-summary-component/design/desktop-preview.jpg"
            },
            {
                "name": "Ping Coming Soon Page",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Ping-coming-soon-page",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Ping-coming-soon-page",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Ping-coming-soon-page/design/desktop-preview.jpg"
            },
            {
                "name": "Product Preview Card Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Product-preview-card-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Product-preview-card-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Product-preview-card-component/design/desktop-preview.jpg"
            },
            {
                "name": "Profile Card Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Profile-card-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Profile-card-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Profile-card-component/design/desktop-preview.jpg"
            },
            {
                "name": "QR Code Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Qr-code-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Qr-code-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Qr-code-component/design/desktop-preview.jpg"
            },
            {
                "name": "Results Summary Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Results-summary-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Results-summary-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Results-summary-component/design/desktop-preview.jpg"
            },
            {
                "name": "Single Price Grid Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Single-price-grid-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Single-price-grid-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Single-price-grid-component/design/desktop-preview.jpg"
            },
            {
                "name": "Social Proof Section",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Social-proof-section",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Social-proof-section",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Social-proof-section/design/desktop-preview.jpg"
            },
            {
                "name": "Stats Preview Card Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Stats-preview-card-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Stats-preview-card-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Stats-preview-card-component/design/desktop-preview.jpg"
            },
            {
                "name": "Three Column Preview Card Component",
                "code": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Three-column-preview-card-component",
                "live": "https://hashim541.github.io/FrontEnd-Mentor-Projects/Three-column-preview-card-component",
                "design": "https://github.com/hashim541/FrontEnd-Mentor-Projects/tree/main/Three-column-preview-card-component/design/desktop-preview.jpg"
            }]
    }
}
