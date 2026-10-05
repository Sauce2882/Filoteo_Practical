import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites.js";

function StarIcon({ filled }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function FavoritesButton() {
  const { favoriteCount } = useFavorites();
  const hasFavorites = favoriteCount > 0;

  return (
    <Link
      to="/favorites"
      aria-label={hasFavorites ? `View ${favoriteCount} favorites` : "View favorites"}
      title={hasFavorites ? `View ${favoriteCount} favorites` : "No favorites yet — tap to view"}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
        hasFavorites
          ? "border-amber-300 bg-amber-50 text-amber-500 hover:bg-amber-100 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/20"
          : "border-slate-200 text-slate-400 hover:bg-slate-100 hover:text-amber-500 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-amber-400"
      }`}
    >
      <StarIcon filled={hasFavorites} />
      {hasFavorites ? (
        <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[11px] font-bold leading-none text-white">
          {favoriteCount > 99 ? "99+" : favoriteCount}
        </span>
      ) : null}
    </Link>
  );
}
