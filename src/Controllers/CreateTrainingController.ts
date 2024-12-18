import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTrainingService } from "../Services/CreateTrainingService";

export interface UserProps {
    name: string
    height: string
    weight: string
    age: string
    gender: string
    days: string
    muscle: string
}

class CreateTrainingController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, height, weight, age, gender, days, muscle } = request.body as UserProps

        const createTraining = new CreateTrainingService()

        const training = await createTraining.execute({
            name,
            age,
            days,
            gender,
            height,
            muscle,
            weight
        })

        reply.send(training)
    }
}

export { CreateTrainingController }