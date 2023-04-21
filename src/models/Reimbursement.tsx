export default class Reimbursement {
    reimbId: string;
    amount: number;
    submitted: string;
    resolved: string;
    description: string;
    author: string;

    constructor(reimbId: string, amount: number, submitted: string, resolved: string, description: string, author: string) {
        this.reimbId = reimbId;
        this.amount = amount;
        this.submitted = submitted;
        this.resolved = resolved;
        this.description = description;
        this.author = author;
    }
}
