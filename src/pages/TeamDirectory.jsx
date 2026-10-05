import { useMemo, useState } from "react";
import EmptyState from "../components/EmptyState.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import TeamMemberCard from "../components/TeamMemberCard.jsx";
import useFavorites from "../hooks/useFavorites.js";
import { departments, roles, users } from "../data/users.js";

export default function TeamDirectory() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [role, setRole] = useState("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites, isFavorite } = useFavorites();

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return users.filter((user) => {
      const matchesSearch =
        query.length === 0 ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query) ||
        user.department.toLowerCase().includes(query);
      const matchesDepartment = department === "all" || user.department === department;
      const matchesRole = role === "all" || user.role === role;
      const matchesFavorites = !showFavoritesOnly || isFavorite(user.id);
      return matchesSearch && matchesDepartment && matchesRole && matchesFavorites;
    });
  }, [search, department, role, showFavoritesOnly, favorites, isFavorite]);

  const hasActiveFilters =
    search.trim().length > 0 ||
    department !== "all" ||
    role !== "all" ||
    showFavoritesOnly;

  function handleClear() {
    setSearch("");
    setDepartment("all");
    setRole("all");
    setShowFavoritesOnly(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Team Directory</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Search by name, email, role, or department. Combine with filters — results
            update immediately.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowFavoritesOnly((value) => !value)}
          aria-pressed={showFavoritesOnly}
          className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
            showFavoritesOnly
              ? "border-amber-400 bg-amber-400 text-white hover:bg-amber-500"
              : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          {showFavoritesOnly ? "★ Showing favorites" : "☆ Favorites only"}
        </button>
      </div>

      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        department={department}
        onDepartmentChange={setDepartment}
        role={role}
        onRoleChange={setRole}
        departments={departments}
        roles={roles}
        resultCount={filteredUsers.length}
        totalCount={users.length}
        onClear={handleClear}
        hasActiveFilters={hasActiveFilters}
      />

      {filteredUsers.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No members match your search"
          message="Try a different keyword, turn off Favorites only, or clear the department and role filters."
          actionLabel="Clear search & filters"
          onAction={handleClear}
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <TeamMemberCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}


