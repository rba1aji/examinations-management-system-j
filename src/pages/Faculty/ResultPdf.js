import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ExamData from './ExamData';
import { useParams } from 'react-router-dom';
import { numbersToWords } from '../../reducers/Utils';

export default function ResultPdf() {
    const [examBatch, setExamBatch] = useState();
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
                width: '100vw',
                height: '100vh'
            }}>
                <MyDocument
                    students={students}
                    marks={marks}
                />
            </PDFViewer>
        </div>
    )
}

function MyDocument(props) {
    const { students, marks } = props;

    return (
        <>

            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.table}>
                        {/* head */}
                        <View style={styles.tr}>
                            <Text style={styles.th}>Register number</Text>
                            <Text style={styles.th}>Full Name</Text>
                            <Text style={styles.th}>Attendance</Text>
                            <Text style={styles.th}>Marks in numbers</Text>
                            <Text style={styles.th}>Marks in words</Text>
                            <Text style={styles.th}>Student sign</Text>
                        </View>
                        {/* body */}
                        {
                            students.map((st) => (
                                <View style={styles.tr}>
                                    <Text style={styles.td}>{st?.id}</Text>
                                    <Text style={styles.td}>{st?.fullname}</Text>
                                    <Text style={styles.td}>{
                                        marks?.find(m => m.studentid === st.id)?.attendance ? "Present" : "Absent"
                                    }</Text>
                                    <Text style={styles.td}>{
                                        marks?.find(m => m.studentid === st.id)?.mark
                                    }</Text>
                                    <Text style={styles.td}>{
                                        numbersToWords(marks?.find(m => m.studentid === st.id).mark)
                                    }</Text>
                                    <Text style={styles.td}></Text>
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
    section: {
        margin: 15,
        padding: 10,
        flexGrow: 1
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
        padding: '1.5px 3px',
        fontWeight: 'bolder'
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
        padding: '1.5px 3px'
    },

});
