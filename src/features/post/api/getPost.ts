export type GetPostsParams = {
    skip?: number
    limit?: number
    search?: string
}

export async function getPost({ skip = 0, limit = 10, search = "" }: GetPostsParams) {
    const params = new URLSearchParams()
    if (search) params.append("q", search)
    if (skip) params.append("skip", skip.toString())
    if (limit) params.append("limit", limit.toString())

    const res = await fetch(`https://dummyjson.com/products/search?${params.toString()}`)
    const data = await res.json()
    return data
} 

export const postKeys = {
    all: ["posts"] as const,
    params: (params?: GetPostsParams) => ["post", params] as const
}