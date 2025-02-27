import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X, ChevronDown, Star, Tag, Clock, Grid, FileText, LifeBuoy, Globe, Package, Settings, LogOut, HelpCircle, MessageSquare, Phone, Mail, Flag } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = [
   'Automobiles & Motorcycles','Bags & Shoes', 'Computer and office', 'Consumer Electronics',
   'Health, Beauty & Hair','Home Improvement','Home,Garden & Furniture', 'Jewelries & Watches',  'Men\'s Clothing', 
   'Women\'s Clothing', 'Phone & Accessories','Sports & Outdoors', 'Toys, Kids & Babies', 'Kids & Babies', 
  ];

  const categorySubmenus = {
    "Automobiles & Motorcycles": ['Exterior Accessories', 'Interior Accessories','Tools','Car Electronics', 'Replacement Parts','Motorcycle Accessories'],
    "Bags & Shoes": ['Men\'s Luggage & Bags', 'Women\'s  Luggage & Bags', 'Women\'s Shoes', 'Men\'s Shoes'],
    "Consumer Electronics": ['Accessories & Parts', 'Home Audio & Video'],
    "Computer and office" : ['Office Electronics','Tablet & Laptop Accessories','Security & Protection', 'Storage Devices','Laptop & Tablets', 'Networking'],
    "Health, Beauty & Hair": ['Nail Art & Tools','Hair & Accessories', 'Synthetic hair', 'Skin Care','Hair Weaves','Make Up','Wigs & Extension', 'Beauty Tools'],
    "Home Improvement": ['Led Lighting','Outdoor Lighting', 'Indoor Lighting', 'Tools', 'Home Appliances'],
    "Home,Garden & Furniture": ['Home Textiles','Arts, Craft & Sewing','Festive & Party Supplies', 'Pet Products','Kitchen , Dining & Bar', 'Home Storage'],
    "Jewelries & Watches": ['Wedding & Engagement'],
    
    "Women's Clothing": ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Activewear', 'Swimwear', 'Accessories', 'Lingerie', 'Sleepwear', 'Jumpsuits', 'Skirts', 'Jeans', 'Sweaters', 'Hoodies', 'Cardigans', 'Blazers'],
    "Men's Clothing": ['Shirts', 'Pants', 'Suits', 'Outerwear', 'Activewear', 'Underwear', 'Accessories', 'Jeans', 'T-shirts', 'Sweaters', 'Hoodies', 'Jackets', 'Shorts', 'Blazers', 'Swimwear'],
    
    // Add other categories as needed
  };

  // Add scroll event listener to detect when to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) { // Height of the notification bar
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };



  // Set first category as active on initial load

  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, []);
  
  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="font-sans">
      {/* Top notification bar - not sticky */}
      <div className="bg-orange-500 text-white text-center text-sm py-1">
        Extra 30% off your first order with code NEW30 • Free shipping on orders over $50
      </div>
      
      {/* Placeholder div to prevent content jump when navbar becomes fixed */}
      {isScrolled && <div className="h-16 md:h-28"></div>}
      
      {/* Main navbar - sticky after scroll */}
      <div className={`bg-white shadow-md w-full z-50 ${
        isScrolled ? 'fixed top-0 left-0 right-0 animate-fadeDown' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Upper section - Logo, search & icons */}
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-orange-500 font-bold text-3xl tracking-tighter">
                sheaker
              </div>
            </div>
            
            {/* Categories between logo and search - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-3 ml-6">
              <a href="#" className="flex flex-row items-center text-xs text-gray-700 hover:text-orange-500 gap-2">
                <Tag size={12} />
                <span>Hottest Items</span>
              </a>
              <a href="#" className="flex flex-row items-center text-xs text-gray-700 hover:text-orange-500 gap-2">
                <Star size={16} />
                <span>5 Star Rated</span>
              </a>
              <a href="#" className="flex flex-row items-center text-xs text-gray-700 hover:text-orange-500 gap-2">
                <Tag size={16} />
                <span>Special Offer</span>
              </a>
              <a href="#" className="flex flex-row items-center text-xs text-gray-700 hover:text-orange-500 gap-2">
                <Clock size={16} />
                <span>New Arrival</span>
              </a>
              
              {/* Categories dropdown */}
              <div className="relative group">
      <a href="#" className="flex flex-row items-center text-xs text-gray-700 hover:text-orange-500 gap-2">
        <Grid size={16} />
        <span>Categories</span>
        <ChevronDown size={12} />
      </a>
      
      {/* Main dropdown container */}
      <div className="absolute left-0 mt-6 -ml-56 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex">
        {/* Categories list */}
        <div className="w-96">
          <div className="grid grid-cols-1 gap-0">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className={`relative ${activeCategory === category ? 'bg-orange-50 text-orange-500' : ''}`}
                onMouseEnter={() => handleCategoryHover(category)}
              >
                <a 
                  href="#" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 flex justify-between items-center"
                >
                  <span>{category}</span>
                  {categorySubmenus[category] && <ChevronDown size={12} />}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Submenu container - always visible as part of the main box */}
        {activeCategory && categorySubmenus[activeCategory] && (
          <div className="w-96 bg-white shadow-lg border-l border-gray-100 max-h-96 overflow-y-auto p-8">
            <div className="grid grid-cols-3 gap-6">
              {categorySubmenus[activeCategory].map((subItem, subIndex) => (
                <a 
                  key={subIndex} 
                  href="#" 
                  className="flex flex-col items-center text-center p-2 hover:bg-orange-50 hover:text-orange-500 rounded-md"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    {/* Placeholder for image */}
                  </div>
                  <span className="text-sm text-gray-700 mt-2">{subItem}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
            </div>
            
            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search for products" 
                  className="w-full pl-3 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search"
                />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center" aria-label="Search">
                  <Search size={20} className="text-gray-500" />
                </button>
              </div>
            </div>
            
            {/* Icons after search bar */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Orders & Account dropdown */}
              <div className="relative group">
                <a href="#" className="flex items-center text-gray-700 hover:text-orange-500">
                  <FileText size={20} className="mr-1" />
                  <span className="text-sm">Orders & Account</span>
                  <ChevronDown size={12} className="ml-1" />
                </a>
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-96 overflow-y-auto">
                  <div className="p-3 border-b border-gray-100">
                    <div className="font-semibold text-sm">Your Account</div>
                    <div className="text-xs text-gray-500">Manage your orders and settings</div>
                  </div>
                  <div className="py-2">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Package size={16} className="mr-2" />
                      <span>My Orders</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Heart size={16} className="mr-2" />
                      <span>Wishlist</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <User size={16} className="mr-2" />
                      <span>Profile Settings</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Settings size={16} className="mr-2" />
                      <span>Account Settings</span>
                    </a>
                  </div>
                  <div className="border-t border-gray-100 py-2">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <LogOut size={16} className="mr-2" />
                      <span>Sign Out</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Support dropdown */}
              <div className="relative group">
                <a href="#" className="flex items-center text-gray-700 hover:text-orange-500">
                  <LifeBuoy size={20} className="mr-1" />
                  <span className="text-sm">Support</span>
                  <ChevronDown size={12} className="ml-1" />
                </a>
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-96 overflow-y-auto">
                  <div className="p-3 border-b border-gray-100">
                    <div className="font-semibold text-sm">Help & Support</div>
                    <div className="text-xs text-gray-500">Get assistance when you need it</div>
                  </div>
                  <div className="py-2">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <HelpCircle size={16} className="mr-2" />
                      <span>FAQs</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <MessageSquare size={16} className="mr-2" />
                      <span>Live Chat</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Phone size={16} className="mr-2" />
                      <span>Contact Us</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Mail size={16} className="mr-2" />
                      <span>Email Support</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Language dropdown */}
              <div className="relative group">
                <a href="#" className="flex items-center text-gray-700 hover:text-orange-500">
                  <Globe size={20} className="mr-1" />
                  <span className="text-sm">EN</span>
                  <ChevronDown size={12} className="ml-1" />
                </a>
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-96 overflow-y-auto">
                  <div className="py-2">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>English</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>Español</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>Français</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>Deutsch</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>Italiano</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>Português</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>日本語</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                      <Flag size={16} className="mr-2" />
                      <span>中文</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <a href="#" className="text-gray-700 hover:text-orange-500 relative" aria-label="Shopping Cart">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
            
            {/* Mobile icons */}
            <div className="flex md:hidden items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-orange-500 relative" aria-label="Shopping Cart">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
          </div>
          
          {/* Mobile search bar */}
          <div className="md:hidden mb-3">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for products" 
                className="w-full pl-3 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center" aria-label="Search">
                <Search size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
          
          {/* Categories navigation - Desktop */}
          {/* <div className="hidden md:flex space-x-1 overflow-x-auto pb-3 text-sm">
            {categories.map((category, index) => (
              <div key={index} className="relative group">
                <a 
                  href="#" 
                  className="whitespace-nowrap px-3 py-2 rounded-full hover:bg-gray-100 text-gray-700 flex items-center"
                >
                  {category}
                  {categorySubmenus[category] && <ChevronDown size={12} className="ml-1" />}
                </a>
                {categorySubmenus[category] && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 invisible group-hover:visible max-h-96 overflow-y-auto">
                    {categorySubmenus[category].map((subItem, subIndex) => (
                      <a 
                        key={subIndex} 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="whitespace-nowrap px-3 py-2 rounded-full hover:bg-gray-100 text-gray-700 flex items-center">
              More <ChevronDown size={14} className="ml-1" />
            </a>
          </div> */}
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-2 pb-4">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <a href="#" className="flex flex-col items-center text-xs text-gray-700">
                  <Tag size={16} className="mb-1" />
                  <span>Hottest</span>
                </a>
                <a href="#" className="flex flex-col items-center text-xs text-gray-700">
                  <Star size={16} className="mb-1" />
                  <span>5 Star</span>
                </a>
                <a href="#" className="flex flex-col items-center text-xs text-gray-700">
                  <Tag size={16} className="mb-1" />
                  <span>Offers</span>
                </a>
                <a href="#" className="flex flex-col items-center text-xs text-gray-700">
                  <Clock size={12} className="mb-1" />
                  <span>New</span>
                </a>
              </div>
              <div className="flex flex-col space-y-2 max-h-96 overflow-y-auto">
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="px-3 py-2 hover:bg-gray-100 text-gray-700 border-b border-gray-100 last:border-0"
                  >
                    {category}
                  </a>
                ))}
                <a href="#" className="px-3 py-2 hover:bg-gray-100 text-gray-700 border-b border-gray-100">
                  Orders & Account
                </a>
                <a href="#" className="px-3 py-2 hover:bg-gray-100 text-gray-700 border-b border-gray-100">
                  Support
                </a>
                <a href="#" className="px-3 py-2 hover:bg-gray-100 text-gray-700">
                  Language: EN
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      
     
    </div>
  );
};

export default Navbar;