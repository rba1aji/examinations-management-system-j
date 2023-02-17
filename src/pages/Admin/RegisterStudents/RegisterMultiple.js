import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import * as XLSX from 'xlsx'
import axios from "axios";
import { serverurl } from "../../../reducers/Constants"
import { formateDob } from "../../../reducers/Utils";

export default function RegisterMultiple(props) {
    const [file, setFile] = useState(null);
    const { showFileInput, setShowFileInput } = props;

    function sendToServer(data) {
        console.log(data);
        axios({
            method: 'post',
            url: serverurl + '/students/registerMultiple',
            data: data
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function aoaToJson(aoa) {
        const json = [];
        const headers = aoa[0]
        for (let i = 1; i < aoa.length; i++) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                if (headers[j] === 'dateofbirth') {
                    obj[headers[j]] = formateDob(aoa[i][j])
                }
                else obj[headers[j]] = aoa[i][j];
            }
            json.push(obj);
        }
        return json;
    }

    function handleRegisterMultiple(e) {
        e.preventDefault();
        console.log(file);
        if (!(file.name?.endsWith(".csv") || file.name?.endsWith(".xlsx"))) {
            alert("Please upload a valid file");
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = async (e) => {
            const bufferArray = e.target.result;
            const wb = XLSX.read(bufferArray, { type: "buffer" }); //workbook worksheet
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, dateNF: 'yyyy-mm-dd' });
            sendToServer(aoaToJson(aoa));
        }
    }

    return (
        <>
            <div className={showFileInput ? 'bg-light' : ''}
                style={{
                    margin: '0 15vw',
                    borderRadius: '10px',
                    border: showFileInput ? '1px solid #adb5bd' : ""
                }}>
                <br />
                <div className="text-center">
                    <Button
                        onClick={() => setShowFileInput(!showFileInput)}
                    // variant={showFileInput ? 'outline-primary' : 'primary'}
                    >
                        Import from Excel/CSV file
                    </Button>
                </div >
                {
                    showFileInput &&
                    <Form className='text-center pt-4 pb-3 '
                        onSubmit={handleRegisterMultiple}
                    >
                        <input type='file'
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{
                                color: 'darkgreen'
                            }}
                        />
                        <Button type='submit'
                            className="ms-3 py-1"
                            disabled={file === null}
                        >Register</Button>
                    </Form>
                }
            </div>
        </>
    )
}