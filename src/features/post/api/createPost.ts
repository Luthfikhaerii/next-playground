import axios from "axios"

export type CreatePostParams = {
    title: string
    description: string
}

export async function createPost(body: CreatePostParams) {
    const res = await axios.post("/post", body)
    const data = await res.data
    return data
}