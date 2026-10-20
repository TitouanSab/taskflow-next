"use client";

import { useState } from "react";
import { STATUS_LABEL, type Status, type Task } from "@/lib/types";

type Filter = "all" | Status;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "todo", label: "À faire" },
  { value: "doing", label: "En cours" },
  { value: "done", label: "Terminées" },
];

export function TaskBoard({ tasks }: { tasks: Task[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <article className="card">
      <header className="card__header">
        <h2>Tâches</h2>
        <div className="filters" role="group" aria-label="Filtrer les tâches">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <ul className="tasks">
        {visible.map((task) => (
          <li key={task.id} className={`task task--${task.status}`}>
            <span className="task__status">{STATUS_LABEL[task.status]}</span>
            <span className="task__title">{task.title}</span>
            <span className={`prio prio--${task.priority}`}>
              P{task.priority}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}