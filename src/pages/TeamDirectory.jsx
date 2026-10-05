import { useMemo, useState } from "react";
import SearchFilter from "../components/SearchFilter.jsx";
import TeamMemberCard from "../components/TeamMemberCard.jsx";
import { departments, roles, users } from "../data/users.js";

function EmptyState({ onClear }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl dark:bg-slate-800">
        🔍
      </span>
      <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">No members match your search</h2>
      <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        Try a different name or email, or clear the department and role filters to see
        more results.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
      >
        Clear search & filters
      </button>
    </div>
  );
}

export default function TeamDirectory() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [role, setRole] = useState("all");

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return users.filter((user) => {
      const matchesSearch =
        query.length === 0 ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query);
      const matchesDepartment = department === "all" || user.department === department;
      const matchesRole = role === "all" || user.role === role;
      return matchesSearch && matchesDepartment && matchesRole;
    });
  }, [search, department, role]);

  const hasActiveFilters =
    search.trim().length > 0 || department !== "all" || role !== "all";

  function handleClear() {
    setSearch("");
    setDepartment("all");
    setRole("all");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Team Directory</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Search by name or email, and filter by department or role. Results update
          immediately.
        </p>
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
        <EmptyState onClear={handleClear} />
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

