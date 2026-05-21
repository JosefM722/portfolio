export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-card purple">
        <h3>Productivity App</h3>
        <p>
          React productivity application with CRUD functionality
          and localStorage support.
        </p>
      </div>

      <div className="project-card purple">
        <h3>PokemonLive</h3>
        <p>
          Pokémon application using external API data with
          search and filtering features.
        </p>
      </div>
    </section>
  );
}