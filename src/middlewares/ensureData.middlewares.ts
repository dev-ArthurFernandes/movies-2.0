import { Request, Response, NextFunction } from 'express';
import { ZodTypeAny } from 'zod';


const ensureData = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): Response | void => {
    
    const validation = schema.parse(req.body)

    req.body = validation

    return next()
}

export default ensureData