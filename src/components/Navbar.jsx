import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme.js";

function navLinkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-indigo-600 text-white"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
            TD
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-white">Team Directory</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            Dashboard
          </NavLink>
          <NavLink to="/team" className={navLinkClass}>
            Team
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-lg text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-amber-300 dark:hover:bg-slate-800"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-1">
            <NavLink to="/" className={navLinkClass} end onClick={() => setOpen(false)}>
              Dashboard
            </NavLink>
            <NavLink to="/team" className={navLinkClass} onClick={() => setOpen(false)}>
              Team
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}

