import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { serverurl } from "./Constants";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const userSession = window.sessionStorage.getItem('user')
    const [user, setUser] = useState(userSession ? JSON.parse(userSession) : null);
    const [userRole, setUserRole] = useState(
        window.sessionStorage.getItem('userRole')
    );
    const [degrees, setDegrees] = useState([]);
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: serverurl + '/degrees/getAll'
        })
            .then((res) => {
                console.log(res.data)
                setDegrees(res.data.degrees)
            })
            .catch((err) => console.log(err));

        axios({
            method: 'GET',
            url: serverurl + '/branches/getAll'
        })
            .then((res) => setBranches(res.data.branches))
            .catch((err) => console.log(err));
    }, []);




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