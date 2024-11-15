import prismaClient from "../prisma";

class ListCustomersService {

    async execute() {

        const customers = await prismaClient.customer.findMany(); //GET all the customers from db

        return customers
    }
}

export { ListCustomersService }