
export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-card purple">
        <h3>Jobbportal</h3>
        <p>
          Job portal built with Next.js and TypeScript, featuring
          dynamic job pages and CMS integration with Storyblok.
          Deployed with Vercel.
        </p>

        <div className="project-links">
          <a
            href="https://github.com/JosefM722/jobbportal"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://jobbportal-dun.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>

      <div className="project-card purple">
        <h3>Productivity Assistant Application</h3>
        <p>
          React application for managing tasks, habits and events
          with CRUD functionality, localStorage, filtering and
          component-based development.
        </p>

        <div className="project-links">
          <a
            href="https://github.com/JosefM722/Productivity-Assistant-Application"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="project-card purple">
        <h3>Todo App</h3>
        <p>
          A simple todo application built with JavaScript to
          create, manage and organize tasks.
        </p>

        <div className="project-links">
          <a
            href="https://github.com/JosefM722/min-todo-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://josefm722.github.io/min-todo-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>

      <div className="project-card purple">
        <h3>PokemonLive</h3>
        <p>
          React application using an external REST API to fetch
          Pokémon data with search, filtering and dynamic rendering.
        </p>

        <div className="project-links">
          <a
            href="https://github.com/JosefM722/PokemonLive"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="project-card purple">
        <h3>Portfolio Website</h3>
        <p>
          Personal portfolio built with React and Vite to showcase
          my projects, skills and web development experience.
        </p>

        <div className="project-links">
          <a
            href="https://github.com/JosefM722/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://portfolio-omega-green-61.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
