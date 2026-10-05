# Team Directory — Filoteo Practical

A polished, responsive Team Directory web app built with **React + Vite + Tailwind CSS v4 + React Router**. Browse team members, search and filter instantly, save favorites, view profiles, and toggle dark mode — all data is fictional sample data for a college practical submission.

## Features

- **Home (`/`)** — welcome hero, team/department/role stats, featured members
- **Team Directory (`/team`)** — 10 sample members in responsive cards
- **Live search** — by name, email, role, or department (updates while typing)
- **Filters** — department + role dropdowns, favorites-only toggle, one-click reset
- **Favorites (`/favorites`)** — star any card, count badge in navbar, saved in `localStorage`
- **Profile (`/team/:id`)** — large avatar, details grid, bio, favorite toggle, back button, not-found state
- **About (`/about`)** — project overview, tech stack, quick links
- **Dark mode** — SVG sun/moon toggle in navbar, class-based Tailwind v4, saved in `localStorage`
- **Responsive** — desktop / tablet / mobile, hamburger menu, adaptive grids
- **Empty states** — polished messages for no search results, no favorites, invalid profile

## Tech Stack

| Tool | Version |
| --- | --- |
| React + React DOM | ^19.2.8 |
| Vite | ^8.3.0 |
| Tailwind CSS + @tailwindcss/vite | ^4.3.3 |
| React Router DOM | ^7.18.4 |
| JavaScript only | no TypeScript |

## Project Structure

```
src/
  components/
    Navbar.jsx          # Home | Team | About + favorites shortcut + theme toggle
    Layout.jsx          # shared header / outlet / footer
    TeamMemberCard.jsx  # reusable card: avatar, favorite star, profile link
    SearchFilter.jsx    # search input + department/role selects + clear
    FavoritesButton.jsx # navbar star shortcut with count badge
    ThemeToggle.jsx     # SVG sun/moon dark mode toggle
    EmptyState.jsx      # reusable empty-state panel
  pages/
    Dashboard.jsx       # home page (stats + featured)
    TeamDirectory.jsx   # search + filter + grid
    UserProfile.jsx     # /team/:id details
    Favorites.jsx       # saved favorites
    About.jsx           # project info
  hooks/
    useTheme.js         # dark mode + localStorage
    useFavorites.js     # favorites + localStorage + cross-page sync
  data/
    users.js            # 10 fictional members + helpers
  App.jsx               # routes: / /team /team/:id /favorites /about
  main.jsx              # BrowserRouter entry
  index.css             # Tailwind v4 + dark variant
```

## Getting Started

Requirements: Node.js 18+ and npm.

```powershell
cd "C:\Users\CCL305\Documents\Filoteo_Practical"
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`).

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | start dev server with HMR |
| `npm run build` | production build to `dist/` |
| `npm run preview` | preview the production build |
| `npm run lint` | run ESLint |

## Routes to Try

- `/` — Home with stats and featured members
- `/team` — search `alex`, filter `Engineering`, toggle `Favorites only`, try `zzz` for empty state
- `/team/1` — sample profile; `/team/999` — not-found state
- `/favorites` — star members on `/team`, refresh to confirm persistence
- `/about` — project overview

## Notes

- All member names, emails, and bios are fictional placeholders (`example.com`, ui-avatars placeholders).
- Favorites key: `team-directory-favorites`. Theme key: `team-directory-theme`.
- No backend — everything runs client-side.

