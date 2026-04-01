"use client"
import { useForm } from "react-hook-form"
import { RegisterForm, registerSchema } from "../schema/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthStore } from "../stores/auth.store"

export default function Register() {
    const {
        register, formState: { errors, isSubmitting }, handleSubmit
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema)
    })
    const login = useAuthStore((s) => s.login)

    const onSubmit = (data: RegisterForm) => {
        alert("Submit success :" + JSON.stringify(data))
        login({
            name: data.name,
            email: data.email
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">name</label>
                    <input {...register("name")} type="text" id="name" placeholder="input name..." />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input {...register("email")} type="email" id="email" placeholder="input email..." />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input {...register("password")} type="password" id="password" placeholder="input password..." />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button disabled={isSubmitting} className="p-4 bg-blue-400 test-white" type="submit">{isSubmitting ? "loading..." : "register"}</button>
            </form>
        </div>
    )
}