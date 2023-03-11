import { useEffect, useState } from "react"
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
        JSON.parse(window.sessionStorage.getItem('selectedBranch'))
        // []
    );
    const [selectedCourse, setSelectedCourse] = useState(
        JSON.parse(window.sessionStorage.getItem('selectedCourse'))
    )
    const [selectedBatch, setSelectedBatch] = useState({});

    useEffect(() => {
        window.sessionStorage.setItem('selectedExam', JSON.stringify(selectedExam));
        window.sessionStorage.setItem('selectedBranch', JSON.stringify(selectedBranches));
        window.sessionStorage.setItem('selectedCourse', JSON.stringify(selectedCourse));
    }, [selectedExam, selectedBranches, selectedCourse])

    useEffect(() => {
        setSelectedCourse({})
    }, [selectedBranches])
    useEffect(() => {
        setSelectedBatch({})
    }, [selectedCourse])

    return (
        <div style={{
            margin: '0 2.5vw',
        }}>
            {/* <br />
            <div className="h6 text-end mt-2 ">Manage Exams</div> */}
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
                                        { key: "Branch", val: selectedBranches?.name },
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
                {selectedBatch?.id && <BatchStudentsTable selectedBatch={selectedBatch} />}
            </div>
            <br />
            <br />
        </div >
    )
}