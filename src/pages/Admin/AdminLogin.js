import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { serverurl } from "../../reducers/Constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../reducers/AppContextProvider";

export default function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const { setUser, setUserRole, userRole, user } = AppState();

    useEffect(() => {
        if (user) {
            navigate(`/${userRole}/workspace`)
        }
    }, [user, userRole, navigate])

    function handleLogin(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: serverurl + '/admins/login',
            data: {
                id: username,
                password: password,
            }
        })
            .then(function (res) {
                console.log(res.data);
                window.localStorage.setItem('token', res.data.token);
                // setToken(res.data.token);
                setUser(res.data?.admin);
                setUserRole('admin')
                navigate('/admin/workspace');
                window.sessionStorage.setItem('user', JSON.stringify(res.data.admin))
                window.sessionStorage.setItem('userRole', 'admin')
            })
            .catch(function (err) {
                alert(err.response.data.message)
            });
    }


    return (
        <>
            <br />
            <br />
            <div className="text-center h4">Login as Admin</div>
            <br />
            <Form style={{ margin: '0 40vw' }}
                onSubmit={handleLogin}
            >
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        required
                        type="text"
                        autoFocus={true}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <div className="text-end mt-4">
                    <Button variant="info" type="submit" className="px-4">
                        Login
                    </Button>
                </div>
            </Form>
        </>
    )
}