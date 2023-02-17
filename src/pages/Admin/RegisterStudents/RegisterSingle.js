import axios from 'axios';
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";
import { AppState } from '../../../reducers/AppContextProvider'
import { formateDob } from '../../../reducers/Utils';

export default function RegisterSingle(props) {
    const initialData = {
        id: '',
        dateofbirth: '',
        fullname: '',
        degree: '',
        branch: '',
        section: '',
        yearofjoin: '',
        yearofpassout: '',
        email: '',
        phone: '',
        address: ''
    };
    const [data, setData] = useState({ initialData });
    const { setUser, setUserRole } = AppState();
    const { showForm, setShowForm } = props;

    function handleRegister(e) {
        e.preventDefault();

        axios({
            method: 'post',
            url: serverurl + '/students/register',
            data: { ...data, dateofbirth: formateDob(data.dateofbirth) }
        })
            .then((res) => {
                console.log(res.data);
                setUser(res.data.student);
                setUserRole("Student");
                alert("Registration success");
                setData(initialData)
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <>
            <div className={showForm ? 'bg-light' : ''}
                style={{
                    margin: '0 15vw',
                    borderRadius: '10px',
                    border: showForm ? '1px solid #adb5bd' : ""
                }}>
                <br />
                <div className="text-center">
                    <Button
                        onClick={() => setShowForm(!showForm)}
                    // variant={showFileInput ? 'outline-primary' : 'primary'}
                    >
                        Register single student
                    </Button>
                </div >
                <br />
                {
                    showForm &&

                    <Form
                        onSubmit={handleRegister}
                    >
                        <table style={{
                            width: '100%'
                        }}>
                            <tbody>
                                <tr>
                                    <td style={{
                                        width: '50%',
                                        paddingLeft: '15%',
                                        paddingRight: '5%'
                                    }}>
                                        {
                                            [
                                                {
                                                    label: "Register number",
                                                    type: "number",
                                                    placeholder: "Enter register no",
                                                    required: true,
                                                    value: data.id,
                                                    onChange: (e) => setData({ ...data, id: e.target.value })
                                                },
                                                {
                                                    label: "Date of birth",
                                                    type: "date",
                                                    placeholder: "dd/mm/yyyy",
                                                    required: true,
                                                    value: data.dateofbirth,
                                                    onChange: (e) => {
                                                        setData({ ...data, dateofbirth: e.target.value })
                                                    }
                                                },
                                                {
                                                    label: "Full name",
                                                    type: "text",
                                                    placeholder: "Enter full name",
                                                    required: true,
                                                    value: data.fullname,
                                                    onChange: (e) => setData({ ...data, fullname: e.target.value })
                                                },
                                                {
                                                    label: "Degree",
                                                    type: "text",
                                                    placeholder: "Enter degree",
                                                    required: true,
                                                    value: data.degree,
                                                    onChange: (e) => setData({ ...data, degree: e.target.value })
                                                },
                                                {
                                                    label: "Branch",
                                                    type: "text",
                                                    placeholder: "Enter branch",
                                                    required: true,
                                                    value: data.branch,
                                                    onChange: (e) => setData({ ...data, branch: e.target.value })
                                                }
                                            ].map((item, index) => {
                                                return (
                                                    <Form.Group className="mb-3" key={index} >
                                                        <Form.Label>{item.label}</Form.Label>
                                                        <Form.Control placeholder={item.placeholder}
                                                            value={item.value} onChange={item.onChange}
                                                            required={item.required}
                                                            type={item.type}
                                                        />
                                                    </Form.Group>
                                                )
                                            })
                                        }
                                    </td>
                                    <td style={{
                                        paddingRight: '15%',
                                        paddingLeft: '5%'
                                    }}>
                                        {
                                            [

                                                {
                                                    label: "Section",
                                                    type: "text",
                                                    placeholder: "Enter section",
                                                    required: true,
                                                    value: data.section,
                                                    onChange: (e) => setData({ ...data, section: e.target.value })
                                                },
                                                {
                                                    label: "Year of join",
                                                    type: "number",
                                                    placeholder: "Enter year of join",
                                                    required: false,
                                                    value: data.yearofjoin,
                                                    onChange: (e) => setData({ ...data, yearofjoin: e.target.value })
                                                },
                                                {
                                                    label: 'Year of passout',
                                                    type: "number",
                                                    placeholder: "Enter year of passout",
                                                    required: false,
                                                    value: data.yearofpassout,
                                                    onChange: (e) => setData({ ...data, yearofpassout: e.target.value })
                                                },
                                                {
                                                    label: "Email",
                                                    type: "email",
                                                    placeholder: "Enter email",
                                                    required: false,
                                                    value: data.email,
                                                    onChange: (e) => setData({ ...data, email: e.target.value })
                                                },
                                                {
                                                    label: "Phone",
                                                    type: "number",
                                                    placeholder: "Enter phone",
                                                    required: false,
                                                    value: data.phone,
                                                    onChange: (e) => setData({ ...data, phone: e.target.value })
                                                }
                                            ].map((item, index) => {
                                                return (
                                                    <Form.Group className="mb-3" key={index} >
                                                        <Form.Label>{item.label}</Form.Label>
                                                        <Form.Control placeholder={item.placeholder}
                                                            value={item.value} onChange={item.onChange}
                                                            required={item.required}
                                                            type={item.type}
                                                        />
                                                    </Form.Group>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        padding: '0 15%'
                                    }}
                                        colSpan={2}
                                    >
                                        {[
                                            {
                                                label: "Address",
                                                type: "text",
                                                placeholder: "Enter address",
                                                required: false,
                                                value: data.address,
                                                onChange: (e) => setData({ ...data, address: e.target.value })
                                            }
                                        ].map((item, index) => {
                                            return (
                                                <Form.Group className="mb-3" key={index} >
                                                    <Form.Label>{item.label}</Form.Label>
                                                    <Form.Control placeholder={item.placeholder}
                                                        value={item.value} onChange={item.onChange}
                                                        required={item.required}
                                                        type={item.type}
                                                    />
                                                </Form.Group>
                                            )
                                        })
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center">
                            <Button type="submit">Register</Button>
                        </div>
                    </Form>
                }
                <br />
            </div>
        </>
    )
}