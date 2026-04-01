"use client"
import { useAuthStore } from "@/features/auth/stores/auth.store"

export default function Navbar() {
    const user = useAuthStore((s)=>s.user)
    const logout = useAuthStore((s)=>s.logout)

    return (
        <nav className="flex px-8">
            <p>Luthfi</p>
            <div className="flex-1 flex justify-end">
                <div className="space-x-4">
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    {user && <a onClick={()=>logout()}>Logout</a>}
                </div>
            </div>
        </nav>
    )
}