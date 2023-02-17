import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function AdminWorkspace() {
    return (
        <div style={{
            padding: '0 5vw'
        }}>
            <div className="h3">Hi Admin!</div>
            <ListGroup>
                {
                    [
                        {
                            title: "Register students",
                            link: "/register-students"
                        },
                        {
                            title: "View students data",
                            link: "/students-data"
                        },
                    ]
                        .map((item, index) => {
                            return <Link to={item.link} key={index}>
                                <ListGroup.Item>{item.title}</ListGroup.Item>
                            </Link>;
                        })
                }
            </ListGroup>
        </div>
    )
}