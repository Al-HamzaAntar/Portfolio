"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';
import { initReactI18next } from 'react-i18next';
import { useTranslations } from 'next-intl';
import i18n from 'i18next';
import en from '../locales/en.json';
import ar from '../locales/ar.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default function Home() {
  const [locale, setLocale] = useState('en'); // Default locale

  useEffect(() => {
    // You can implement logic here to determine the locale dynamically
    // For example, based on user preferences or browser settings
  }, []);
  return (
    <NextIntlClientProvider locale={locale}>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </NextIntlClientProvider>
  );
}
