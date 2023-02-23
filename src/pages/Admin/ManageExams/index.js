import { useState } from "react"
import { Table } from "react-bootstrap"
import CreateBatches from "./CreateBatches";
import MarksTable from "./MarksTable";
import RegisterExam from "./RegisterExam";
import SelectExam from "./SelectExam"
import SelectCourse from "./SelectCourse";
import SelectBranches from "./SelectBranches";
import ManageBatches from "./ManageBatches";

export default function ManageMarks() {
    const [selectedExam, setSelectedExam] = useState({});
    const [selectedBranches, setSelectedBranches] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([])

    console.log(selectedExam)
    return (
        <div style={{
            margin: '0 5vw',
        }}>
            <div className="h6 text-end ">Manage Exams</div>
            <div className="mb-3">
                {
                    [
                        <RegisterExam />,

                        <SelectExam
                            selectedExam={selectedExam}
                            setSelectedExam={setSelectedExam} />,

                        <SelectBranches
                            selectedExam={selectedExam}
                            selectedBranches={selectedBranches}
                            setSelectedBranches={setSelectedBranches}
                            setSelectedCourse={setSelectedCourse}
                        />,

                        <SelectCourse
                            selectedExam={selectedExam}
                            selectedBranches={selectedBranches}
                            selectedCourse={selectedCourse}
                            setSelectedCourse={setSelectedCourse}
                        />,

                        <CreateBatches
                            selectedCourse={selectedCourse}
                        />,

                        <ManageBatches
                            selectedCourse={selectedCourse}
                        />

                    ].map((el, ind) => {
                        return <span className="pe-5" key={ind}>
                            {el}
                        </span>
                    })
                }
            </div>
            <div className="mb-3">
                <div className="">Selected info:</div>
                {
                    [
                        { key: "Exam Name", val: selectedExam.name },
                        { key: "Semester", val: selectedExam.semester },
                        { key: "Batch", val: selectedExam.batch },
                        { key: "Branches", val: selectedBranches.map(b => b.id).join(", ") },
                        { key: "Course", val: !selectedCourse.id ? null : (selectedCourse?.id + " " + selectedCourse?.name) }
                    ].map((itm, ind) => (
                        itm.val && <div key={ind} className='ps-5'>
                            {itm.key}: <b>{itm.val}</b>
                        </div>
                    ))
                }
            </div>
            {/* <div className="mb-3">
                <span className="pe-3">Selected branches:</span>
                {
                    selectedBranches.map((b, ind) => {
                        return <div key={ind} className='pe-4'>
                            <b>{b.id}</b>
                        </div>
                    })
                }
            </div> */}
            <Table style={{
                width: '100%',
                // tableLayout: 'fixed',
                wordBreak: 'break-all'
            }}
            >

                <tbody style={{
                    width: '100%'
                }}>
                    <tr className="border border-info border-1">

                    </tr>
                </tbody>
            </Table>
            <div>

            </div>
            {/* <MarksTable selectedBranches={selectedBranches} /> */}
        </div >
    )
}