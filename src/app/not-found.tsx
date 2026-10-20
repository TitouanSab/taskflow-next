import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>Page introuvable</h1>
      <p className="muted">Cette page ou ce projet n'existe pas.</p>
      <Link href="/">Retour aux projets</Link>
    </section>
  );
}