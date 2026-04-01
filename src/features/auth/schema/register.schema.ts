import z, { email } from "zod";

export const registerSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(5,"min 5 character").max(20,"max 20 character")
})

export type RegisterForm = z.infer<typeof registerSchema>