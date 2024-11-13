import React from 'react';
import {
  SiGo,
  SiC,
  SiGit,
  SiRedis,
  SiKubernetes,
  SiApachekafka,
  SiGraphql,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiPytorch,     
  SiR, 
  SiDocker,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiLatex,

} from 'react-icons/si';
import { DiJava } from 'react-icons/di'; // Java icon
import { FaExchangeAlt } from 'react-icons/fa'; // Database and Exchange icons



function Resume() {
  const experiences = [
    // Professional Experiences
    {
      title: 'Bilibili Technology Co. Ltd | Backend Software Developer Intern (May 2024 – Aug 2024)',
      content: (
        <ul>
          <li>
            Developed a lottery-draw HTTP interface using Go and Redis with expiring key-value pairs, handling high concurrency for up to 50k users during Bilibili’s 15th anniversary live stream.
          </li>
          <li>
            Wrote a patent for Bilibili’s scalable IM system under the Kratos microservice framework, supporting asynchronous batch messaging for up to 10 million messages simultaneously.
          </li>
          <li>
            Designed a local IM system for chatbot servers using REST APIs, integrating a virtual Linux SQL cluster with automatic failover and read-write separation for improved reliability and performance.
          </li>
        </ul>
      ),
    },
    {
      title: 'Super Resolution Weather Forecasting Model | Undergraduate Research Assistant (July 2024 – Present)',
      content: (
        <ul>
          <li>
            Collaborated with Professor Ashok Veeraraghavan to develop a model improving regional precipitation data resolution.
          </li>
          <li>
            Applied diffusion models to train on low-resolution weather data and generate high-resolution precipitation images using PyTorch and StableSR.
          </li>
          <li>
            Developed a method to merge small images into larger maps, using diffusion models to enhance boundary consistency during backward inference.
          </li>
        </ul>
      ),
    },
    {
      title: 'Rice Apps | Full Stack Software Engineer (Aug 2024 – Present)',
      content: (
        <ul>
          <li>
            Collaborated on developing Rice Carpool, a ride-sharing platform for 4,000+ undergraduates, increasing rides created by 25% (260+ rides in the first month).
          </li>
          <li>
            Improved the search feature using React JS and updated GraphQL queries, allowing users to search rides by student ID.
          </li>
          <li>
            Redesigned the user interface to improve mobile-friendliness and simplify navigation, providing a cleaner, more intuitive user experience.
          </li>
        </ul>
      ),
    },
    {
      title: 'Algorithm Efficiency in LLMs | Undergraduate Research Assistant (Nov 2023 – July 2024)',
      content: (
        <ul>
          <li>
            Researched memory-efficient algorithms for fine-tuning LLMs under Professor Ben Hu, co-authoring a follow-up paper proposing a Column Row Sampling (CRS) method for matrix multiplication.
          </li>
          <li>
            Achieved up to 2.7× peak memory reduction with minimal accuracy loss during fine-tuning using the proposed estimator.
          </li>
          <li>
            Replaced general matrix multiplication with CRS in vision transformers, running 50+ experiments to evaluate its effect on image classification.
          </li>
        </ul>
      ),
    },
    {
      title: 'Tesla | Service Engineering Intern (Dec 2023 – Feb 2024)',
      content: (
        <ul>
          <li>
            Automated the deployment of Tesla’s Christmas software update using Linux-based diagnostic tools and Python, reducing deployment time by 7%.
          </li>
          <li>
            Conducted compatibility testing of software for the China market, utilizing Kafka for real-time data streaming and Kubernetes for container orchestration, ensuring 100% compliance and a 10% improvement in system stability.
          </li>
        </ul>
      ),
    },
    // Projects
    {
      title: 'SkyDB | Backend Software Engineer (Sep 2023 – Present)',
      content: (
        <ul>
          <li>
            Built a NoSQL document database from scratch using Go, implementing RESTful web services for JSON document creation, modification, retrieval, and deletion.
          </li>
          <li>
            Designed and enforced JSON schema validation for documents, ensuring data consistency with concurrent handling of requests, utilizing Go’s goroutines for efficient parallel processing.
          </li>
          <li>
            Implemented authentication, subscription mechanisms with server-sent events, and the visitor pattern for safe document traversal and modification during validation.
          </li>
        </ul>
      ),
    },
    {
      title: 'Personal Portfolio | Fullstack Software Engineer (Dec 2023 – Present)',
      content: (
        <ul>
          <li>
            Developing a web application from scratch for hosting future projects and acting as a personal portfolio.
          </li>
          <li>
            Learned full-stack web development using React and CSS, integrating Node.js libraries and Magic UI for enhanced interactivity.
          </li>
          <li>
            Designed and implemented UI/UX aspects to improve engagement and user interaction.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="resume">
       <h2 className="text-xl font-bold my-2">Experiences</h2>
      <div className="cards-container">
        {experiences.map((exp, index) => (
          <div className="card" key={index}>
            <h4>{exp.title}</h4>
            {exp.content}
          </div>
        ))}
      </div>
      
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-cloud">
        <div className="skill-icon">
          <SiPython className="icon" />
          <span>Python</span>
        </div>
        <div className="skill-icon">
          <DiJava className="icon" />
          <span>Java</span>
        </div>
        <div className="skill-icon">
          <SiGo className="icon" />
          <span>Go</span>
        </div>
        <div className="skill-icon">
          <SiMysql className="icon" />
          <span>Mysql</span>
        </div>
        <div className="skill-icon">
          <SiJavascript className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill-icon">
          <SiHtml5 className="icon" />
          <span>HTML</span>
        </div>
        <div className="skill-icon">
          <SiCss3 className="icon" />
          <span>CSS</span>
        </div>
        <div className="skill-icon">
          <SiDocker className="icon" />
          <span>Docker</span>
        </div>
        <div className="skill-icon">
          <SiC className="icon" />
          <span>C</span>
        </div>
        <div className="skill-icon">
          <SiGit className="icon" />
          <span>Git</span>
        </div>
        <div className="skill-icon">
          <SiReact className="icon" />
          <span>React</span>
        </div>
        <div className="skill-icon">
          <SiNodedotjs className="icon" />
          <span>Node.js</span>
        </div>
        <div className="skill-icon">
          <SiGraphql className="icon" />
          <span>GraphQL</span>
        </div>
        <div className="skill-icon">
          <SiRedis className="icon" />
          <span>Redis</span>
        </div>
        <div className="skill-icon">
          <SiApachekafka className="icon" />
          <span>Kafka</span>
        </div>
        <div className="skill-icon">
          <SiKubernetes className="icon" />
          <span>Kubernetes</span>
        </div>
        <div className="skill-icon">
          <FaExchangeAlt className="icon" />
          <span>RESTful APIs</span>
        </div>
        <div className="skill-icon">
          <SiPytorch className="icon" />
          <span>PyTorch</span>
        </div>
        <div className="skill-icon">
          <SiR className="icon" />
          <span>RStudio</span>
        </div>
        <div className="skill-icon">
          <SiLatex className="icon" />
          <span>Latex</span>
        </div>
      </div>
    </section>
  );
}
export default Resume;



//   );
// }

// export default Resume;
