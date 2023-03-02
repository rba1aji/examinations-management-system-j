import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { serverurl } from "../../reducers/Constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../reducers/AppContextProvider";
import { formateDob } from "../../reducers/Utils";

export default function StudentLogin() {
    const [regno, setRegno] = useState()
    const [dob, setDob] = useState('')
    const navigate = useNavigate();

    const { setUser, setUserRole, user, userRole } = AppState();


    useEffect(() => {
        if (user) {
            navigate(`/${userRole}/workspace`)
        }
    }, [])

    function handleLogin(e) {
        e.preventDefault();

        axios({
            method: 'get',
            url: serverurl + '/students/login',
            params: {
                id: regno,
                dateofbirth: formateDob(dob)
            }
        })
            .then(function (res) {
                console.log(res.data?.student);
                setUser(res.data?.student)
                setUserRole('student')
                navigate('/student/workspace');
                window.sessionStorage.setItem('user', JSON.stringify(res.data.faculty))
                window.sessionStorage.setItem('userRole', 'student')
            })
            .catch(function (error) {
                console.log(error);
                alert("Invalid student credentials!")
            });

    }


    return (
        <>
            <br />
            <div className="text-center h4">Login as Student</div>
            <br />
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
                        value={dob} onChange={(e) => {
                            setDob(e.target.value)
                        }}
                        required
                        type='date'
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