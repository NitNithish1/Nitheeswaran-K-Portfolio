export const standaloneHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nitheeswaran K | Full-Stack & DevOps Developer</title>
  <meta name="description" content="Personal portfolio of Nitheeswaran K - Full-Stack Developer and DevOps Enthusiast." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
  <!-- Lucide Icons via CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>

  <!-- Background Ambient Mesh -->
  <div class="bg-glow glow-1"></div>
  <div class="bg-glow glow-2"></div>

  <!-- Header / Navigation -->
  <header class="header" id="header">
    <div class="container nav-container">
      <a href="#hero" class="brand-logo">
        <span class="logo-bracket">&lt;</span>Nitheeswaran<span class="logo-accent">.K</span><span class="logo-bracket">/&gt;</span>
      </a>

      <nav class="nav-links" id="navLinks">
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#contact" class="nav-link">Contact</a>
        <a href="#contact" class="btn btn-primary btn-sm">Hire Me</a>
      </nav>

      <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation">
        <i data-lucide="menu"></i>
      </button>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="section hero" id="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-pulse"></span>
          Available for Internships & Full-Time Roles
        </div>
        <h1 class="hero-title">
          Hi, I'm <span class="gradient-text">Nitheeswaran K</span>
          <br>
          <span class="sub-title">Full-Stack & DevOps Engineer</span>
        </h1>
        <p class="hero-bio">
          Passionate Computer Science student crafting scalable web applications, automated cloud CI/CD pipelines, and intelligent AI-driven solutions.
        </p>
        
        <div class="hero-cta-group">
          <a href="#projects" class="btn btn-primary">
            <span>View My Work</span>
            <i data-lucide="arrow-right"></i>
          </a>
          <a href="#contact" class="btn btn-secondary">
            <span>Get In Touch</span>
          </a>
        </div>

        <div class="hero-socials">
          <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
            <i data-lucide="github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nitheeswaran-k-63a49a36a/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
            <i data-lucide="linkedin"></i>
          </a>
          <a href="https://leetcode.com/u/nithish_1245/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LeetCode">
            <i data-lucide="code-2"></i>
          </a>
          <a href="mailto:knitheeswaran3@gmail.com" class="social-icon" aria-label="Email">
            <i data-lucide="mail"></i>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="terminal-card">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <span class="terminal-title">developer-profile.json</span>
          </div>
          <div class="terminal-body">
            <pre><code><span class="t-key">"name"</span>: <span class="t-val">"Nitheeswaran K"</span>,
