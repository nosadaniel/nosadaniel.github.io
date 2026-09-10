export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-8 text-center text-xs text-text-secondary sm:px-6">
      <p>Built with Next.js and Tailwind.</p>
      <p className="mt-1">&copy; {year} Nosakhare Daniel Ahanor</p>
    </footer>
  );
}
