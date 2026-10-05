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
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 p-8 text-white shadow-lg sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 right-24 h-48 w-48 rounded-full bg-indigo-300/20 blur-2xl"
        />
        <p className="relative text-sm font-medium uppercase tracking-widest text-indigo-200">
          Welcome back
        </p>
        <h1 className="relative mt-2 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Meet the team behind the work
        </h1>
        <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-indigo-100 sm:text-base">
          Browse {totalMembers} members across {totalDepartments} departments. Search by
          name or email, filter by department or role, and open any profile for full
          details.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-3">
          <Link
            to="/team"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
          >
            View Team Directory →
          </Link>
          <div className="flex flex-wrap gap-2">
            {departments.map((department) => (
              <span
                key={department}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white"
              >
                {department}
              </span>
            ))}
          </div>
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