<span class="t-key">"role"</span>: <span class="t-val">"Full Stack & DevOps"</span>,
<span class="t-key">"education"</span>: <span class="t-val">"B.E. CSE @ V.S.B (CGPA 7.5)"</span>,
<span class="t-key">"recentRole"</span>: <span class="t-val">"DevOps Intern @ Vaizai Solutions"</span>,
<span class="t-key">"coreStack"</span>: [
  <span class="t-val">"React"</span>, <span class="t-val">"TypeScript"</span>, <span class="t-val">"Python"</span>,
  <span class="t-val">"Node.js"</span>, <span class="t-val">"CI/CD"</span>, <span class="t-val">"Gemini AI"</span>
],
<span class="t-key">"location"</span>: <span class="t-val">"Coimbatore, India"</span>,
<span class="t-key">"status"</span>: <span class="t-green">"Ready to innovate"</span></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="section about-section" id="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">A glimpse into my background, academic journey, and passion for engineering.</p>
      </div>

      <div class="about-grid">
        <div class="about-card">
          <h3 class="card-heading">
            <i data-lucide="user-check"></i>
            Professional Summary
          </h3>
          <p class="about-text">
            I am a forward-thinking Computer Science student at <strong>V.S.B College of Engineering Technical Campus</strong>, Coimbatore. My objective is to grow as a modern tech professional by learning new-age technologies and contributing innovative solutions.
          </p>
          <p class="about-text">
            My experience spans full-stack web and mobile development, DevOps pipeline automation during my internship at <strong>Vaizai Solutions</strong>, and building AI diagnostic software with Computer Vision and Gemini.
          </p>
        </div>

        <div class="about-card">
          <h3 class="card-heading">
            <i data-lucide="graduation-cap"></i>
            Education & Background
          </h3>
          <div class="education-item">
            <div class="edu-header">
              <span class="edu-degree">B.E. Computer Science and Engineering</span>
              <span class="edu-score">CGPA 7.5 / 10</span>
            </div>
            <p class="edu-inst">V.S.B College of Engineering Technical Campus, Coimbatore</p>
            <span class="edu-period">2023 — 2027</span>
          </div>

          <div class="education-item mt-4">
            <div class="edu-header">
              <span class="edu-degree">H.S.C Higher Secondary Education</span>
              <span class="edu-score">67%</span>
            </div>
            <p class="edu-inst">Little Flower Hr. Sec. School</p>
            <span class="edu-period">2021 — 2023</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="section skills-section" id="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Technical Skills</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">Technologies and developer tools I use to build scalable systems.</p>
      </div>

      <div class="skills-grid">
        <!-- Programming Languages -->
        <div class="skill-category-card">
          <div class="category-header">
            <div class="cat-icon-box"><i data-lucide="code"></i></div>
            <h3>Programming Languages</h3>
          </div>
          <div class="skills-tags">
            <span class="skill-tag">Java</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">JavaScript (ES6+)</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">HTML5 & CSS3</span>
            <span class="skill-tag">Dart</span>
          </div>
        </div>

        <!-- Frontend & Mobile -->
        <div class="skill-category-card">
          <div class="category-header">
            <div class="cat-icon-box"><i data-lucide="layout"></i></div>
            <h3>Frontend & Mobile</h3>
          </div>
          <div class="skills-tags">
            <span class="skill-tag">React.js</span>
            <span class="skill-tag">Tailwind CSS</span>
            <span class="skill-tag">Flutter</span>
            <span class="skill-tag">Responsive UI/UX</span>
            <span class="skill-tag">Component Architecture</span>
          </div>
        </div>

        <!-- Backend & Databases -->
        <div class="skill-category-card">
          <div class="category-header">
            <div class="cat-icon-box"><i data-lucide="server"></i></div>
            <h3>Backend & Databases</h3>
          </div>
          <div class="skills-tags">
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Express.js</span>
            <span class="skill-tag">FastAPI</span>
            <span class="skill-tag">Spring Boot</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">Firebase</span>
          </div>
        </div>

        <!-- DevOps & Tools -->
        <div class="skill-category-card">
          <div class="category-header">
            <div class="cat-icon-box"><i data-lucide="git-branch"></i></div>
            <h3>DevOps & Tools</h3>
          </div>
          <div class="skills-tags">
            <span class="skill-tag">CI/CD Pipelines</span>
            <span class="skill-tag">Git & GitHub</span>
            <span class="skill-tag">Postman</span>
            <span class="skill-tag">VS Code</span>
            <span class="skill-tag">Docker Basics</span>
            <span class="skill-tag">Gemini Vision AI</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="section projects-section" id="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">Real-world applications delivering artificial intelligence, enterprise mobility, and DevOps automation.</p>
      </div>

      <div class="projects-grid">
        <!-- Project 1 -->
        <div class="project-card">
          <div class="project-image-banner p1-banner">
            <div class="banner-badge">AI / Vision</div>
            <div class="banner-icon"><i data-lucide="leaf"></i></div>
          </div>
          <div class="project-content">
            <h3 class="project-title">AI Plant Disease Detection & Treatment</h3>
            <p class="project-desc">
              Developed an intelligent agro-diagnostic web platform using leaf images. Features CNN and Gemini Vision pathology analysis with automated chemical and organic treatment protocols.
            </p>
            <div class="project-tags">
              <span class="tech-tag">React.js</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">FastAPI</span>
              <span class="tech-tag">Gemini Vision</span>
              <span class="tech-tag">Firebase</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
                <i data-lucide="github"></i> Code
              </a>
              <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                <i data-lucide="external-link"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-card">
          <div class="project-image-banner p2-banner">
            <div class="banner-badge">Mobile & ERP</div>
            <div class="banner-icon"><i data-lucide="graduation-cap"></i></div>
          </div>
          <div class="project-content">
            <h3 class="project-title">Smart College Management System</h3>
            <p class="project-desc">
              A full-suite campus management system covering student attendance, grades, fee processing, and timetables with an embedded Gemini AI academic advisor and real-time push alerts.
            </p>
            <div class="project-tags">
              <span class="tech-tag">Flutter</span>
              <span class="tech-tag">Dart</span>
              <span class="tech-tag">React</span>
              <span class="tech-tag">Spring Boot</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">Gemini AI</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
                <i data-lucide="github"></i> Code
              </a>
              <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                <i data-lucide="external-link"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-card">
          <div class="project-image-banner p3-banner">
            <div class="banner-badge">DevOps & Cloud</div>
            <div class="banner-icon"><i data-lucide="activity"></i></div>
          </div>
          <div class="project-content">
            <h3 class="project-title">Cloud CI/CD Pipeline & Deployment Hub</h3>
            <p class="project-desc">
              Observability and workflow automation dashboard tracking GitHub Actions workflows, container builds, automated unit tests, and rollback mechanisms developed through DevOps internship experience.
            </p>
            <div class="project-tags">
              <span class="tech-tag">React</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">GitHub Actions</span>
              <span class="tech-tag">Tailwind CSS</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
                <i data-lucide="github"></i> Code
              </a>
              <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                <i data-lucide="external-link"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience & Certifications -->
  <section class="section exp-section" id="experience">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Experience & Certifications</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">Internship track record and industry credentials.</p>
      </div>

      <div class="exp-grid">
        <div class="exp-card">
          <div class="exp-pill">Internship</div>
          <h3 class="exp-role">DevOps Intern</h3>
          <h4 class="exp-company">Vaizai Solutions</h4>
          <span class="exp-date"><i data-lucide="calendar"></i> June 2026 — July 2026</span>
          <ul class="exp-list">
            <li>Completed a focused 1-month DevOps Internship at Vaizai Solutions.</li>
            <li>Gained hands-on experience in DevOps tools, CI/CD pipelines, and automated cloud deployments.</li>
            <li>Recognized for technical knowledge, sincerity, dedication, and professionalism.</li>
          </ul>
        </div>

        <div class="cert-card">
          <h3 class="card-heading"><i data-lucide="award"></i> Certified Credentials</h3>
          <div class="cert-list">
            <div class="cert-item">
              <span class="cert-dot"></span>
              <div>
                <strong>IBM Certified — Python</strong>
                <p>Python for Data Science and Machine Learning</p>
              </div>
            </div>
            <div class="cert-item">
              <span class="cert-dot"></span>
              <div>
                <strong>NoviTech Certified — Data Analytics</strong>
                <p>Exploratory Data Analysis & Business Intelligence</p>
              </div>
            </div>
            <div class="cert-item">
              <span class="cert-dot"></span>
              <div>
                <strong>TCS iON Career Edge — Young Professional</strong>
                <p>Business communication, workplace professionalism & problem solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section contact-section" id="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">Interested in collaborating or discussing an opportunity? Drop a message!</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info-card">
          <h3 class="contact-card-title">Let's connect</h3>
          <p class="contact-intro">
            I am actively seeking software engineering internships and junior developer roles. Feel free to contact me directly.
          </p>

          <div class="contact-details">
            <div class="contact-detail-row">
              <div class="detail-icon"><i data-lucide="mail"></i></div>
              <div>
                <span class="detail-label">Email</span>
                <a href="mailto:knitheeswaran3@gmail.com" class="detail-value">knitheeswaran3@gmail.com</a>
              </div>
            </div>
            <div class="contact-detail-row">
              <div class="detail-icon"><i data-lucide="phone"></i></div>
              <div>
                <span class="detail-label">Phone</span>
                <a href="tel:+917339549422" class="detail-value">+91 7339549422</a>
              </div>
            </div>
            <div class="contact-detail-row">
              <div class="detail-icon"><i data-lucide="map-pin"></i></div>
              <div>
                <span class="detail-label">Location</span>
                <span class="detail-value">Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div class="social-row">
            <a href="https://github.com/NitNithish1" target="_blank" rel="noopener noreferrer" class="social-btn">
              <i data-lucide="github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nitheeswaran-k-63a49a36a/" target="_blank" rel="noopener noreferrer" class="social-btn">
              <i data-lucide="linkedin"></i> LinkedIn
            </a>
            <a href="https://leetcode.com/u/nithish_1245/" target="_blank" rel="noopener noreferrer" class="social-btn">
              <i data-lucide="code-2"></i> LeetCode
            </a>
          </div>
        </div>

        <div class="contact-form-card">
          <form id="contactForm" class="contact-form">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="e.g. Alex Johnson" required />
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="alex@company.com" required />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Share your thoughts or project details..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block" id="submitBtn">
              <span>Send Message</span>
              <i data-lucide="send"></i>
            </button>

            <div class="form-feedback" id="formFeedback"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-content">
      <p>&copy; <span id="currentYear"></span> Nitheeswaran K. All rights reserved.</p>
      <a href="#hero" class="back-to-top">Back to top <i data-lucide="chevron-up"></i></a>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

