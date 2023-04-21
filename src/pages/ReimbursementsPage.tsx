import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Reimbursement from "../models/Reimbursement";
import PRACTICE_API from "../utils/ApiConfig";

export default function ReimbursementsPage(props: any) {
    const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);
    const auth = props.auth;

    useEffect(() => {
        getReimbursements();
    }, [])

    async function getReimbursements() {
        await PRACTICE_API.get("/reimbursements", {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp.data);
            setReimbursements(resp.data);
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    return (
        <div>
            <div>
                Reimbursements
            </div>

            <Link to={"/reimbursements/new"}>New Reimbursement</Link>

            <br/><br/>

            <div>
                {
                    reimbursements.map(
                        (reimbursement) => (
                            <div>
                                <div>
                                    <Link to={"/reimbursements/" + reimbursement.reimbId}>{reimbursement.description}</Link>
                                    <br/>
                                    {reimbursement.amount}
                                </div>
                                <br/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}
