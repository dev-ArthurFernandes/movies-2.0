import { z } from 'zod';

const createMoviesSchemas = z.object({
    name: z.string().max(50),
    description: z.string().min(10).nullable().optional(),
    price: z.number().int(),
    duration: z.number().positive()
})

const updateMoviesSchemas = z.object({
    name: z.string().min(3).max(50).optional(),
    description: z.string().min(10).optional(),
    price: z.number().int().optional(),
    duration: z.number().positive().optional()
})

const moviesResultSchemas = createMoviesSchemas.extend({
    id: z.number()
})

const moveisListResult = moviesResultSchemas.array()

export {
    createMoviesSchemas,
    updateMoviesSchemas,
    moviesResultSchemas,
    moveisListResult
}