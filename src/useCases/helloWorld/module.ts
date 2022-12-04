import { HelloWorldController } from "./controller";
import { HelloWorldService } from "./service";

const service = new HelloWorldService()
const helloWorldController = new HelloWorldController(service)

export { helloWorldController }