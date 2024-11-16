import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {

    async execute({ id }: DeleteCustomerProps) {

        if (!id) {
            throw new Error("Invalid request!")
        }

        const findCustomer = await prismaClient.customer.findFirst({ //Find the customer by id 
            where:{
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Client not found!")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deleted successfully!" }
    }
}

export { DeleteCustomerService }