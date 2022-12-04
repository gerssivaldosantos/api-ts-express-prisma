import { Router } from "express";
import { helloWorldController } from "./useCases/helloWorld/module";

export const router = Router()

router.use('/hello-world', (req, res) => helloWorldController.handle(req, res) )