import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppState } from "../../reducers/AppContextProvider";

export default function StudentWorkspace() {
    const { user } = AppState();
    return (
        <div style={{
            padding: '0 5vw'
        }}>
            <br />
            <div className="h4">Hi {user?.fullname}!</div>
            <br />
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
                            return <Link to={item.link} key={index} className='pb-3 text-decoration-none'>
                                <ListGroup.Item variant="info">{item.title}</ListGroup.Item>
                            </Link>;
                        })
                }
            </ListGroup>
        </div>
    )
}