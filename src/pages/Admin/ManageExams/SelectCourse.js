import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function SelectCourse(props) {
    const [courses, setCourses] = useState([]);
    const {
        selectedExam, selectedBranches,
        setSelectedCourse
    } = props;


    useEffect(() => {
        setCourses([])
        if (selectedBranches?.id) {
            console.log('branches are selected', selectedBranches)
            axios({
                method: 'get',
                url: serverurl + `/courses/getByBranchidSemesterBatch`,
                params: {
                    branchid: selectedBranches?.id,
                    semester: selectedExam?.semester,
                    batch: selectedExam?.batch
                }
            })
                .then(res => {
                    setCourses(res.data.courses)
                    console.log("courses are fetched", res.data)
                })
                .catch(err => console.log(err))
        }
    }, [selectedBranches, selectedExam])


    if (!selectedBranches?.id) return <></>
    return (
        <>
            <Dropdown className="d-inline" autoClose="inside" onSelect={(courseid) => {
                setSelectedCourse(courses.find(c => c.id === courseid))
                console.log("batch selected", courseid)
            }}>
                <Dropdown.Toggle id="dropdown-autoclose-inside" style={{
                    wordWrap: 'break-word'
                }}
                    variant='info'
                >
                    Select Course
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    {
                        courses?.map((b, ind) => {
                            return (
                                <Dropdown.Item
                                    key={ind}
                                    eventKey={b.id}
                                >
                                    {b.id + " " + b.name}
                                </Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}