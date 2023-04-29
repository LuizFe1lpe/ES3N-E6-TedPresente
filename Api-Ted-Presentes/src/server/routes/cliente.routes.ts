import { Request, Response, Router } from "express";
import { ClientController } from "../../modules/client/controller/ClientController";

const clienteController = new ClientController();

const clienteRota = Router();

clienteRota.get("/", clienteController.getAll);

export { clienteRota };