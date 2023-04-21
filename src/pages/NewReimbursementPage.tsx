import { FormEvent, Reducer, useReducer, useState } from "react";
import "../index.css";
import PRACTICE_API from "../utils/ApiConfig";

export default function NewReimbursementPage(props: any) {
    const navigate = props.navigate;
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [amount, setAmount] = useReducer<Reducer<number, string | null>>(setAmountReducer, 0);
    const [description, setDescription] = useState<string>("");
    const auth = props.auth;

    async function submit(e: FormEvent): Promise<void> {
        e.preventDefault();
        await PRACTICE_API.post("/reimbursements/new", {
            amount: amount,
            description: description
        },
        {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp);

            setAmount(null);
            setDescription("");

            setErrorMessage("");

            navigate("/reimbursements");
        }).catch((e: any) => {
            // console.log(e);
            setErrorMessage(e.response.data.message);
        });
    }

    function parseNumber(number: string) {
        return Number(number)
    }

    function setAmountReducer(amount: number, newAmount: string | null) {
        return newAmount ? parseNumber(newAmount) : 0;
    }

    return (
        <div>
            <div>New Reimbursement</div>
            <br/>   
            <form onSubmit={(e) => submit(e)}>
                <input type="number" min="0" step="0.01" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
                <br/><br/>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                <br/><br/>
                <button>Submit</button>
            </form>
            <br/>
            <div>{errorMessage}</div>
        </div>
    );
}
