import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function SelectCourse(props) {
    const [courses, setCourses] = useState([]);
    const { selectedExam, selectedBranches,
        // selectedCourses, setSelectedCourses 
        selectedCourse, setSelectedCourse
    } = props;


    useEffect(() => {
        setCourses([])
        if (selectedBranches.length > 0) {
            console.log('branches are selected', selectedBranches)
            axios({
                method: 'get',
                url: serverurl + `/courses/batch${selectedExam.batch}/semester${selectedExam.semester}/getByBranchidList`,
                params: {
                    branchidList: selectedBranches?.map(b => b.id).join(",")
                }
            })
                .then(res => {
                    setCourses(res.data.courses)
                    console.log("courses are fetched", res.data)
                })
                .catch(err => console.log(err))
        }
    }, [selectedBranches, selectedExam])


    if (!selectedBranches.length) return <></>
    return (
        <>
            <button style={{
            }}
                className='p-0 bg-transparent border-0'
            >
                {/* <FloatingLabel controlId="floatingSelect" label="Course"> */}
                <Form.Select
                    value={selectedCourse?.id}
                    onChange={(e) => {
                        setSelectedCourse(courses.find(c => c.id == e.target.value))
                        console.log("course is selected")
                    }}
                    className='border border-info'
                >
                    <option value={null}>Select course</option>
                    {
                        courses.map((c, ind) => {
                            return (
                                <option
                                    key={ind}
                                    value={c.id}
                                    id={c.id}
                                >
                                    {c.id}
                                </option>
                            )
                        })
                    }
                </Form.Select>
                {/* </FloatingLabel> */}
            </button>
        </>
    )
}