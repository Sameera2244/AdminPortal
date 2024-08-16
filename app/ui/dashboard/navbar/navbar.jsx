'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SearchIcon from '@mui/icons-material/Search';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Sun icon for light mode
import ChatList from '@/app/ui/dashboard/navbar/ChatList/ChatList';

export default function Navbar({ onMenuToggle }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAbout, setShowAbout] = useState(false); // State to show/hide About template
  const [showChat, setShowChat] = useState(false); // State to show/hide Chat list
  const [showSearchInput, setShowSearchInput] = useState(false); // State to show/hide Search input

  useEffect(() => {
    // Apply the dark mode class to the body element
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setShowAbout(!showAbout); // Toggle the About template
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleChat = () => {
    setShowChat(!showChat); // Toggle the Chat list visibility
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput); // Toggle the Search input visibility
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div>
      <nav className={`shadow-md p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center">
          {/* Menu icon */}
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <MenuIcon />
          </button>

          {/* Fullscreen icon */}
          <button onClick={toggleFullScreen} className="p-2 focus:outline-none">
            <FullscreenIcon />
          </button>

          {/* Search icon */}
          <button onClick={toggleSearchInput} className="p-2 focus:outline-none">
            <SearchIcon />
          </button>

          {/* Conditionally render the search input */}
          {showSearchInput && (
            <input
              type="text"
              placeholder="Type something..."
              className="ml-2 p-2 border rounded focus:outline-none"
            />
          )}
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme toggle icon */}
          <button onClick={toggleTheme} className="p-2 focus:outline-none">
            {isDarkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
          </button>

          {/* Mail icon */}
          <button onClick={toggleChat} className="p-2 focus:outline-none">
            <MailIcon />
          </button>

          {/* Notification icon */}
          <button className="p-2 focus:outline-none">
            <NotificationsIcon />
          </button>

          {/* Profile image */}
          <div className="relative">
            <button onClick={toggleDropdown} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500 focus:outline-none">
              <Image
                src="/noavatar.png" // Replace with the path to your image
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} border rounded shadow-lg z-10`}>
                <ul className="py-1">
                  <li><a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Profiles</a></li>
                  <li><a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Calendar</a></li>
                  <li><a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Messages</a></li>
                  <li><a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Account Settings</a></li>
                  <li>
                  <form
        action={async () => {
         
          await signOut();
        }}
      >
        <button >
          Logout
        </button>
      </form>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Conditionally render the ChatList component */}
      {showChat && <ChatList />}
    </div>
  );
}
