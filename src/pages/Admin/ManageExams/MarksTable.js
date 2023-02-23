import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { serverurl } from "../../../reducers/Constants";

export default function MarksTable(props) {
    const { selectedBranches } = props;
    const [students, setStudents] = useState([]);

    useEffect(() => {
        if (selectedBranches.length > 0) {
            // console.log(selectedBranch.map(b => b.id))
            axios({
                method: 'get',
                url: serverurl + '/students/getByBranchidList',
                params: {
                    branchidList: selectedBranches.map((b) => b.id).join(",")
                }
            })
                .then((res) => setStudents(res.data.students))
                .catch((err) => alert(err.message))
        }
    }, [selectedBranches])

    return (
        <>
            <div style={{
                width: '100%',
                height: '82vh',
                overflow: 'scroll',
                fontSize: '80%'
            }}
                className=" border "
            >

                <Table style={{
                    width: '100%',
                }}
                    bordered
                >
                    <thead>
                        <tr style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1
                        }}>
                            {
                                ["Sno", "Reg no", "Branch", "Course1", "Course 2", "Course 3", 'course4', 'course 5', "course 6"]
                                    .map((item, index) => {
                                        return <th
                                            key={index}
                                            className="bg-light"
                                        >
                                            {item}
                                        </th>;
                                    })
                            }
                        </tr>
                    </thead>
                    <tbody
                        style={{
                            height: '70vh',
                            overflow: 'scroll'
                        }}>
                        {
                            students?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.id}</td>
                                        <td>{item.branchid}</td>
                                        {/* <td>{item.credits}</td>
                                        <td>{degrees.find(e => e.id === item.degreeid)?.name}</td>
                                        <td>{branches.find(e => e.id === item.branchid)?.name}</td>
                                        <td>{item.semester}</td>
                                        <td>{item.batch}</td>  */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}