export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">
        <h1 className="gradient-text">Josef Mansourati</h1>

        <h2>Full-Stack Developer Student</h2>

        <p>
          Building modern and responsive web applications
          with React, JavaScript and growing backend skills.
        </p>

        <div className="buttons">
          <a href="#projects">
            <button>Projects</button>
          </a>

          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </div>

      <div className="code-box">
        <p>const developer = "Josef";</p>
        <p>const stack = ["React", "JavaScript", "API"];</p>
      </div>

    </section>
  );
}