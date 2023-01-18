import {Entity} from "./entity";

class Test extends Entity {
    constructor(id: string | undefined) {
        super(id)
    }
}

describe('Entity', () => {
    it('Should return an instance of class with id generated', () => {
        const entity = new Test(undefined)
       expect(entity.id).toEqual(expect.stringMatching(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/))
    })
})