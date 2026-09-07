Generate a markdown file name `AGENTS.md` concise and clear instructions for an AI Coding Agent based on the provided technical descriptions in prd.md and tasks.md. The instructions must address the following key areas:

- **Code Improvement**: Always seek ways to improve existing code before creating new functions; ensure no code repetition occurs.
- **Coding Practices**: Adhere to popular coding styles and conventions for the selected programming language.
- **Best Practices**: Follow best practices for writing code, including testing procedures and documentation standards.
- **Security Considerations**: Incorporate security best practices into all coding efforts.
- **Document**: Always keep track to update the following documents: prd.md, tasks.md and todo.md
# Output Format

The output should be structured as a bullet-point list, with each point concise and directly addressing one of the key areas outlined above.

# Examples

**Input**: prd.md and tasks.md contents related to specific programming tasks.
**Output**:
- Seek improvement on existing code before writing new functions.
- Adhere to [specific language] coding styles, such as PEP 8 for Python.
- Document code effectively and ensure all functions are tested.
- Implement security measures, such as input validation and error handling.
