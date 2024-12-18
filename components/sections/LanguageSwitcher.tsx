import React, { useState } from 'react';
import { Globe } from 'lucide-react'; // Import the Globe icon from Lucide
import i18n from 'i18next';

interface LanguageSwitcherProps {
  setLocale: (locale: string) => void; // Function to set the locale in the parent component
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ setLocale }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const changeLanguage = (lng: string) => {
    setLocale(lng); // Update the locale state in the parent component
    i18n.changeLanguage(lng); // Change the language in i18next
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className='relative inline-block'>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-foreground p-2 rounded mt-[-7px]">
        <Globe className="w-5 h-5" /> {/* Use the Globe icon from Lucide */}
      </button>
      {isOpen && (
        <div className='absolute mt-[-150px] ml-[-100px] w-48 bg-white border rounded shadow-lg z-50 bg-background text-foreground'>
          <div className='py-1'>
            <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">English</button>
            <button onClick={() => changeLanguage('ar')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Arabic</button>
            {/* Add more languages as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;