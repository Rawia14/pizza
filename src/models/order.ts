export default class Order {
    id: number;
    usr_id: number;
    date: Date;
    total_amount: number;

    constructor(
        id: number,
        usr_id: number,
        date: Date,
        total_amount: number
    )
     {
        this.id = id;
        this.usr_id = usr_id;
        this.date = date;
        this.total_amount = total_amount;

    }


}