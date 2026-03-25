import type { Metadata } from "next";
import { cache } from "react";

type Props = {
    params: { slug: string };
};

const getArticle = cache(async (slug: string) => {
    const res = await fetch(`https://api.mywebsite.com/articles/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return null;
    }
    return res.json();
});

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const article = await getArticle(params.slug);

    // 👉 fallback kalau data tidak ada
    if (!article) {
        return {
            title: "Artikel tidak ditemukan",
            description: "Konten tidak tersedia",
        };
    }

    return {
        title: article.title,
        description: article.excerpt,

        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: `https://mywebsite.com/blog/${params.slug}`,
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
}

export default async function DetailMetaDataPage({ params }: Props) {
    const { slug } = params
    const article = await getArticle(slug);

    if (!article) {
        return <h1>Artikel tidak ditemukan</h1>;
    }

    return (
        <main style={{ padding: "20px" }}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </main>
    );
}