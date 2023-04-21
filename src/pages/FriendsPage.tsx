import { useEffect, useState } from "react";
import "../index.css";
import PRACTICE_API from "../utils/ApiConfig";

export default function FriendsPage(props: any) {
    const auth = props.auth;
    const [usernames, setUsernames] = useState<string[]>([]);
    const [friendNames, setFriendNames] = useState<string[]>([]);

    useEffect(() => {
        getUsernames();
        getFriendNames();
    }, [])

    async function getUsernames() {
        await PRACTICE_API.get("/users", {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp.data);
            setUsernames(resp.data);
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    async function getFriendNames() {
        await PRACTICE_API.get("/friendships", {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp.data);
            setFriendNames(resp.data);
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    async function addFriend(username: string) {
        // https://axios-http.com/docs/api_intro
        // https://axios-http.com/docs/req_config
        await PRACTICE_API.post("/friendships/new", {
            friendName: username
        },
        {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp.data);
            window.location.reload();
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    async function deleteFriend(friendName: string) {
        // https://axios-http.com/docs/api_intro
        // https://axios-http.com/docs/req_config
        await PRACTICE_API.delete("/friendships/delete/" + friendName, {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp.data);
            window.location.reload();
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    return (
        <div>
            Friends
            <ul>
                {
                    friendNames.map(
                        (friendName) => (
                            <li className="friends-users" onClick={(e) => deleteFriend(friendName)}>{friendName}</li>
                        )
                    )
                }
            </ul>
            Users
            <ul>
                {
                    usernames.map(
                        (username) => (
                            <li className="friends-users" onClick={(e) => addFriend(username)}>{username}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
}
