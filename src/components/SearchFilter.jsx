export default function SearchFilter({
  search,
  onSearchChange,
  department,
  onDepartmentChange,
  role,
  onRoleChange,
  departments,
  roles,
  resultCount,
  totalCount,
  onClear,
  hasActiveFilters,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Search
          </span>
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name or email…"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/30"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Department
          </span>
          <select
            value={department}
            onChange={(event) => onDepartmentChange(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-400"
          >
            <option value="all">All departments</option>
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Role
          </span>
          <select
            value={role}
            onChange={(event) => onRoleChange(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-400"
          >
            <option value="all">All roles</option>
            {roles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-end">
          <button
            type="button"
            onClick={onClear}
            disabled={!hasActiveFilters}
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 lg:w-auto dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Clear
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
        Showing <span className="font-semibold text-slate-900 dark:text-white">{resultCount}</span> of{" "}
        {totalCount} members
        {search.trim() ? (
          <>
            {" "}for “<span className="font-medium text-slate-700 dark:text-slate-200">{search.trim()}</span>”
          </>
        ) : null}
      </p>
    </div>
  );
}
