import {Entity} from "@/shared/entity/entity";

export class User extends Entity{
    public name: string;
    public email: string;
    public password: string;

    constructor(user: User & {id?: string }) {
        super(user.id)
        this.name = user.name
        this.email = user.email
        this.password = user.password
    }
}