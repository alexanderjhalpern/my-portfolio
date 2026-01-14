import React, { useState } from "react";
import useOnScreen from "../hooks/useOnScreen";

const experiences = [
  {
    company: "Alkami Technology",
    title: "Senior Software Engineer",
    date: "May 2022 - October 2025",
    bullets: [
      "Design, develop, and test digital banking platform features for multiple financial institutions using Java (later became C#), React and and SQL within a Moqui (later became .NET) framework",
      "Create new loan and credit card flows, building full-stack components (Moqui XML, FTL, JavaScript/jQuery)",
      "Enhance admin dashboards by integrating customer-facing UI components",
      "In 2024, transitioned to a new .NET-based team focused on microservices and widgets using C# and Microsoft SQL in .NET while using an AWS infrastructure",
      "Collaborate cross-functionally with QA, Product, and DevOps",
    ]
  },
  {
    company: "Civix",
    title: "Senior Java Developer",
    date: "Mar 2020 - May 2022",
    bullets: [
      "Led full-stack development of a secure election management platform used by state clients",
      "Architected and implemented new features using RESTful APIs in Java (Spring Boot) and jQuery",
      "Oversaw build and deployment pipelines (SIT/UAT/Production) via Azure DevOps",
      "Managed and mentored a team of developers, conducting code reviews and enforcing best practices",
      "Maintained database schema design for our client environments",
    ]
  },
  {
    company: "Imagine Believe Realize",
    title: "Software Engineer",
    date: "Jun 2016 - Mar 2020",
    bullets: [
      "Built and maintained Java-based (Hibernate) modules for a U.S. Navy portal system supporting 100K+ users",
      "Designed UI components with jQuery, AJAX, HTML, and CSS for data-driven modules and admin tools",
      "Served as Scrum lead and ran daily stand-ups, tracked blockers, and coordinated with stakeholders",
      "Led customer demos and conducted QA testing to ensure compliance and security standards",
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
