import db from "../../db.json";
import type { ProjectWithTasks, Task } from "./types";

const tasks = db.tasks as Task[];

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<ProjectWithTasks[]> {
  await wait(600);

  return db.projects.map((project) => ({
    ...project,
    tasks: tasks.filter((task) => task.projectId === project.id),
  }));
}

export async function getProject(
  id: string,
): Promise<ProjectWithTasks | null> {
  await wait(600);

  const project = db.projects.find((item) => item.id === id);
  if (!project) return null;

  return {
    ...project,
    tasks: tasks.filter((task) => task.projectId === id),
  };
}