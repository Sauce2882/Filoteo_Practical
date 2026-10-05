import { Link } from "react-router-dom";
import TeamMemberCard from "../components/TeamMemberCard.jsx";
import { users } from "../data/users.js";

export default function Dashboard() {
  const featured = users.slice(0, 3);
  const totalMembers = users.length;
  const departments = [...new Set(users.map((user) => user.department))];
  const totalDepartments = departments.length;
  const totalRoles = new Set(users.map((user) => user.role)).size;

  const stats = [
    { label: "Team members", value: totalMembers, to: "/team" },
    { label: "Departments", value: totalDepartments, to: "/team" },
    { label: "Roles", value: totalRoles, to: "/team" },
  ];

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm sm:p-10 dark:border-slate-700">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"
        />
        <p className="relative text-sm font-medium uppercase tracking-widest text-slate-400">
          Welcome back
        </p>
        <h1 className="relative mt-2 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Meet the team behind the work
        </h1>
        <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Browse {totalMembers} members across {totalDepartments} departments and{" "}
          {totalRoles} roles. Search, filter, and open any profile for full details.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-3">
          <Link
            to="/team"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            View Team Directory →
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            About
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            to={stat.to}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="mt-1 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
              <span className="text-indigo-600 transition group-hover:translate-x-0.5 dark:text-indigo-400">
                →
              </span>
            </p>
          </Link>
        ))}
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured members</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              A quick preview from the directory.
            </p>
          </div>
          <Link
            to="/team"
            className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 hover:text-indigo-800 dark:text-indigo-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
          >
            View all →
          </Link>
        </div>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((user) => (
            <TeamMemberCard key={user.id} user={user} />
          ))}
        </div>
      </section>
    </div>
  );
}

