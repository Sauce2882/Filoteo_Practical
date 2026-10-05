import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Team Directory — React + Vite practical project</p>
          <p>Built with React, Vite, Tailwind CSS, and React Router</p>
        </div>
      </footer>
    </div>
  );
}

