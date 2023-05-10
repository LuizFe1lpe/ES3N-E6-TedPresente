import { Repository, getRepository } from "typeorm"
import { Cliente } from "../entities/Cliente"
import { injectable } from "tsyringe";
import { IRequestCreateCliente } from "../dto/IRequestCreateCliente";

@injectable()
class ClienteService{

    private repository: Repository<Cliente>

    constructor(){
        this.repository = getRepository(Cliente);
    }

    async getAll(): Promise<any[]>{
        const bd = await this.repository.find({
            order: {
                created_at: "DESC"
            }
        });        
        return bd
    }

    async getById(id: string): Promise<Cliente>{
        const bd = await this.repository.findOne(id);
        
        if(bd === undefined)
            throw {msg: `Cliente de ID ${id} não encontrado`};

        return bd;
    }

    async create(bodyReq: IRequestCreateCliente): Promise<Cliente>{

        const clienteBD = await this.repository.create(bodyReq);
        await this.repository.save(clienteBD);

        return clienteBD;
    }

    async update(id: string, bodyReq: IRequestCreateCliente): Promise<Cliente>{

        const bd = await this.repository.findOne(id);
        
        if(bd === undefined)
            throw {msg: `Cliente de ID ${id} não encontrado`};

        await this.repository.update(id, bodyReq);
        const clienteBD = await this.repository.findOne(id);

        return clienteBD;
    }

    async delete(id: string): Promise<void>{
        const bd = await this.repository.findOne(id);
        
        if(bd === undefined)
            throw {msg: `Cliente de ID ${id} não encontrado`};

        await this.repository.delete({id});
    }
}

export { ClienteService }