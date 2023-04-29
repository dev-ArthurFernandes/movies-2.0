import { Request, Response } from "express"
import { listAllMoviesService } from "../services"


const listAllMoviesController = async (req: Request, res: Response): Promise<Response> => {

    const Movies = await listAllMoviesService(req.query)

    return res.json(Movies)
}

export default listAllMoviesController