import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { container } from "tsyringe";
import { ClienteService } from "../service/ClienteService";

class ClientController{

    async getAll(request: Request, response: Response){
        const service = container.resolve(ClienteService);
        const data = await service.getAll();
        response.status(StatusCodes.OK).send(data);
    }

}

export { ClientController };