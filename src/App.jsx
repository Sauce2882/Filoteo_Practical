import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Favorites from "./pages/Favorites.jsx";
import TeamDirectory from "./pages/TeamDirectory.jsx";
import UserProfile from "./pages/UserProfile.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="team" element={<TeamDirectory />} />
        <Route path="team/:id" element={<UserProfile />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<TeamDirectory />} />
      </Route>
    </Routes>
  );
}

export default App;


