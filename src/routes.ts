import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyReply,
    FastifyRequest
} from "fastify";

import { CreateTrainingController } from "./Controllers/CreateTrainingController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {

        let responseText = "```json\n{\n  \"nome\": \"Guilherme\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 20,\n  \"altura\": 1.78,\n  \"peso\": 68,\n  \"treino\": [\n    {\n      \"dia\": \"Segunda-feira\",\n      \"foco\": \"Peitoral\",\n      \"exercicios\": [\n        {\n          \"nome\": \"Supino Reto\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Supino Inclinado\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Crucifixo Inclinado\",\n          \"series\": 3,\n          \"descanso\": 60\n        },\n        {\n          \"nome\": \"Flexao de braço\",\n          \"series\": 3,\n          \"descanso\": 60\n        }\n      ]\n    },\n    {\n      \"dia\": \"Quarta-feira\",\n      \"foco\": \"Costas\",\n      \"exercicios\": [\n        {\n          \"nome\": \"Pull-ups\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Remo com Halteres\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Remada Curvada\",\n          \"series\": 3,\n          \"descanso\": 60\n        }\n      ]\n    },\n    {\n      \"dia\": \"Quinta-feira\",\n      \"foco\": \"Peitoral\",\n      \"exercicios\": [\n        {\n          \"nome\": \"Supino Declinado\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Crucifixo Reto\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Flexao de braço com pegada fechada\",\n          \"series\": 3,\n          \"descanso\": 60\n        }\n      ]\n    },\n    {\n      \"dia\": \"Sexta-feira\",\n      \"foco\": \"Ombros\",\n      \"exercicios\": [\n        {\n          \"nome\": \"Press Militar\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Elevação Lateral\",\n          \"series\": 3,\n          \"descanso\": 60\n        },\n        {\n          \"nome\": \"Elevação Frontal\",\n          \"series\": 3,\n          \"descanso\": 60\n        }\n      ]\n    },\n    {\n      \"dia\": \"Sabado\",\n      \"foco\": \"Perna\",\n      \"exercicios\": [\n        {\n          \"nome\": \"Agachamento\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Leg Press\",\n          \"series\": 3,\n          \"descanso\": 90\n        },\n        {\n          \"nome\": \"Stiff\",\n          \"series\": 3,\n          \"descanso\": 60\n        }\n      ]\n    }\n  ]\n}\n```"

        try {
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

            let jsonObject = JSON.parse(jsonString)

            return reply.send({ data: jsonObject })
        } catch (error) {
            console.log(error);
        }


    })

    fastify.post("/train", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTrainingController().handle(request, reply)
    })
}