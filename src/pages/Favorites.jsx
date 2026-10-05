import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState.jsx";
import TeamMemberCard from "../components/TeamMemberCard.jsx";
import useFavorites from "../hooks/useFavorites.js";
import { users } from "../data/users.js";

export default function Favorites() {
  const { favorites, favoriteCount, clearFavorites } = useFavorites();
  const favoriteUsers = users.filter((user) => favorites.includes(user.id));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Favorites
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {favoriteCount === 0
              ? "You have no favorites yet. Tap the star on any member to save them here."
              : `You have ${favoriteCount} favorite ${favoriteCount === 1 ? "member" : "members"}. Saved in this browser.`}
          </p>
        </div>
        {favoriteCount > 0 ? (
          <button
            type="button"
            onClick={clearFavorites}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Clear all
          </button>
        ) : null}
      </div>

      {favoriteUsers.length === 0 ? (
        <EmptyState
          icon="⭐"
          title="No favorites yet"
          message="Tap the star button on any team member card to add them here. Favorites stay saved even after you refresh."
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteUsers.map((user) => (
            <TeamMemberCard key={user.id} user={user} />
          ))}
        </div>
      )}

      <Link
        to="/team"
        className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        ← Browse the full team
      </Link>
    </div>
  );
}
