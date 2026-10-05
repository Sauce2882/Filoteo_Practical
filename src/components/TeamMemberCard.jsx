import { Link } from "react-router-dom";

const departmentStyles = {
  Engineering: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  Design: "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
  Product: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  Marketing: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  Data: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamMemberCard({ user }) {
  const badgeClass = departmentStyles[user.department] ?? "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200";

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-black/40">
      <div className="flex items-start gap-4">
        <img
          src={user.avatar}
          alt={`${user.name} avatar`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const fallback = event.currentTarget.nextElementSibling;
            if (fallback) fallback.style.display = "flex";
          }}
          className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-700"
        />
        <div
          aria-hidden="true"
          style={{ display: "none" }}
          className="h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white"
        >
          {getInitials(user.name)}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-900 dark:text-white">{user.name}</h3>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">{user.role}</p>
          <span
            className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
          >
            {user.department}
          </span>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{user.bio}</p>

      <div className="mt-4 space-y-1 text-sm text-slate-500 dark:text-slate-400">
        <p className="truncate">✉️ {user.email}</p>
        <p className="truncate">📍 {user.location}</p>
      </div>

      <Link
        to={`/team/${user.id}`}
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:focus-visible:ring-offset-slate-900"
      >
        View Profile
      </Link>
    </article>
  );
}
