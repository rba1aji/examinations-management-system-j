import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function SelectBranches(props) {
    const [branches, setBranches] = useState([]);
    const { selectedExam,
        selectedBranches, setSelectedBranches,
    } = props;

    useEffect(() => {
        setSelectedBranches([])
        if (selectedExam.id) {
            console.log('exam is selected', selectedExam)
            axios({
                method: 'GET',
                url: serverurl + '/exams/' + selectedExam.id + '/getBranches'
            })
                .then(res => {
                    setBranches(res.data.branches)
                    console.log('branches are fetched', res.data)
                })
                .catch(err => console.log(err))
        }
    }, [selectedExam, setSelectedBranches]);

    if (!selectedExam.id) return <></>
    return (
        <>
            <Dropdown className="d-inline" autoClose="inside">
                <Dropdown.Toggle id="dropdown-autoclose-inside" style={{
                    wordWrap: 'break-word'
                }}
                    variant='info'
                >
                    Select Branches
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Form>
                        {
                            branches.map((branch, ind) => {
                                return (
                                    <div className="px-3" key={ind}>
                                        <Form.Check
                                            key={ind}
                                            value={branch.id}
                                            label={branch.id}
                                            onChange={(e) => {
                                                setSelectedBranches(prev => {
                                                    return prev.includes(branch) ?
                                                        prev.filter(el => el !== branch) :
                                                        [...prev, branch]
                                                })
                                            }}
                                            checked={selectedBranches.includes(branch)}
                                        />
                                    </div>
                                )
                            })
                        }
                        {/* <Dropdown.Item className="text-end py-0">
                            <Button className='py-1 m-0' variant="info" style={{
                                fontSize: '85%'
                            }}>Ok</Button>
                        </Dropdown.Item> */}
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}