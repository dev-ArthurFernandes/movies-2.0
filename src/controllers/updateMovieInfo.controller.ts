import { Request, Response } from "express";
import updateMovieInfoService from "../services/updateMovieInfo.service";


const updateMovieInfoController = async (req: Request, res: Response): Promise<Response> => {

    const newMovie = await updateMovieInfoService(req.body, parseInt(req.params.id))

    return res.json(newMovie)
}

export default updateMovieInfoController