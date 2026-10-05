// Sample team directory data (placeholder information only).
// Each user has: id, name, email, role, department, location, avatar, bio.

export const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Frontend Developer",
    department: "Engineering",
    location: "Manila, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Alex+Johnson&background=4f46e5&color=fff&size=256",
    bio: "Frontend developer focused on creating clean and responsive web experiences with React.",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria.santos@example.com",
    role: "UI/UX Designer",
    department: "Design",
    location: "Cebu, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Maria+Santos&background=ec4899&color=fff&size=256",
    bio: "Product designer who loves clean layouts, design systems, and user-friendly interfaces.",
  },
  {
    id: 3,
    name: "James Carter",
    email: "james.carter@example.com",
    role: "Backend Developer",
    department: "Engineering",
    location: "Davao, Philippines",
    avatar: "https://ui-avatars.com/api/?name=James+Carter&background=0ea5e9&color=fff&size=256",
    bio: "Backend developer experienced in building reliable APIs and managing databases.",
  },
  {
    id: 4,
    name: "Sofia Reyes",
    email: "sofia.reyes@example.com",
    role: "Product Manager",
    department: "Product",
    location: "Quezon City, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Sofia+Reyes&background=10b981&color=fff&size=256",
    bio: "Product manager who turns ideas into clear roadmaps and ships features users love.",
  },
  {
    id: 5,
    name: "Daniel Cruz",
    email: "daniel.cruz@example.com",
    role: "Data Analyst",
    department: "Data",
    location: "Makati, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Cruz&background=f59e0b&color=fff&size=256",
    bio: "Data analyst passionate about dashboards, insights, and data-driven decisions.",
  },
  {
    id: 6,
    name: "Emily Navarro",
    email: "emily.navarro@example.com",
    role: "Marketing Specialist",
    department: "Marketing",
    location: "Taguig, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Emily+Navarro&background=8b5cf6&color=fff&size=256",
    bio: "Marketing specialist focused on content, branding, and growing online communities.",
  },
  {
    id: 7,
    name: "Michael Torres",
    email: "michael.torres@example.com",
    role: "DevOps Engineer",
    department: "Engineering",
    location: "Iloilo, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Michael+Torres&background=ef4444&color=fff&size=256",
    bio: "DevOps engineer who automates deployments and keeps systems fast and reliable.",
  },
  {
    id: 8,
    name: "Grace Lim",
    email: "grace.lim@example.com",
    role: "Graphic Designer",
    department: "Design",
    location: "Baguio, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Grace+Lim&background=14b8a6&color=fff&size=256",
    bio: "Graphic designer creating modern visuals, illustrations, and brand assets.",
  },
  {
    id: 9,
    name: "Kevin Dela Cruz",
    email: "kevin.delacruz@example.com",
    role: "QA Engineer",
    department: "Product",
    location: "Pasig, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Kevin+Dela+Cruz&background=6366f1&color=fff&size=256",
    bio: "QA engineer dedicated to catching bugs early and improving product quality.",
  },
  {
    id: 10,
    name: "Anna Villanueva",
    email: "anna.villanueva@example.com",
    role: "Content Strategist",
    department: "Marketing",
    location: "Mandaluyong, Philippines",
    avatar: "https://ui-avatars.com/api/?name=Anna+Villanueva&background=d946ef&color=fff&size=256",
    bio: "Content strategist who crafts clear messaging and engaging stories for users.",
  },
];

export function getUserById(id) {
  const numericId = Number(id);
  return users.find((user) => user.id === numericId);
}

export const departments = [...new Set(users.map((user) => user.department))].sort();

export const roles = [...new Set(users.map((user) => user.role))].sort();

export default users;