export const standaloneCss = `/* ==========================================================================
   Modern Dark Portfolio Theme - Nitheeswaran K
   ========================================================================== */

:root {
  --bg-primary: #090d16;
  --bg-secondary: #0f172a;
  --bg-card: rgba(15, 23, 42, 0.75);
  --bg-card-hover: rgba(30, 41, 59, 0.85);
  --border-color: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(99, 102, 241, 0.4);
  --accent-blue: #38bdf8;
  --accent-indigo: #6366f1;
  --accent-purple: #a855f7;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --font-main: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-main);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}

/* Background Ambient Glows */
.bg-glow {
  position: fixed;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  z-index: 0;
}

.glow-1 {
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
}

.glow-2 {
  bottom: 10%;
  left: -150px;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%);
}

.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* Header & Sticky Navigation */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(9, 13, 22, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand-logo {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-bracket {
  color: var(--accent-indigo);
}

.logo-accent {
  color: var(--accent-blue);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: var(--transition);
}

.nav-link:hover, .nav-link.active {
  color: var(--accent-blue);
}

.mobile-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-indigo), #4f46e5);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  background: linear-gradient(135deg, #4f46e5, #4338ca);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-outline {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.btn-outline:hover {
  color: var(--text-primary);
  border-color: var(--accent-blue);
  background: rgba(56, 189, 248, 0.08);
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-block {
  width: 100%;
}

/* Sections */
.section {
  padding: 6rem 0;
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 3.5rem auto;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.section-divider {
  width: 50px;
  height: 3px;
  background: linear-gradient(to right, var(--accent-blue), var(--accent-indigo));
  margin: 1rem auto;
  border-radius: 999px;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

/* Hero Section */
.hero {
  padding: 7rem 0 5rem 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #c7d2fe;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.825rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.status-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.hero-title {
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.gradient-text {
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sub-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.hero-bio {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 540px;
}

.hero-cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.hero-socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
}

.social-icon:hover {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
  background: rgba(56, 189, 248, 0.1);
  transform: translateY(-3px);
}

/* Terminal Card */
.terminal-card {
  background: #0d121f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
  overflow: hidden;
}

.terminal-header {
  background: #151c2e;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.terminal-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.dot-red { background: #ef4444; }
.dot-yellow { background: #eab308; }
.dot-green { background: #22c55e; }

.terminal-title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.terminal-body {
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.7;
}

.t-key { color: #38bdf8; }
.t-val { color: #a5b4fc; }
.t-green { color: #4ade80; font-weight: 600; }

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.about-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 2rem;
  border-radius: 14px;
  transition: var(--transition);
}

.about-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-3px);
}

.card-heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-primary);
}

.about-text {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.98rem;
}

.education-item {
  border-left: 2px solid var(--accent-indigo);
  padding-left: 1rem;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.edu-degree {
  font-weight: 600;
  color: var(--text-primary);
}

.edu-score {
  font-size: 0.85rem;
  color: var(--accent-blue);
  font-weight: 600;
}

.edu-inst {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.2rem 0;
}

.edu-period {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.mt-4 { margin-top: 1.25rem; }

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.skill-category-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 1.75rem;
  transition: var(--transition);
}

.skill-category-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-hover);
  box-shadow: 0 12px 24px -10px rgba(99, 102, 241, 0.2);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.cat-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.12);
  color: var(--accent-indigo);
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.85rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  transition: var(--transition);
}

.skill-tag:hover {
  border-color: var(--accent-blue);
  color: var(--text-primary);
  background: rgba(56, 189, 248, 0.1);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-hover);
  box-shadow: 0 16px 36px -12px rgba(99, 102, 241, 0.25);
}

.project-image-banner {
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p1-banner { background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #022c22 100%); }
.p2-banner { background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%); }
.p3-banner { background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e1b4b 100%); }

.banner-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.banner-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.project-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.925rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(99, 102, 241, 0.12);
  color: #a5b4fc;
  font-size: 0.78rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

/* Experience Section */
.exp-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
}

.exp-card, .cert-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 2rem;
}

.exp-pill {
  display: inline-block;
  background: rgba(56, 189, 248, 0.15);
  color: var(--accent-blue);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
}

.exp-role {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
}

.exp-company {
  font-size: 1.05rem;
  color: var(--accent-indigo);
  margin-bottom: 0.5rem;
}

.exp-date {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.exp-list {
  padding-left: 1.25rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
}

.exp-list li { margin-bottom: 0.5rem; }

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cert-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.cert-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-blue);
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.cert-item strong {
  color: var(--text-primary);
  font-size: 0.95rem;
}

.cert-item p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
}

.contact-info-card, .contact-form-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 2.25rem;
}

.contact-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-intro {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.contact-detail-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.detail-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.12);
  color: var(--accent-indigo);
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-label {
  display: block;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.detail-value {
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: none;
}

.detail-value:hover { color: var(--accent-blue); }

.social-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: var(--transition);
}

.social-btn:hover {
  border-color: var(--accent-blue);
  color: var(--text-primary);
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.form-group input, .form-group textarea {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: var(--transition);
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--accent-indigo);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.form-feedback {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.6rem 0.9rem;
  border-radius: 6px;
  display: none;
}

.form-feedback.success {
  display: block;
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 2.5rem 0;
  background: #070a12;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
}

.back-to-top:hover {
  color: var(--accent-blue);
}

/* Responsive Breakpoints */
@media (max-width: 992px) {
  .hero-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
  .about-grid, .exp-grid, .contact-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: rgba(9, 13, 22, 0.98);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    transform: translateY(-120%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .mobile-toggle { display: block; }
  .hero-title { font-size: 2.5rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .footer-content { flex-direction: column; gap: 1rem; text-align: center; }
}
`;

