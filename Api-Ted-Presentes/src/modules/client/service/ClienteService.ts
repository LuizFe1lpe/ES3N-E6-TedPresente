import { Repository, getRepository } from "typeorm"
import { Cliente } from "../entities/Cliente"
import { injectable } from "tsyringe";

@injectable()
class ClienteService{

    private repository: Repository<Cliente>

    constructor(){
        this.repository = getRepository(Cliente);
    }

    async getAll(): Promise<any[]>{
        const bd = await this.repository.find();        
        return bd
    }
}

export { ClienteService }