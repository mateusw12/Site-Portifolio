import React, { createContext, useState } from 'react';

// Cria o contexto
const SidebarContext = createContext();

// Provedor do contexto
const SidebarProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <SidebarContext.Provider value={{ collapsed, toggleCollapsed }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarContext, SidebarProvider };