export const standaloneJs = `// ==========================================================================
// Portfolio Interactions & UX Animations - Nitheeswaran K
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Set current copyright year
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Active Navigation State on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === '#' + sectionId) {
            item.classList.add('active');
          }
        });
      }
    });

    // Header shadow on scroll
    const header = document.getElementById('header');
    if (header) {
      if (scrollY > 30) {
        header.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
      } else {
        header.style.boxShadow = 'none';
      }
    }
  };

  window.addEventListener('scroll', onScroll);

  // Fade-in Intersection Observer for Elements
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll(
    '.project-card, .skill-category-card, .about-card, .exp-card, .cert-card, .contact-info-card, .contact-form-card'
  );

  elementsToReveal.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = \`opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) \${index * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) \${index * 0.08}s\`;
    revealObserver.observe(el);
  });

  // Apply revealed state styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = \`
    .revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  \`;
  document.head.appendChild(styleSheet);

  // Interactive Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('Please fill out all fields.');
        return;
      }

      // Simulated realistic submit loading state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Message...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        contactForm.reset();

        if (formFeedback) {
          formFeedback.textContent = 'Thank you! Your message has been received. Nitheeswaran will get back to you shortly.';
          formFeedback.className = 'form-feedback success';

          setTimeout(() => {
            formFeedback.style.display = 'none';
          }, 6000);
        }
      }, 1000);
    });
  }
});
`;
