import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
// import MarksTable from "./MarksTable";
import RegisterExam from "./RegisterExam";
import SelectExam from "./SelectExam"
import SelectCourse from "./SelectCourse";
import SelectBranches from "./SelectBranches";
import ManageBatches from "./ManageBatches";
import CreateOrEditBatch from "./CreateOrEditBatch";
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
            <div className="h6 text-end ">Manage Exams</div>
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

                        <CreateOrEditBatch
                            selectedExam={selectedExam}
                            selectedCourse={selectedCourse}
                            type="create"
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
                                { key: "Course", val: !selectedCourse?.id ? null : (selectedCourse?.id + " " + selectedCourse?.name) },
                                { key: "Batch", val: selectedBatch?.name }
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
            <div className="mx-5">
                {selectedBatch.id && <BatchStudentsTable selectedBatch={selectedBatch} />}
            </div>
        </div >
    )
}