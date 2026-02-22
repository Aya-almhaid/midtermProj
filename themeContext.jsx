import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [dark, setDark] = useState(true);

    const toggleTheme = () => setDark(!dark);

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            <div
                style={{
                    background: dark ? "#111827" : "#f3f4f6",
                    color: dark ? "white" : "#111",
                    minHeight: "100vh"
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
