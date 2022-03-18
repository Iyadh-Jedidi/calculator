
import { calculator } from "./calculator.controller.js"

export default function (router) {

    router.post('/calculator', (req, res) => {
        try {
            const result = calculator(req.body.operation.split(" "))
            return res.status(result?.code).json(result?.result)
        } catch (error) {
            return res.status(500).json({message: "Veuiller vérifier votre expression"})
        }
    })
}
