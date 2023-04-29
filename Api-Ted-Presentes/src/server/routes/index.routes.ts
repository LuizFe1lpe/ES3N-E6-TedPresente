import { Request, Response, Router } from "express";

import { clienteRota } from "./cliente.routes";

const router = Router();

router.use("/cliente", clienteRota)

export { router };