import React from 'react';
import { useTranslations } from 'next-intl';
import i18n from 'i18next';

interface LanguageSwitcherProps {
  setLocale: (locale: string) => void; // Function to set the locale in the parent component
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ setLocale }) => {
  const t = useTranslations();

  const changeLanguage = (lng: string) => {
    setLocale(lng); // Update the locale state in the parent component
    i18n.changeLanguage(lng); // Change the language in i18next
  };

  return (
    <div className='fixed top-16 right-5'>
      <button className="bg-background text-foreground" onClick={() => changeLanguage('ar')}>Ar</button>
      <button className="bg-background text-foreground" onClick={() => changeLanguage('en')}>En</button>
    </div>
  );
};

export default LanguageSwitcher;
