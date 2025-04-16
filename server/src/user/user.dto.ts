import { z } from "zod"

export const createUserDto = z.object({
    email: z.string().min(6, 'Min 6 symbols').max(40),
    password: z.string().min(6, 'Min 6 symbols').max(40)
})