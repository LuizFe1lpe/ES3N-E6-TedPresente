import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { container } from "tsyringe";
import { ClienteService } from "../service/ClienteService";
import { IRequestCreateCliente } from "../dto/IRequestCreateCliente";

class ClientController{
    
    async getAll(request: Request, response: Response){
        const service = container.resolve(ClienteService);
        const data = await service.getAll();
        response.status(StatusCodes.OK).send(data);
    }

    async getById(request: Request, response: Response){
        const { id } = request.params;

        try{
            const service = container.resolve(ClienteService);
            const data = await service.getById(id);

            response.status(StatusCodes.OK).send(data);
        }catch(erro: any){
            response.status(StatusCodes.NOT_FOUND).send({msg: erro.msg});
        }
        
    }

    async create(request: Request, response: Response){
        const bodyReq = request.body as IRequestCreateCliente;
        
        const service = container.resolve(ClienteService);
        const data = await service.create(bodyReq);

        response.status(StatusCodes.CREATED).send(data);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const bodyReq = request.body as IRequestCreateCliente;

        try{
            const service = container.resolve(ClienteService);
            const data = await service.update(id, bodyReq);

            response.status(StatusCodes.OK).send(data);
        }catch(erro: any){
            response.status(StatusCodes.NOT_FOUND).send({msg: erro.msg});
        }
        
    }


    async delete(request: Request, response: Response){
        const { id } = request.params;

        try{
            const service = container.resolve(ClienteService);
            await service.delete(id);

            response.status(StatusCodes.NO_CONTENT).send({});
        }catch(erro: any){
            response.status(StatusCodes.NOT_FOUND).send({msg: erro.msg});
        }
        
    }


}

export { ClientController };