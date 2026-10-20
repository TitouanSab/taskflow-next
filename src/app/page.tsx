import Link from "next/link";
import { getProjects } from "@/lib/data";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <h1>Projets</h1>
      <ul className="project-grid">
        {projects.map((project) => {
          const done = project.tasks.filter(
            (task) => task.status === "done",
          );

          return (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="project-card"
              >
                <h2>{project.name}</h2>
                <p className="muted">{project.description}</p>
                <p className="small">
                  {done.length} / {project.tasks.length} tâche(s) terminée(s)
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}