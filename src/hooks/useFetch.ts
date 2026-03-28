"use client"
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export default function useFetch(url: string) {
    const [data, setData] = useState<unknown | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        let isMounted = true

        async function getData() {
            try {
                setLoading(true)
                const res = await fetch(BASE_URL + url)
                const data = await res.json()
                setData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        getData()

        return () => {
            isMounted = false
        }
    }, [url])

    return { data, loading, error }
}