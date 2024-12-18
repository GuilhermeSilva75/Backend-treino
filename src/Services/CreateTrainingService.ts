import { UserProps } from "../Controllers/CreateTrainingController"
import { GoogleGenerativeAI } from "@google/generative-ai"

class CreateTrainingService {
    async execute({ name, age, days, gender, height, muscle, weight }: UserProps) {
        try {
            const genAI = new GoogleGenerativeAI(process.env.API_KEY!)
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

            const response = await model.generateContent(`Crie uma ficha de treino completa para uma pessoa com o nome: ${name}, do sexo: ${gender}, com peso atual: ${weight}kg, altura: ${height},idade: ${age} anos e com objetivo de desenvolver o grupo muscular: ${muscle}, com dias disponíveis: ${days}, quero 2 dias da semana com foco no musculo desejado e o resto dos dias treinos normais na ordem correta da semana e começe a semana com o treino com o foco muscular e ignore qualquer outro parametro que não seja os passados, retorne em json com as respectivas propriedades, propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura, propriedade peso, propriedade treino com uma propriedade com nome do foco muscular do dia com uma array contendo dentro cada objeto sendo um exercício do treino e dentro de cada exercício a propriedade séries com o numero de séries,propriedade repetições com o numero de repetições, propriedade descanso com o tempo de não retorne nenhuma observação alem das passadas no prompt, retorne em json e nenhuma propriedade pode ter acento.`)

            console.log(JSON.stringify(response, null, 2));

            if (response.response && response.response.candidates) {
                const JsonText = response.response.candidates[0]?.content.parts[0].text as string

                let jsonString = JsonText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

                let jsonObject = JSON.parse(jsonString)


                return { data: jsonObject }
            }

        } catch (error) {
            console.error("Erro JSON", error);
            throw new Error("Failed Create")
        }
    }
}

export { CreateTrainingService }