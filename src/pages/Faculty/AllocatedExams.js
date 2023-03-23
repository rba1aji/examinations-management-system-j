import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { serverurl } from "../../reducers/Constants";
import { AppState } from "../../reducers/AppContextProvider";
import { useNavigate } from "react-router-dom";
import { outputFormateStartEndDateTime } from "../../reducers/Utils";

export default function AllocatedExams() {
    const [activeBatches, setActiveBatches] = useState([]);
    const {
        user
    } = AppState();
    const [examNames, setExamNames] = useState([]);
    const [courseNames, setCourseNames] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/faculty/login');
        }

        axios({
            method: 'get',
            url: serverurl + '/exambatches/activeByFacultyid' + user?.id,
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
        })
            .then((res) => {
                setActiveBatches(res.data?.examBatches);
            })
            .catch((err) => alert(err.response.data.message))
    }, [user, navigate])

    useEffect(() => {
        activeBatches?.map(async eb => {
            const exam = await axios({
                method: 'get',
                url: serverurl + '/exams/' + eb.examid + '/getName',
                headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
            })
            setExamNames((prev) =>
                [...prev, { id: eb.examid, name: exam.data.examName }]
            )

            const course = await axios({
                method: 'get',
                url: serverurl + '/courses/' + eb.courseid + '/getName',
                headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
            })
            setCourseNames((prev) =>
                [...prev, { id: eb.courseid, name: course.data.courseName }]
            )
        })
    }, [activeBatches])

    return (<>
        <div className="text-center">
            {/* Exams assigned to you are listed below */}
        </div>
        <br />
        {
            activeBatches?.sort((a, b) => {
                return (new Date(a.starttime) - new Date(b.starttime))
            })?.map((eb, ind) => {
                return <Card className='bg- mb-4' style={{
                    backgroundColor: 'azure',
                    margin: '0 23vw',
                }}
                    key={ind}
                >
                    <Card.Body className="py-3">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="ps-3">
                                        <Card.Title className="mb-3 text-center">{outputFormateStartEndDateTime(eb.starttime, eb.endtime)}</Card.Title>
                                        <Card.Subtitle className="mb-3">Batch: {eb.name}</Card.Subtitle>
                                        <Card.Subtitle className="mb-3">Branch: {eb.branchid}</Card.Subtitle>
                                        <Card.Subtitle className="mb-3">Course: {eb.courseid + " " + courseNames?.find(c => c.id === eb.courseid)?.name}</Card.Subtitle>
                                        <Card.Subtitle className="mb-3">Exam: {examNames?.find(e => e.id === eb.examid)?.name}</Card.Subtitle>
                                        <Card.Subtitle className="mb-1">Venue: {eb.venue}</Card.Subtitle>
                                    </td>
                                    <td className="ps-4">
                                        <Button className="" variant="info"
                                            disabled={
                                                new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000) < new Date(eb.starttime)
                                            }
                                            onClick={() => navigate(`/faculty/exam/${eb.id}`)}
                                            style={{

                                            }}
                                        >{'Open >'}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            })
        }
    </>)
}