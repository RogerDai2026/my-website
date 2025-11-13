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



function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  
  React.useEffect(() => {
    const currentRef = domRef.current; // Make a local copy of domRef.current

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local copy here
      }
    };
  }, []);
  
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


function Resume() {
  const experiences = [
    // Professional Experiences (updated to match Qiushi Dai resume)
    {
      title: 'Bytedance | Software Development Intern (Jul 2024 – Sep 2024)',
      content: (
        <ul>
          <li>
            Collaborated on an AI-driven A/B testing assistant for the Custom Data Platform (CDP), integrating LLM guidance to automate test configuration and decision-making.
          </li>
          <li>
            Contributed to a retrieval-augmented generation (RAG) pipeline for the assistant using LangChain, connecting external data sources and leveraging memory modules to store historical test results, reducing hallucinations by 15%.
          </li>
        </ul>
      ),
    },
    {
      title: 'Bilibili Tech | Backend Software Developer Intern (May 2024 – Jul 2024)',
      content: (
        <ul>
          <li>
            Engineered a high-performance lottery-draw service using Go and Redis, supporting ~50k concurrent users and improving scalability.
          </li>
          <li>
            Authored a patent for a scalable instant messaging system built on the Kratos microservice framework, enabling efficient processing of large message volumes.
          </li>
          <li>
            Designed and implemented a REST API–driven chat system with an auto-failover Linux SQL cluster within an Agile workflow.
          </li>
        </ul>
      ),
    },
    {
      title: 'Tesla | Service Engineering Intern (Dec 2023 – Feb 2024)',
      content: (
        <ul>
          <li>
            Automated the China-market “Christmas” OTA build and deployment in a Kubernetes-based pipeline, replacing region-specific in-car applications via region flags with unit tests verifying substitutions.
          </li>
          <li>
            Improved privacy controls by managing sensitive values with Kubernetes Secrets and separating configuration with ConfigMaps, limiting access to production data and removing user identifiers from logs.
          </li>
        </ul>
      ),
    },
    {
      title: 'Rice Apps | Full Stack Software Engineer (Aug 2024 – Present)',
      content: (
        <ul>
          <li>
            Co-developed BunkMate, a housing search platform for 4,000+ undergraduates using a responsive TypeScript/HTML/CSS frontend and a Node.js/Supabase backend.
          </li>
          <li>
            Implemented search features with auto-filters and map integration, achieving over 90% test coverage for critical flows.
          </li>
          <li>
            Implemented subscription features with automatic email reminders for favorited listings and expiring rentals.
          </li>
        </ul>
      ),
    },
    // Research Experiences
    {
      title: 'Monocular Depth Estimation with Event Stream | Undergraduate Research Assistant (Jan 2025 – Present)',
      content: (
        <ul>
          <li>
            Developed a latent-space diffusion model for depth prediction from sparse event streams; drafting a first-author paper under Prof. Ashok Veeraraghavan.
          </li>
          <li>
            Designed and trained a cross-modal autoencoder that encodes event data and depth maps into a shared latent space using a Mixture-of-Experts framework for efficient compression.
          </li>
          <li>
            Created a high-resolution synthetic event–depth dataset in CARLA to mitigate data scarcity and evaluated models on MVSEC and DSEC benchmarks.
          </li>
        </ul>
      ),
    },
    {
      title: 'Generative Precipitation Downscaling Model | Undergraduate Research Assistant (May 2024 – May 2025)',
      content: (
        <ul>
          <li>
            Collaborated with Prof. Ashok Veeraraghavan to develop a generative model that improves regional precipitation resolution using diffusion models.
          </li>
          <li>
            Applied diffusion-based methods to generate high-resolution precipitation images from low-resolution inputs and developed techniques to merge small image tiles during backward inference for large-area downscaling.
          </li>
          <li>
            Paper published in IEEE Transactions on Geoscience and Remote Sensing (TGRS), 2025.
          </li>
        </ul>
      ),
    },
    {
      title: 'Column Row Sampling in Vision Transformer | Undergraduate Research Assistant (Nov 2023 – Jul 2024)',
      content: (
        <ul>
          <li>
            Researched memory-efficient fine-tuning algorithms (WTA-CRS) with Prof. Ben Hu and implemented the estimator during the fine-tuning stage.
          </li>
          <li>
            Ran 50+ experiments applying WTA-CRS as a drop-in replacement for general matrix multiplication in vision transformers, measuring peak memory, throughput, and accuracy.
          </li>
          <li>
            Demonstrated peak GPU memory savings with minimal accuracy impact and summarized findings to guide model/training configuration choices.
          </li>
        </ul>
      ),
    },
        {
      title: 'OwlDB | Backend Developer (Sep 2023 – Present)',
      content: (
        <ul>
          <li>
            Built a NoSQL database in Go with a RESTful API and a concurrent skip-list index for efficient searching.
          </li>
          <li>
            Ensured data integrity with JSON Schema validation, atomic conditional writes, JSON Patch support, and goroutine-safe synchronization.
          </li>
          <li>
            Added token-based authentication with expiring tokens and real-time Server-Sent Events subscriptions for documents and collections.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="resume">
      <h2>Experiences</h2>
      <div className="cards-container">
        {experiences.map((exp, index) => (
          <FadeInSection key={index}>
            <div className="card">
              <h4>{exp.title.split('|')[0]}</h4> 
              <h5>{exp.title.split('|')[1]}</h5>
              {exp.content}
            </div>
          </FadeInSection>
        ))}
      </div>
      <h3>Skills</h3>

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
