import React, { useState } from "react";
import useOnScreen from "../hooks/useOnScreen";

const experiences = [
  {
    company: "Alkami Technology",
    title: "Senior Software Engineer",
    date: "May 2022 - Present",
    bullets: [
      "Built .NET microservices and widgets using C# and Microsoft SQL.",
      "Designed custom fintech flows for digital banking clients.",
      "Collaborated with Product, QA, and DevOps to deliver high-quality features.",
      "Mentored junior developers and drove architecture improvements.",
      "Improved SQL performance and optimized API calls.",
    ]
  },
  {
    company: "Civix",
    title: "Senior Java Developer",
    date: "Mar 2020 - May 2022",
    bullets: [
      "Built enterprise Java systems and high-availability backend services.",
      "Managed deployments for SIT/UAT/Production environments.",
      "Led a small engineering team to meet tight client timelines.",
      "Designed and maintained relational database schemas.",
      "Improved backend performance through refactoring and query tuning.",
    ]
  },
  {
    company: "Imagine Believe Realize",
    title: "Software Engineer",
    date: "Jun 2016 - Mar 2020",
    bullets: [
      "Built backend Java modules for a major US Navy portal.",
      "Created UI management tools used by customers to configure modules.",
      "Led scrum ceremonies and collaborated closely with stakeholders.",
      "Built and maintained SQL data models.",
      "Onboarded new engineers and provided mentorship.",
    ]
  }
];

export default function Experience() {
  const [ref, visible] = useOnScreen();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (company) => {
    setExpanded(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  return (
    <section id="experience" className={`section ${visible ? "reveal" : "hidden"}`} ref={ref}>
      <div className="container">
        <h2>Experience</h2>

        <div className="experience-grid">
          {experiences.map((e) => {
            const isExpanded = expanded[e.company];
            const visibleBullets = isExpanded ? e.bullets : e.bullets.slice(0, 2);

            return (
              <div className="experience-card" key={e.company}>
                <h3>{e.title}</h3>
                <p className="muted">{e.company} — {e.date}</p>

                <ul>
                  {visibleBullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>

                <button 
                  className="btn small skill-card" 
                  onClick={() => toggleExpand(e.company)}
                >
                  {isExpanded ? "Show Less" : "View More"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
