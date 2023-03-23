import { useEffect } from "react";
import axios from "axios";
import { serverurl } from "../../reducers/Constants";

export default function ExamData(props) {
    const {
        examBatchId,
        examBatch, setExamBatch,
        setStudents,
        setMarks,
    } = props;

    useEffect(() => {   //set examBatch
        axios({
            method: 'get',
            url: serverurl + '/exambatches/getById/' + examBatchId,
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
        })
            .then(res => {
                setExamBatch(res.data.examBatch)
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data.message))
    }, [examBatchId])

    useEffect(() => {  //set students
        if (examBatch?.startStudentid) {
            axios({
                method: 'get',
                url: serverurl + '/students/getByStartidEndid',
                params: {
                    startid: examBatch.startStudentid,
                    endid: examBatch.endStudentid
                },
                headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
            })
                .then(res => {
                    setStudents(res.data.students)
                })
                .catch(err => console.log(err.response.data.message))
        }
    }, [examBatch])

    useEffect(() => {   //set marks
        if (examBatch?.id) {
            axios({
                method: 'get',
                url: serverurl + '/marks/getByBatchidExamidCourseid',
                params: {
                    batchid: examBatch?.id,
                    examid: examBatch?.examid,
                    courseid: examBatch?.courseid
                },
                headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }
            })
                .then(res => {
                    setMarks(res.data.marks)
                    console.log(res.data)
                })
                .catch(err => console.log(err.response.data.message))
        }
    }, [examBatch])

}