// import Sidebar from "../AdminDashboard/Sidebar";
// import DashboardHome from "../AdminDashboard/DashboardHome";
// import { useNavigate } from "react-router-dom";

// const AdminPage = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     setIsAuthenticated(false);
//     navigate("/admin-login");
//   };

//   return (
//     <div className="min-h-screen flex">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <div className="p-4 border-b flex justify-between items-center">
//           <h2 className="text-xl font-bold">Admin Dashboard</h2>
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Logout
//           </button>
//         </div>
//         <DashboardHome />
//       </div>
//     </div>
//   );
// };

// export default AdminPage;


// Components/Admin/AdminPage.jsx
import DashboardLayout from "../AdminDashboard/DashboardLayout";
import DashboardHome from "../AdminDashboard/DashboardHome";

const AdminPage = ({ setIsAuthenticated }) => {
  return (
    <DashboardLayout setIsAuthenticated={setIsAuthenticated}>
      {/* <h1 className="text-2xl font-bold mb-2">Dashboard Home</h1>
      <p className="text-gray-600">Welcome to the admin dashboard. Use the sidebar to navigate.</p> */}
      <DashboardHome/>
      
    </DashboardLayout>
  );
};

export default AdminPage;
