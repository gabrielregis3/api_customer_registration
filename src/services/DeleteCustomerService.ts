import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {

    async execute({ id }: DeleteCustomerProps) {

        if (!id) {
            throw new Error("Requisição inválida!")
        }

        const findCustomer = await prismaClient.customer.findFirst({ //Find the customer by id 
            where:{
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não encontrado!")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deletado com sucesso!" }
    }
}

export { DeleteCustomerService }