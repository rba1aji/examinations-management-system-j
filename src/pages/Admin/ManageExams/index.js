import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
// import MarksTable from "./MarksTable";
import RegisterExam from "./RegisterExam";
import SelectExam from "./SelectExam"
import SelectCourse from "./SelectCourse";
import SelectBranches from "./SelectBranches";
import ManageBatches from "./ManageBatches";
import CreateOrEditBatch from "./CreateOrEditBatch";

export default function ManageExams() {
    const [selectedExam, setSelectedExam] = useState({});
    const [selectedBranches, setSelectedBranches] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState({})

    useEffect(() => {
        setSelectedCourse({})
    }, [selectedBranches])

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

                        <CreateOrEditBatch
                            selectedExam={selectedExam}
                            selectedCourse={selectedCourse}
                            type="create"
                        />,

                        <ManageBatches
                            selectedCourse={selectedCourse}
                            selectedExam={selectedExam}
                        />

                    ].map((el, ind) => {
                        return <span className="pe-5" key={ind}>
                            {el}
                        </span>
                    })
                }
            </div>
            <br />
            <div style={{
            }}>
                <table className="mb-3" style={{
                    // width: '60%'
                }}>
                    <tbody >
                        {
                            [
                                { key: "Exam Name", val: selectedExam?.name },
                                { key: "Semester", val: selectedExam?.semester },
                                { key: "Batch", val: selectedExam?.batch },
                                { key: "Branches", val: selectedBranches.map(b => b.id).join(", ") },
                                { key: "Course", val: !selectedCourse?.id ? null : (selectedCourse?.id + " " + selectedCourse?.name) }
                            ].map((itm, ind) => (
                                itm.val && <tr key={ind}
                                >
                                    <td className="px-3 py-3">{itm.key + ":"}</td>
                                    <td className="px-3 py-3"><b>{itm.val}</b></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Table style={{
                width: '100%',
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