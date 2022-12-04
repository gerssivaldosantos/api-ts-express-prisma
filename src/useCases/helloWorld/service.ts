
export class HelloWorldService {
    
    async execute(msg: string) {
        return {
            message: 'all ok',
            msg,
            status: 200
        }
    }
}