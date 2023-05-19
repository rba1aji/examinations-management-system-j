import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ManageServer() {
    const [serverurl, setServerurl] = useState('http://localhost:8080/api');

    return (
        <>
            <div className="text-center h3 mt-2">Manage Server</div>
            <Form style={{
                margin: '0 20vw'
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Server URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Server url"
                        value={serverurl}
                        onChange={(e) => {
                            setServerurl(e.target.value);
                        }}
                    />
                </Form.Group>
                <Button variant="info" type="submit" className="d-block ">
                    update
                </Button>
            </Form>
        </>
    );
}