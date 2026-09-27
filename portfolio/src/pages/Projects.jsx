//Talia Lebano 
//Last update 2026/09/06

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project">
        <img
          src="/images/project1.jpg"
          alt="JavaFX Database Application"
          width="300"
        />

        <h2>JavaFX Database Application</h2>

        <p>
          A javaFX application that connects to a database to identify where students from Centennial College live. 
          This allows the user to view the data in a clear scrollable format.
        </p>

        <p><strong>Role:</strong> Developer</p>
        <p><strong>Outcome:</strong> Created a functional database application with JavaFX.</p>
        <p><strong>Completed:</strong> 2026</p>
      </div>

      <div className="project">
        <img
          src="/images/project2.jpg"
          alt="Shopping List Application"
          width="300"
        />

        <h2>Game Development Project</h2>

        <p>
          Built a team of 3 to create a game using Python and Panda3D.
          This project is still in the pre development stage.
        </p>

        <p><strong>Role:</strong> Developer</p>
        <p><strong>Outcome:</strong> Developed a basic game framework using Python and Panda3D.</p>
        <p><strong>Completed:</strong> In progress</p>
      </div>

      <div className="project">
        <img
          src="/images/project3.jpg"
          alt="Portfolio Website"
          width="300"
        />

        <h2>Cat café Website</h2>

        <p>
          A webiste developed for a cat café using HTML and CSs. The website includes information about the café, its menu, and contact details.
          Along with a list of adoptable cats and their profiles. The website is designed to be visually appealing and user-friendly.
        </p>

        <p><strong>Role:</strong> Developer</p>
        <p><strong>Outcome:</strong> Developed a multi-page responsive website for the cat café.</p>
        <p><strong>Completed:</strong> 2025</p>
      </div>
    </div>
  );
}

export default Projects;