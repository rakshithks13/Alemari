// Components/AdminDashboard/DashboardLayout.jsx
import { LogOut, LayoutDashboard, FileText, Settings } from "lucide-react";
import { Button } from "../Ui/Button";
// import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const cn = (...classes) => classes.filter(Boolean).join(" ");


const navItems = [
  { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, path: "/dashboard" },
  { label: "Manage Blogs", icon: <FileText className="w-4 h-4" />, path: "/dashboard/blogs" },
  { label: "Testimonials", icon: <FileText className="w-4 h-4" />, path: "/dashboard/testimonials" },
  { label: "Settings", icon: <Settings className="w-4 h-4" />, path: "/dashboard/settings" },
];

const DashboardLayout = ({ children, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/admin-login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        {navItems.map((item) => (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 transition",
              location.pathname === item.path && "bg-gray-200 font-semibold"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
        <Button onClick={handleLogout} variant="destructive" className="mt-10 w-full">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
