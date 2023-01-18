import { v4 as uuid } from 'uuid'
export abstract class Entity {
    id?: string;

    protected constructor(id?: string) {
        this.id = id || uuid()
    }
}