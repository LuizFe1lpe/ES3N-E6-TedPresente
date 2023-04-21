import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({msg: 'Filha da Puta! Tá funcionando essa bagaça'});
})

export { router };