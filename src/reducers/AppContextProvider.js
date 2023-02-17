import React from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState('');

    return (
        <AppContext.Provider
            value={{
                user, setUser,
                userRole, setUserRole
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

export const AppState = () => {
    return useContext(AppContext);
}