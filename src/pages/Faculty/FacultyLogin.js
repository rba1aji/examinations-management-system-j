import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { serverurl } from "../../reducers/Constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../reducers/AppContextProvider";

export default function FacultyLogin() {
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
            url: serverurl + '/faculties/login',
            data: {
                id: username,
                password: password
            }
        })
            .then((res) => {
                console.log(res.data);
                // setToken(res.data.token);
                window.localStorage.setItem('token', res.data.token);
                setUser(res.data?.faculty);
                setUserRole('faculty')
                navigate('/faculty/workspace');
                window.sessionStorage.setItem('user', JSON.stringify(res.data.faculty))
                window.sessionStorage.setItem('userRole', 'faculty')
            })
            .catch(function (err) {
                console.log(err);
                alert(err.response.data.message)
            });
    }


    return (
        <>
            <br />
            <br />
            <div className="text-center h4">Login as Faculty</div>
            <br />
            <Form style={{ margin: '0 40vw' }}
                onSubmit={handleLogin}
            >
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        required
                        autoFocus={true}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
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