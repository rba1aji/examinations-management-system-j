import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginRoutes } from "../reducers/Routes";

export default function Login() {
    return (
        <>
            <DropdownButton
                title="Login"
                variant='dark'
                className="my-1"
            >
                {
                    [...loginRoutes].map((item, index) => {
                        return <Link to={item.path}
                            key={index}
                            className='text-decoration-none'
                        >
                            <Dropdown.Item href={item.path} >
                                {item.title}
                            </Dropdown.Item>
                        </Link>
                    })
                }
            </DropdownButton>
        </>
    )
}