import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import TeamDirectory from "./pages/TeamDirectory.jsx";
import UserProfile from "./pages/UserProfile.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="team" element={<TeamDirectory />} />
        <Route path="team/:id" element={<UserProfile />} />
        <Route path="*" element={<TeamDirectory />} />
      </Route>
    </Routes>
  );
}

export default App;


