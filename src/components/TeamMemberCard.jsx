import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites.js";

const departmentStyles = {
  Engineering: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200",
  Design: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200",
  Product: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200",
  Marketing: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200",
  Data: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200",
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
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(user.id);
  const badgeClass = departmentStyles[user.department] ?? "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200";

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-black/40">
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <img
            src={user.avatar}
            alt={`${user.name} avatar`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              const fallback = event.currentTarget.nextElementSibling;
              if (fallback) fallback.style.display = "flex";
            }}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-700"
          />
          <div
            aria-hidden="true"
            style={{ display: "none" }}
            className="h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white"
          >
            {getInitials(user.name)}
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(user.id)}
            aria-label={favorite ? `Remove ${user.name} from favorites` : `Add ${user.name} to favorites`}
            aria-pressed={favorite}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
            className={`absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border text-base shadow-sm transition active:scale-95 ${
              favorite
                ? "border-amber-300 bg-amber-400 text-white hover:bg-amber-500"
                : "border-slate-200 bg-white text-slate-400 hover:border-amber-300 hover:text-amber-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-amber-400 dark:hover:text-amber-400"
            }`}
          >
            {favorite ? "★" : "☆"}
          </button>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-900 dark:text-white">{user.name}</h3>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">{user.role}</p>
          <span
            className={`mt-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
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

