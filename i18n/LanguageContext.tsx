
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "pt" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

const STORAGE_KEY = "pedro-faber-language";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>("pt");

  useEffect(() => {
    const savedLanguage =
      window.localStorage.getItem(STORAGE_KEY);

    if (
      savedLanguage === "pt" ||
      savedLanguage === "en"
    ) {
      // Restaura a preferência salva.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLanguage);
    }
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);

    window.localStorage.setItem(
      STORAGE_KEY,
      nextLanguage
    );
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage deve ser utilizado dentro de LanguageProvider"
    );
  }

  return context;
}
