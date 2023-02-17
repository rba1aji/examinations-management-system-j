import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppState } from "../../reducers/AppContextProvider";

export default function StudentWorkspace() {
    const { user } = AppState();
    return (
        <div style={{
            padding: '0 5vw'
        }}>
            <div className="h3">Hi {user?.fullname}!</div>
            <ListGroup>
                {
                    [
                        {
                            title: "View Profile",
                            link: "/student/profile"
                        },
                        {
                            title: "View Marks",
                            link: "/student/marks"
                        }
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