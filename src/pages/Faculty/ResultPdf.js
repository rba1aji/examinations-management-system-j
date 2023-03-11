import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ExamData from './ExamData';
import { useParams } from 'react-router-dom';
import { numbersToWords } from '../../reducers/Utils';
import axios from 'axios';
import { serverurl } from '../../reducers/Constants';

export default function ResultPdf() {
    const [examBatch, setExamBatch] = useState({});
    const [students, setStudents] = useState([]);
    const [marks, setMarks] = useState([]);

    const { examBatchId } = useParams();

    return (
        <div className='pt-3 bg-dark'>

            <ExamData
                examBatchId={examBatchId}
                examBatch={examBatch}
                setExamBatch={setExamBatch}
                setStudents={setStudents}
                setMarks={setMarks}
            />
            <PDFViewer style={{
                width: '100%',
                height: '100vh'
            }}>
                <MyDocument
                    students={students}
                    marks={marks}
                    examBatch={examBatch}
                />
            </PDFViewer>
        </div>
    )
}

function MyDocument(props) {
    const { students, marks, examBatch } = props;
    const [examName, setExamName] = useState('');
    useEffect(() => {
        if (examBatch.examid) {
            axios({
                method: "get",
                url: serverurl + "/exams/" + examBatch.examid + "/getName"
            })
                .then((res) => {
                    setExamName(res.data.examName)
                })
        }
    }, [examBatch])

    return (
        <>
            <Document title={(examName + "_" + marks[0]?.courseid + "_" + examBatch?.name).replaceAll(" ", "_")}>
                <Page size="A4" style={styles.page}>
                    <View style={styles.table}>
                        {/* head */}
                        <View style={styles.tr}>
                            <Text style={{ ...styles.th, width: '35%' }}>Sno</Text>
                            <Text style={{ ...styles.th, width: '110%' }}>Register number</Text>
                            <Text style={{ ...styles.th, width: '220%' }}>Full name</Text>
                            <Text style={{ ...styles.th, width: '100%' }}>Attendance</Text>
                            <Text style={{ ...styles.th, width: '65%', textAlign: '' }}>Marks in numbers</Text>
                            <Text style={{ ...styles.th, width: '140%' }}>Marks in words</Text>
                            <Text style={{ ...styles.th, width: '140%' }}>Student sign</Text>
                        </View>
                        {/* body */}
                        {
                            students.map((st, ind) => (
                                <View style={styles.tr} key={ind}>
                                    <Text style={{ ...styles.td, width: '35%' }} >{ind + 1}</Text>
                                    <Text style={{ ...styles.td, width: '110%' }}>{st?.id}</Text>
                                    <Text style={{ ...styles.td, width: '220%' }}>{st?.fullname}</Text>
                                    <Text style={{ ...styles.td, width: '100%' }}>{
                                        marks?.find(m => m.studentid === st.id)?.attendance ? "Present" : "Absent"
                                    }</Text>
                                    <Text style={{ ...styles.td, width: '65%', textAlign: '' }}>{
                                        marks?.find(m => m.studentid === st.id)?.mark
                                    }</Text>
                                    <Text style={{ ...styles.td, width: '140%' }}>{
                                        numbersToWords(marks?.find(m => m.studentid === st.id)?.mark)
                                    }</Text>
                                    <Text style={{ ...styles.td, width: '140%' }}></Text>
                                </View>
                            ))
                        }
                    </View>
                </Page>
            </Document>
        </>
    )
}


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: ''
    },
    table: {
        display: 'table',
        borderTop: '1px solid black',
        margin: '20px',
        width: '100%',
    },

    th: {
        width: '100%',
        borderRight: '1px solid black',
        fontSize: 9,
        padding: '4px 3px',
    },

    tr: {
        width: '100%',
        flexDirection: 'row',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black'
    },
    td: {
        width: '100%',
        borderRight: '1px solid black',
        fontSize: 9,
        padding: '4px 3.5px'
    },

});
