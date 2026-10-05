import { Link, useParams } from "react-router-dom";
import TeamMemberCard from "../components/TeamMemberCard.jsx";
import { getUserById, users } from "../data/users.js";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function UserProfile() {
  const { id } = useParams();
  const user = getUserById(id);

  if (!user) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl dark:bg-slate-800">
          🔍
        </span>
        <h1 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Member not found</h1>
        <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
          No team member exists with ID “{id}”. It may have been removed or the link
          is incorrect.
        </p>
        <Link
          to="/team"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
        >
          Back to Team
        </Link>
      </div>
    );
  }

  const teammates = users.filter((member) => member.id !== user.id).slice(0, 3);

  return (
    <div className="space-y-6">
      <Link
        to="/team"
        className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        ← Back to Team
      </Link>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="h-28 bg-gradient-to-r from-indigo-600 via-violet-600 to-slate-900" />
        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <div className="-mt-10 flex flex-col gap-4 sm:flex-row sm:items-end">
            <img
              src={user.avatar}
              alt={`${user.name} avatar`}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                const fallback = event.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = "flex";
              }}
              className="h-20 w-20 rounded-full border-4 border-white object-cover shadow"
            />
            <div
              aria-hidden="true"
              style={{ display: "none" }}
              className="h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-indigo-600 text-xl font-bold text-white shadow"
            >
              {getInitials(user.name)}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {user.role} • {user.department}
              </p>
            </div>
            <a
              href={`mailto:${user.email}`}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Email", value: user.email },
              { label: "Role", value: user.role },
              { label: "Department", value: user.department },
              { label: "Location", value: user.location },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-1 break-words text-sm font-medium text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">About</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {user.bio}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Other team members</h2>
          <Link
            to="/team"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View all →
          </Link>
        </div>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teammates.map((member) => (
            <TeamMemberCard key={member.id} user={member} />
          ))}
        </div>
      </section>
    </div>
  );
}

