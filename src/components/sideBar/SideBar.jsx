import { useState } from "react";
import { assets } from "../../assets/assets"; // Adjust the path as needed

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`min-h-screen ${expanded ? 'w-64' : 'w-16'} flex flex-col justify-between bg-gray-900 transition-all duration-300 p-4`}>
      {/* Top Section */}
      <div>
        {/* Menu Icon to Toggle Sidebar */}
        <assets.IoMenu
          size={24}
          className="text-white cursor-pointer mb-6"
          onClick={() => setExpanded(!expanded)}
        />

        {/* New Chat Button */}
        <div className={`flex items-center gap-2 p-2 rounded-lg bg-gray-700 cursor-pointer mb-4 ${expanded ? 'justify-start' : 'justify-center'}`}>
          <assets.FiPlus size={20} className="text-purple-400" />
          {expanded && <span className="text-sm text-purple-400">New Chat</span>}
        </div>

        {/* Recent Chats */}
        {expanded && (
          <div>
            <p className="text-sm text-white mb-3">Recent</p>
            <div className="flex items-center gap-2 p-2 rounded-full bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors">
              <assets.FiMessageSquare size={20} className="text-white" />
              <span className="text-sm text-white">What is React...</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        {/* Help */}
        <div className={`flex items-center gap-2 p-2 rounded-full bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors ${expanded ? 'justify-start' : 'justify-center'}`}>
          <assets.IoHelpCircleOutline size={20} className="text-white" />
          {expanded && <span className="text-sm text-white">Help</span>}
        </div>

        {/* Activity */}
        <div className={`flex items-center gap-2 p-2 rounded-full bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors ${expanded ? 'justify-start' : 'justify-center'}`}>
          <assets.IoTimerOutline size={20} className="text-white" />
          {expanded && <span className="text-sm text-white">Activity</span>}
        </div>

        {/* Settings */}
        <div className={`flex items-center gap-2 p-2 rounded-full bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors ${expanded ? 'justify-start' : 'justify-center'}`}>
          <assets.IoSettingsOutline size={20} className="text-white" />
          {expanded && <span className="text-sm text-white">Settings</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
