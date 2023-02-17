import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { serverurl } from "../../reducers/Constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../reducers/AppContextProvider";

export default function StudentLogin() {
    const [regno, setRegno] = useState()
    const [dob, setDob] = useState('')
    const navigate = useNavigate();

    const { setUser } = AppState();

    function handleLogin(e) {
        e.preventDefault();

        axios({
            method: 'get',
            url: serverurl + '/students/login',
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
            <div className="text-center h3">Login as Student</div>
            <Form style={{ margin: '0 40vw' }}
                onSubmit={handleLogin}
            >
                <Form.Group className="mb-3" >
                    <Form.Label>Register number</Form.Label>
                    <Form.Control placeholder="Enter register no"
                        value={regno} onChange={(e) => setRegno(e.target.value)}
                        required
                        type="number"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control placeholder="dd/mm/yyyy"
                        value={dob} onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </Form.Group>
                <div className="text-end">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </>
    )
}