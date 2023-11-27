function Sidebar() {
    return (
      <div className="flex">
        <aside className="w-64" aria-label="Sidebar">
          <div className="py-4 px-3 bg-blue-900 text-white h-screen">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-800">
                <span className="material-icons-outlined text-base">dashboard</span>
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700">
                <span className="material-icons-outlined text-base">group</span>
                <span>Team</span>
              </a>
              {/* Repeat the above pattern for other sidebar items */}
              {/* ... */}
              <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700">
                <span className="material-icons-outlined text-base">settings</span>
                <span>Settings</span>
              </a>
            </nav>
          </div>
        </aside>
        {/* Main content goes here */}
        <main className="flex-1">
          {/* ... */}
        </main>
      </div>
    );
  }
  
  export default Sidebar;
  