import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { AdminWorkspaceRoutes } from "../../reducers/Routes";

export default function AdminWorkspace() {

    return (
        <div style={{
            padding: '0 5vw'
        }}>
            <div className="h3">Hi Admin!</div>
            <ListGroup>
                {
                    [...AdminWorkspaceRoutes]
                        .map((item, index) => {
                            return <Link to={item.path} key={index}>
                                <ListGroup.Item>{item.title}</ListGroup.Item>
                            </Link>;
                        })
                }
            </ListGroup>
        </div>
    )
}