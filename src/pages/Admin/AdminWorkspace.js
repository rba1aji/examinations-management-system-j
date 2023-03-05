import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { adminWorkspaceRoutes } from "../../reducers/Routes";

export default function AdminWorkspace() {

    return (
        <div style={{
            padding: '0 5vw'
        }}>
            <br />
            <br />
            <br />
            <ListGroup>
                {
                    [...adminWorkspaceRoutes.filter(i => i.title !== "Admin Workspace")]
                        .map((item, index) => {
                            return <Link to={item.path} key={index} className='pb-3 text-decoration-none'>
                                <ListGroup.Item variant="info">{item.title}</ListGroup.Item>
                            </Link>;
                        })
                }
            </ListGroup>
        </div>
    )
}