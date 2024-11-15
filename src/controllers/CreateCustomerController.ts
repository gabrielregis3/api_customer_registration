import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerService } from '../services/CreateCustomerService';

class CreateCustomerController {

    async handle(request : FastifyRequest, reply: FastifyReply) { //Receive body infos, names email etc

        const { name, email } = request.body as { name: string, email: string };

        const customerService = new CreateCustomerService();
        const customer = await customerService.execute({ name, email }); //Service will register on db etc

        reply.send(customer);
    }
}

export { CreateCustomerController }