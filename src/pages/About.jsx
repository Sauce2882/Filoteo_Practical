import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          About this project
        </p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
          Team Directory Practical
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          A polished React + Vite practical project for browsing team members, with
          search, filters, favorites, profiles, and dark mode.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">What it does</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <li>• Home with totals and featured members</li>
            <li>• Team directory with live search by name, email, role, department</li>
            <li>• Department + role filters with one-click reset</li>
            <li>• Favorites saved in localStorage, with a dedicated page</li>
            <li>• Profile pages at /team/:id with graceful not-found state</li>
            <li>• Dark / light theme saved in localStorage</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">Tech stack</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <li>• React + Vite + JavaScript</li>
            <li>• Tailwind CSS v4 (class-based dark mode)</li>
            <li>• React Router (/, /team, /team/:id, /favorites, /about)</li>
            <li>• React Hooks + localStorage</li>
            <li>• Reusable components, no TypeScript, no extra libraries</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">Quick links</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/team"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            Browse the team →
          </Link>
          <Link
            to="/favorites"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            View favorites
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
