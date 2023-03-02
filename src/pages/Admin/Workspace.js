import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { adminWorkspaceRoutes } from "../../reducers/Routes";

export default function AdminWorkspace() {

    return (
        <div style={{
            padding: '0 5vw'
        }}>
            <br />
            <div className="h3">Hi Admin!</div>
            <br />
            <ListGroup>
                {
                    [...adminWorkspaceRoutes]
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