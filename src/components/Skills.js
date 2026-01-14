import React from "react";
import useOnScreen from "../hooks/useOnScreen";

const skills = [
  "Java", "C#", "JavaScript", "React", "jQuery", "HTML", "CSS", "Spring Boot", ".NET Core", "SQL", "REST API Design",
  "Microservices", "Visual Studio", "IntelliJ", "AWS", "Azure DevOps", "GitHub", "GitLab",
  "Bitbucket", "Jira","Eclipse", "Microsoft SQL Server", "Oracle SQL Developer",
  "CI/CD pipelines", "Git-based version control"
];

export default function Skills() {
  const [ref, visible] = useOnScreen();

  return (
    <section id="skills" className={`section ${visible ? "reveal" : "hidden"}`} ref={ref}>
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
