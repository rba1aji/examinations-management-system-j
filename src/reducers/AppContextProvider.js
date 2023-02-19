import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { serverurl } from "./Constants";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState('');
    const [degrees, setDegrees] = useState([]);
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: serverurl + '/degrees/getAll'
        })
            .then((res) => setDegrees(res.data.degrees))
            .catch((err) => console.log(err));

        axios({
            method: 'GET',
            url: serverurl + '/branches/getAll'
        })
            .then((res) => setBranches(res.data.branches))
            .catch((err) => console.log(err));
    }, [setDegrees, setBranches]);


    return (
        <AppContext.Provider
            value={{
                user, setUser,
                userRole, setUserRole,
                degrees, setDegrees,
                branches, setBranches
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