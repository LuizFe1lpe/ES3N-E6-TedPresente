import { Router } from "express";
import { ClientController } from "../../modules/client/controller/ClientController";
import { container } from "tsyringe";

const clienteController = container.resolve(ClientController);

const clienteRota = Router();

clienteRota.get("/", clienteController.getAll);
clienteRota.get("/:id", clienteController.getById);
clienteRota.post("/", clienteController.create);
clienteRota.put("/:id", clienteController.update);
clienteRota.delete("/:id", clienteController.delete);

export { clienteRota };