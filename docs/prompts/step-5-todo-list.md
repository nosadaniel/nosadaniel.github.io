Generate a Markdown file named `todo.md` to serve as a progress checklist based on the tasks defined in `tasks.md`.

Instructions:

- Input Source: Extract the task list and sprint structure from `tasks.md`.
- File Structure: Replicate the sprint organization from `tasks.md` in `todo.md`, using consistent headings (e.g., `## Sprint 1: MVP`, `## Sprint 2`).
- Task Representation: For each task in `tasks.md`:
  - Create an entry under the corresponding sprint heading.
  - Format the entry as an unchecked Markdown checkbox followed by the task title (e.g., `- [ ] Task Title`).
- Content: Include only the sprint headings and checkbox/task title lines in `todo.md`. Exclude task descriptions, acceptance criteria, dependencies, or other details from `tasks.md`.
- Order: Preserve the exact sequence of tasks within each sprint as they appear in `tasks.md`.
- Output: Produce a clean, valid Markdown file named `todo.md` with consistent formatting for readability.
- Completeness: Ensure all tasks from `tasks.md` are represented in `todo.md` without omissions or additions.