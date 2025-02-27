import React, { useState } from 'react';

const HoverMenu = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tooltip, setTooltip] = useState({ text: '', visible: false, x: 0, y: 0 });

  const menuItems = [
    { name: 'Home', link: '#' },
    { 
      name: 'Products', 
      link: '#',
      submenu: [
        { name: 'Electronics', link: '#' },
        { name: 'Clothing', link: '#' },
        { name: 'Books', link: '#' }
      ]
    },
    { 
      name: 'Services', 
      link: '#',
      submenu: [
        { name: 'Web Design', link: '#' },
        { name: 'Marketing', link: '#' },
        { name: 'Consulting', link: '#' }
      ]
    },
    { name: 'About Us', link: '#' },
    { name: 'Contact', link: '#' }
  ];

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const handleTooltip = (text, e) => {
    if (text && e) {
      setTooltip({
        text: `Navigate to ${text}`,
        visible: true,
        x: e.clientX,
        y: e.clientY
      });
    } else {
      setTooltip({ ...tooltip, visible: false });
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div 
        className="relative"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {/* Menu Trigger Button */}
        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded transition-colors duration-300"
        >
          Hover Menu
        </button>

        {/* Dropdown Content */}
        <div className={`absolute top-14 left-0 min-w-52 bg-white rounded shadow-lg z-10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="py-1">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={item.link}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  onMouseMove={(e) => handleTooltip(item.name, e)}
                  onMouseLeave={() => handleTooltip('', null)}
                >
                  {item.name}
                  {item.submenu && (
                    <span className="float-right text-gray-400">▶</span>
                  )}
                </a>

                {/* Submenu */}
                {item.submenu && activeSubmenu === index && (
                  <div className="absolute left-full top-0 min-w-40 bg-white rounded shadow-lg">
                    <div className="py-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <a 
                          key={subIndex}
                          href={subItem.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                          onMouseMove={(e) => handleTooltip(subItem.name, e)}
                          onMouseLeave={() => handleTooltip('', null)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {tooltip.visible && (
          <div 
            className="absolute bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none z-20"
            style={{ 
              left: `${tooltip.x + 10}px`, 
              top: `${tooltip.y + 10}px` 
            }}
          >
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverMenu;