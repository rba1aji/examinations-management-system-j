import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppState } from "../reducers/AppContextProvider";

export default function LoggedinMenu() {
    const { user, setUser, userRole, setUserRole } = AppState()
    return (
        <>
            <div className='m-auto me-5 h5'>
                {userRole.substring(0, 1).toUpperCase() + userRole.substring(1)}:
                {" " + user?.fullname}
            </div>
            <Button variant="dark" className="me-5 my-1 "
                onClick={() => {
                    setUser(null)
                    setUserRole(null)
                    window.sessionStorage.setItem('user', null)
                    window.sessionStorage.setItem('userRole', null)
                }}
            >
                Logout
            </Button>

            <Button as={Link} to={userRole + '/workspace'} variant="dark" className="my-1 ">
                Workspace
            </Button>
        </>
    )
}