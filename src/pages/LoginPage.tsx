import { FormEvent, useState } from "react";
import "../index.css";
import Auth from "../models/Auth";
import PRACTICE_API from "../utils/ApiConfig";

export default function LoginPage(props: any) {
    const navigate = props.navigate;
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const setAuth = props.setAuth;
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function submit(e: FormEvent) {
        e.preventDefault();
        await PRACTICE_API.post("/auth/login", {
            username: username,
            password: password
        }).then((resp) => {
            // console.log(resp);

            let auth = new Auth(resp.data.userId, resp.data.username, resp.data.active, resp.data.role, resp.data.token);
            window.sessionStorage.setItem("auth", JSON.stringify(auth));

            setAuth!(auth);

            setUsername("");
            setPassword("");

            setErrorMessage("");

            navigate("/");
        }).catch((e: any) => {
            // console.log(e);
            setErrorMessage(e.response.data.message);
        });
    }

    return (
        <div>
            <div>Login</div>
            <br/>   
            <form onSubmit={(e) => submit(e)}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br/><br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br/><br/>
                <button>Submit</button>
            </form>
            <br/>
            <div>{errorMessage}</div>
        </div>
    );
}
