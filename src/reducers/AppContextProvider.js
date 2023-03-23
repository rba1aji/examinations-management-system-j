import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { serverurl } from "./Constants";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')));
    const [userRole, setUserRole] = useState(
        window.sessionStorage.getItem('userRole')
    );
    const [degrees, setDegrees] = useState([]);
    const [branches, setBranches] = useState([]);
    // const [token, setToken] = useState(
    //     document.cookie.split("token=")[1]
    // );

    useEffect(() => {
        user && axios({
            method: 'GET',
            url: serverurl + '/degrees/getAll',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                setDegrees(res.data.degrees)
            })
            .catch((err) => console.log(err));

        user && axios({
            method: 'GET',
            url: serverurl + '/branches/getAll',
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
        })
            .then((res) => setBranches(res.data.branches))
            .catch((err) => alert(err.response.data.message));
    }, [user]);



    // useEffect(() => {
    //     document.cookie = `token=${token}; expires=${new Date(Date.now() + 0.24 * 24 * 60 * 60 * 1000).toUTCString()}; path=/; SameSite=None; Secure;`;
    // }, [token])


    return (
        <AppContext.Provider
            value={{
                user, setUser,
                userRole, setUserRole,
                degrees, setDegrees,
                branches, setBranches,
                // token, setToken
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