import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Smartphone,
  UserRound,
  X,
} from "lucide-react";
import "./styles.css";

const githubUrl = "https://github.com/Megersa21";
const linkedinUrl = " https://linkedin.com/in/megersa-bekele-8a067b441";
const email = "juniorbek21@gmail.com";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
   { name: "C++", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Learning" },
  { name: "Flutter", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "Node.js", level: "Learning" },
  //{ name: "Git & GitHub", level: "Advanced" },
];

const projects = [
  {
    number: "01",
    title: "Flutter Mobile Application",
    description:
      "A mobile application developed with Flutter as part of a university group project. It gave me practical experience with mobile UI, application structure, and teamwork.",
    tags: ["Flutter", "Dart", "Mobile"],
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Employee Management System",
    description:
      "A web-based employee management project built with HTML, CSS, JavaScript, and PHP. The project focused on managing employee information through a practical web interface.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    icon: Code2,
  },
  {
    number: "03",
    title: "More Projects Coming",
    description:
      "I am currently expanding my portfolio with full-stack projects using React, Node.js, Express.js, databases, REST APIs, authentication, and deployment.",
    tags: ["React", "Node.js", "Express", "Database"],
    icon: ArrowUpRight,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          MB<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            )
          )}
          <a className="nav-cta" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Available for Job
            </p>
            <h1>
              Hi, I'm <span>Megersa Bekele.</span>
              <br />
              I build digital experiences.
            </h1>
            <p className="hero-text">
              Full-Stack Developer & Mobile App Developer focused on building
              practical, user-friendly applications and growing through
              real-world software development.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href={`mailto:${email}`}>
                Contact me <Mail size={17} />
              </a>
            </div>

            <div className="social-row">
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a
                href={linkedinUrl || "#contact"}
                onClick={(e) => !linkedinUrl && e.preventDefault()}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <small>megersa.js</small>
              </div>
              <pre>
{`const developer = {
  name: "Megersa Bekele",
  role: "Full-Stack Developer",
  mobile: "Flutter Developer",
  education: "Software Engineering",
  university: "Dire Dawa University",
  learning: [
    "React",
    "Node.js",
    "REST APIs",
    "postgreSQL",
  ]
};

developer.build();`}
              </pre>
            </div>
            <div className="floating-badge">
              <Code2 size={18} />
              <span>Building & learning</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 — About me</p>
            <h2>Turning ideas into <span>working products.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm Megersa Bekele, a Software Engineering student and aspiring
                full-stack developer and mobile app developer. I enjoy creating
                useful applications and learning how frontend, backend, and
                databases work together.
              </p>
              <p>
                My previous university group projects include a Flutter mobile
                application and an Employee Management System built with
                HTML, CSS, JavaScript, and PHP.
              </p>
              <p>
                During my internship, I want to strengthen my practical skills
                in React, Node.js, Express.js, databases, REST APIs, Git/GitHub,
                testing, deployment, teamwork, and professional development
                workflows.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact">
                <GraduationCap size={23} />
                <div>
                  <strong>Software Engineering</strong>
                  <span>Dire Dawa University</span>
                </div>
              </div>
              <div className="fact">
                <Smartphone size={23} />
                <div>
                  <strong>Mobile Development</strong>
                  <span>Flutter & Dart</span>
                </div>
              </div>
              <div className="fact">
                <Code2 size={23} />
                <div>
                  <strong>Web Development</strong>
                  <span>Frontend + Backend learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">02 — Skills</p>
            <h2>My current <span>toolkit.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-number">0{index + 1}</div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 — Selected projects</p>
              <h2>Things I've <span>built.</span></h2>
            </div>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              View GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="projects-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-icon"><Icon size={26} /></div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <a
                    className="project-link"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={19} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">04 — Education</p>
            <h2>My <span>education.</span></h2>
          </div>

          <div className="education-card">
            <div className="education-icon"><GraduationCap size={34} /></div>
            <div>
              <p className="education-label">University</p>
              <h3>Dire Dawa University</h3>
              <p>Software Engineering</p>
              <span>Currently building my academic foundation through software development projects and practical learning.</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <p className="eyebrow">05 — Contact</p>
            <h2>Let's build something <span>useful.</span></h2>
            <p>
              I'm open to internship opportunities, collaborative projects,
              and conversations about software development.
            </p>

            <div className="contact-actions">
              <a className="button primary" href={`mailto:${email}`}>
                <Mail size={18} /> {email}
              </a>
              <a className="button secondary" href={githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              {linkedinUrl ? (
                <a className="button secondary" href={linkedinUrl} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              ) : (
                <span className="button disabled">
                  <Linkedin size={18} /> Add LinkedIn
                </span>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Megersa Bekele</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);