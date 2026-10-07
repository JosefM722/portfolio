export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>
            HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS
          </p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>
            Node.js, Express.js, REST APIs
          </p>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>
          <p>
            MongoDB, PostgreSQL
          </p>
        </div>

        <div className="skill-card">
          <h3>CMS</h3>
          <p>
            Storyblok, CMS Development
          </p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>
            Git, GitHub, Vite, VS Code, Postman
          </p>
        </div>

      </div>
    </section>
  );
}