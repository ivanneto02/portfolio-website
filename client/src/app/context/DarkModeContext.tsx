import React, { createContext, useState } from "react";

interface DarkContextType {
        darkMode: boolean;
        toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkContextType>({ darkMode: true, toggleDarkMode: () => { console.log("test") } });

interface Props {
        children: React.ReactNode;
}

const DarkModeProvider = ({ children }: Props) => {
        const [darkMode, setDarkMode] = useState(true);

        const toggleDarkMode = () => { setDarkMode(!darkMode) };

        return (
                <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                        {children}
                </DarkModeContext.Provider>
        );
}

export { DarkModeContext, DarkModeProvider };
