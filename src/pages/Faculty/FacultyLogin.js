import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { serverurl } from "../../reducers/Constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../reducers/AppContextProvider";

export default function FacultyLogin() {
    const [regno, setRegno] = useState()
    const [dob, setDob] = useState('')
    const navigate = useNavigate();

    const { setUser } = AppState();

    function handleLogin(e) {
        e.preventDefault();

        axios({
            method: 'get',
            url: serverurl + '/faculties/login',
            params: {
                id: regno,
                dateofbirth: dob
            }
        })
            .then(function (response) {
                console.log(response.data?.student);
                setUser(response.data?.student)
                navigate('/student/workspace');
            })
            .catch(function (error) {
                console.log(error);
                alert("Invalid student credentials!")
            });

    }


    return (
        <>
            <br />
            <div className="text-center h4">Login as Faculty</div>
            <br />
            <Form style={{ margin: '0 40vw' }}
                onSubmit={handleLogin}
            >
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username"
                        value={regno} onChange={(e) => setRegno(e.target.value)}
                        required
                        type="number"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password"
                        value={dob} onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </Form.Group>
                <div className="text-end">
                    <Button variant="info" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </>
    )
}