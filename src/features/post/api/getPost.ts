export default async function getPost(search = "") {
    const params = new URLSearchParams()
    if (search) params.append("q", search)
    const res = await fetch(`https://dummyjson.com/products/search?${params.toString}`)
    const data = await res.json()
    return data

} 