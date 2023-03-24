import { Table } from "react-bootstrap";
import { AppState } from "../../reducers/AppContextProvider";

export default function StudentProfile() {
    const { user } = AppState();
    const cols = ["Register number", "Date of Birth", "Full Name", "Degree", "Branch", "Section", "Batch", "Phone number"]

    return (
        <div style={{
            margin: '0 15vw'
        }}>
            <Table bordered className="mt-5 border-dark" style={{
                backgroundColor: 'azure',
                tableLayout: 'fixed'
            }}
            >
                <tbody>
                    {
                        Object.keys(user).map((key, ind) => {
                            return (
                                <tr key={ind}>
                                    {/* <td>{key}</td> */}
                                    <td>{cols[ind]}</td>
                                    <td>{user[key]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}