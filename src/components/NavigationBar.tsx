import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, SetAuthContext } from "../context/AuthProvider";
import "../NavigationBar.css";

export default function NavigationBar() {
    const navigate = useNavigate();
    const setAuth = useContext(SetAuthContext);
    const auth = useContext(AuthContext);

    function signout() {
        window.sessionStorage.removeItem("auth");
        setAuth!(null);
        navigate("/");
    }

    return (
        <div className="nav-background">
            <Link className="nav-link" to={"/"}>Home</Link>

            {
                auth !== null ?
                    <span>
                        <Link className="nav-link" to={"/friends"}>Friends</Link>
                        <Link className="nav-link" to={"/reimbursements"}>Reimbursements</Link>
                    </span>
                    :
                    <span>
                        <Link className="nav-link" to={"/signup"}>Signup</Link>
                        <Link className="nav-link" to={"/login"}>Login</Link>
                    </span>
            }

            {
                auth !== null ?
                    <span>
                        <a className="nav-link" onClick={() => signout()}>Signout</a>
                    </span>
                    :
                    <span>
                    </span>
            }

            {
                auth !== null ?
                    <div className="nav-message">
                        <span>
                            Hello, {auth?.username}
                        </span>
                    </div>
                    :
                    <span>
                    </span>
            }

        </div>
    );
}
