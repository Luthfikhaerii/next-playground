import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tentang Kami",
    description: "Informasi lengkap tentang perusahaan kami"
}

export default function MetadataPage() {
    return (
        <>
            <p>This is a custom page with a custom name.</p>
        </>
    )
}