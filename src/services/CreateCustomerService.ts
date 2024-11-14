import prismaClient from "../prisma";

class CreateCustomerService {

    async execute() {
        
        console.log("A ROTA FOI CHAMADA");
        
        return { ok: true }    
    }
}

export { CreateCustomerService }