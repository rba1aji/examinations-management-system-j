import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
// import MarksTable from "./MarksTable";
import RegisterExam from "./RegisterExam";
import SelectExam from "./SelectExam"
import SelectCourse from "./SelectCourse";
import SelectBranches from "./SelectBranches";
import ManageBatches from "./ManageBatches";
import SelectBatch from "./SelectBatch";
import BatchStudentsTable from "./BatchStudentsTable";

export default function ManageExams() {
    const [selectedExam, setSelectedExam] = useState(
        JSON.parse(window.sessionStorage.getItem('selectedExam'))
    );
    const [selectedBranches, setSelectedBranches] = useState(
        // (window.sessionStorage.getItem('selectedBranches').split('###')).map((i) => JSON.parse(i))
        []
    );
    const [selectedCourse, setSelectedCourse] = useState({})
    const [selectedBatch, setSelectedBatch] = useState({});

    useEffect(() => {
        window.sessionStorage.setItem('selectedExam', JSON.stringify(selectedExam));
        window.sessionStorage.setItem('selectedBranches', selectedBranches.map((i) => JSON.stringify(i)).join('###'));
    }, [selectedExam, selectedBranches])

    useEffect(() => {
        setSelectedCourse({})
    }, [selectedBranches])
    useEffect(() => {
        setSelectedBatch({})
    }, [selectedCourse])

    return (
        <div style={{
            margin: '0 5vw',
        }}>
            <div className="h6 text-end mt-2 me-3">Manage Exams</div>
            <div className="mb-3">
                <br />
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

                        <ManageBatches
                            selectedCourse={selectedCourse}
                            selectedExam={selectedExam}
                        />,

                        <SelectBatch
                            selectedExam={selectedExam}
                            selectedCourse={selectedCourse}
                            setSelectedBatch={setSelectedBatch}
                        />

                    ].map((el, ind) => {
                        return <span className="pe-5" key={ind}>
                            {el}
                        </span>
                    })
                }
            </div>
            <div style={{
            }}>
                <table className="my-5 p-4" style={{
                    width: '100%'
                }}>
                    <tbody >
                        <tr>
                            <td style={{
                                width: '37.5%'
                            }}>
                                {
                                    [
                                        { key: "Exam Name", val: selectedExam?.name },
                                        { key: "Semester", val: selectedExam?.semester },
                                        { key: "Students Batch", val: selectedExam?.batch },
                                    ].map((itm, ind) => (
                                        itm.val && <tr key={ind}
                                        >
                                            <td className="px-3 py-3">{itm.key + ":"}</td>
                                            <td className="px-3 py-3"><b>{itm.val}</b></td>
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    [
                                        { key: "Branch", val: selectedBranches.map(b => b.id).join(", ") },
                                        { key: "Course", val: !selectedCourse?.id ? null : (selectedCourse?.id + " " + selectedCourse?.name) },
                                        { key: "Exam Batch", val: selectedBatch?.name }
                                    ].map((itm, ind) => (
                                        itm.val && <tr key={ind}
                                        >
                                            <td className="px-3 py-3">{itm.key + ":"}</td>
                                            <td className="px-3 py-3"><b>{itm.val}</b></td>
                                        </tr>
                                    ))
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mx-2">
                {selectedBatch.id && <BatchStudentsTable selectedBatch={selectedBatch} />}
            </div>
        </div >
    )
}