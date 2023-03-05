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

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/faculty/login');
        }

        axios({
            method: 'get',
            url: serverurl + '/exambatches/activeByFacultyid' + user?.id
        })
            .then((res) => {
                setActiveBatches(res.data?.examBatches);
            })
            .catch((err) => alert(err.response.data.message))
    }, [user])

    return (<>
        <div className="text-center">
            {/* Exams assigned to you are listed below */}
        </div>
        <br />
        {
            activeBatches?.sort((a, b) => {
                return (new Date(a.starttime) - new Date(b.starttime))
            })?.map((eb) => {
                return <Card className='bg- text-center py-3 mb-4' Body style={{
                    backgroundColor: 'azure',
                    margin: '0 25vw'
                }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <Card.Title className="mb-3">{outputFormateStartEndDateTime(eb.starttime, eb.endtime)}</Card.Title>
                                    <Card.Subtitle className="mb-3">Batch: {eb.name}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3">Branch: {eb.branchid}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3">Course: {eb.courseid}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3">Exam: {eb.examid}</Card.Subtitle>
                                    <Card.Subtitle className="mb-1">Venue: {eb.venue}</Card.Subtitle>
                                </td>
                                <td className="pe-3">
                                    <Button className="" variant="info"
                                        disabled={
                                            new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000) < new Date(eb.starttime)
                                        }
                                        onClick={() => navigate(`/faculty/exam/${eb.id}`)}
                                    >Start {'>'}</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            })
        }
    </>)
}