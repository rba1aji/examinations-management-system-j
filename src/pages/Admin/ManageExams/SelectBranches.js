import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function SelectBranches(props) {
    const [branches, setBranches] = useState([]);
    const { selectedExam,
        setSelectedBranches,
    } = props;

    useEffect(() => {
        setSelectedBranches({})
        if (selectedExam?.id) {
            console.log('exam is selected', selectedExam)
            axios({
                method: 'GET',
                url: serverurl + '/exams/' + selectedExam?.id + '/getBranches'
            })
                .then(res => {
                    setBranches(res.data.branches)
                    console.log('branches are fetched', res.data)
                })
                .catch(err => console.log(err))
        }
    }, [selectedExam, setSelectedBranches]);

    if (!selectedExam?.id) return <></>
    return (
        <>
            <Dropdown className="d-inline" autoClose="inside"
                onSelect={(branchid) => {
                    setSelectedBranches(branches.find(e => e.id === branchid))
                    console.log("branch selected", branchid)
                }}>
                <Dropdown.Toggle id="dropdown-autoclose-inside"
                    style={{
                        wordWrap: 'break-word'
                    }}
                    variant='info'
                >
                    Select Branch
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Form>
                        {
                            branches.map((branch, ind) => {
                                return (
                                    <Dropdown.Item
                                        key={ind}
                                        eventKey={branch.id}
                                    >
                                        {branch.name}
                                    </Dropdown.Item>
                                )
                            })
                        }
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}