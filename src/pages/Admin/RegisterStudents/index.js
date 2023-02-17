import RegisterMultiple from './RegisterMultiple';
import RegisterSingle from './RegisterSingle';
import { useState } from 'react';

export default function RegisterStudents() {
    const [showForm, setShowForm] = useState();
    const [showFileInput, setShowFileInput] = useState(false)

    return (
        <div style={{
            margin: '0 5vw'
        }}>
            <div className="text-center h3">Register students</div>
            <br />
            <RegisterMultiple showFileInput={showFileInput} setShowFileInput={setShowFileInput} />
            <br />
            <RegisterSingle showForm={showForm} setShowForm={setShowForm} />
        </div >
    )
}