const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-400">Dashboard</a></li>
        <li><a href="#" className="hover:text-yellow-400">Manage Blogs</a></li>
        <li><a href="#" className="hover:text-yellow-400">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
