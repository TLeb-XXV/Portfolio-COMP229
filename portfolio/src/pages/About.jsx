//Talia Lebano 
//Last update 2026/09/06

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>

      <img
        src="/images/profile.jpg"
        alt="Talia Lebano"
        width="200"
      />

      <h2>Talia Lebano</h2>

      <p>
        Through my academic program, I have honed my knowledge of Java, C#, JavaScript, and SQL. In addition, I have experience using industry tools such as Git for version control and the ability to effectively translate technical requirements to non-technical personnel through applied projects. As an example, in a Price Comparison Application, where I served as the Project Lead, I collaboratively created an application SRS that outlined the application's scope and functionality while keeping the team organized and motivated to work ahead of deadlines to ensure time for review before submission. As a self-motivated learner, I have also developed additional skills in Python, web development, and project management through schoolwork and personal experience. To complement my technical skillset, I have over five years of customer service experience in a fast-paced environment, where I have demonstrated my strong communication, problem-solving, self-management, and collaboration skills.
      </p>

      <p>
        I enjoy learning new technologies and developing applications that are practical, organized, and easy to use.
      </p>

      <h2>My Resume</h2>

        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >
        View My Resume
        </a>
    </div>
  );
}

export default About;