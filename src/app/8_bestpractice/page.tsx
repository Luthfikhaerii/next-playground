"use client"
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react"

interface FormData {
    name: string;
    email: string;
    birth: string | null;
    password: string;
    file: File | null;
    gender: string;
    profession: string;
    hobby: string[];
    description: string;
}

export default function () {
    const [data, setData] = useState<FormData>({
        name: "",
        email: "",
        birth: null,
        password: "",
        file: null,
        gender: "",
        profession: "",
        hobby: [],
        description: ""
    })
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [post, setPost] = useState([])
    const debouncedSearchQuery = useDebounce(searchQuery, 1000)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleChangeFile = (e: any) => {
        const { name, files } = e.target
        setData(prev => ({ ...prev, [name]: files[0] }))
    }

    const handleChangeCheckbox = (e: any) => {
        const { value, checked } = e.target

        if (checked) {
            setData(prev => ({ ...prev, hobby: [...prev.hobby, value] }))
        } else {
            setData(prev => ({ ...prev, hobby: prev.hobby.filter(h => h !== value) }))
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
        }, 3000)
        // sanitize data

        // validate data

        // submit data
        alert(JSON.stringify(data))
    }

    useEffect(() => {
        setLoading(true)
        async function getData() {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${debouncedSearchQuery}`)
                const data = await res.json()
                setPost(data.products)
                setLoading(false)
                console.log(data)
            } catch (err) {
                setLoading(false)
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [debouncedSearchQuery])

    return <>
        <section className="px-4 mt-10">
            <div className="max-w-7xl mx-auto">
                <div>
                    <label htmlFor="search">Search </label>
                    : <input type="text" id="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
                </div>
                <div>
                    {loading ? <p>loading..</p> : post ? post?.map((p: any) => (
                        <div key={p.id} style={{ padding: "4px", border: "1px solid #000", marginBottom: "4px" }}>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                        </div>
                    )) : <p>No products found.</p>}
                </div>

            </div>
        </section>
        <section className="px-4 mt-10">
            <div className="max-w-7xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    style={{
                        paddingTop: "40px",
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        width: "400px",
                    }}
                >
                    {/* Name */}
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input
                            value={data.name}
                            onChange={handleChange}
                            id="name"
                            name="name"
                            type="text"
                            style={{ border: "1px solid #000000" }}
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input
                            value={data.email}
                            onChange={handleChange}
                            id="email"
                            name="email"
                            type="email"
                            style={{ border: "1px solid #000" }}
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input
                            value={data.password}
                            onChange={handleChange}
                            id="password"
                            name="password"
                            type="password"
                            style={{ border: "1px solid #000" }}
                        />
                    </div>

                    {/* File */}
                    <div className="form-group">
                        <label htmlFor="file">file</label>
                        <div>
                            {data.file && (
                                <img src={URL.createObjectURL(data.file)} alt="Preview" width={100} />
                            )}
                            <input onChange={handleChangeFile} id="file" name="file" type="file" />
                        </div>
                    </div>

                    {/* Birth */}
                    <div className="form-group">
                        <label htmlFor="birth">birth</label>
                        <input
                            value={data.birth || ""}
                            onChange={handleChange}
                            id="birth"
                            name="birth"
                            type="date"
                        />
                    </div>

                    {/* Gender */}
                    <div className="form-group">
                        <span>gender</span>
                        <div>
                            <label>
                                perempuan
                                <input
                                    checked={data.gender === "perempuan"}
                                    onChange={handleChange}
                                    name="gender"
                                    type="radio"
                                    value="perempuan"
                                />
                            </label>
                            <label>
                                laki-laki
                                <input
                                    checked={data.gender === "laki-laki"}
                                    onChange={handleChange}
                                    name="gender"
                                    type="radio"
                                    value="laki-laki"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Profession */}
                    <div className="form-group">
                        <label htmlFor="profession">profession</label>
                        <select
                            value={data.profession}
                            onChange={handleChange}
                            id="profession"
                            name="profession"
                        >
                            <option value="frontend">frontend</option>
                            <option value="backend">backend</option>
                            <option value="fullstack">fullstack</option>
                        </select>
                    </div>

                    {/* Hobby */}
                    <div className="form-group">
                        <span>Hobby</span>
                        <div>
                            <label>
                                football
                                <input
                                    checked={data.hobby.includes("football")}
                                    onChange={handleChangeCheckbox}
                                    type="checkbox"
                                    value="football"
                                />
                            </label>
                            <label>
                                basketball
                                <input
                                    checked={data.hobby.includes("basketball")}
                                    onChange={handleChangeCheckbox}
                                    type="checkbox"
                                    value="basketball"
                                />
                            </label>
                            <label>
                                badminton
                                <input
                                    checked={data.hobby.includes("badminton")}
                                    onChange={handleChangeCheckbox}
                                    type="checkbox"
                                    value="badminton"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="description">description</label>
                        <textarea
                            value={data.description}
                            onChange={handleChange}
                            id="description"
                            name="description"
                        />
                    </div>

                    {/* Buttons */}
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "submit"}
                        </button>
                        <button type="reset">reset</button>
                    </div>
                </form>
            </div>
        </section>

        <section className="px-4 mt-10">
            <div className="max-w-7xl mx-auto">
                <table style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #000000", padding: "4px" }} colSpan={2}>table</th>
                        </tr>
                        <tr>
                            <th style={{ border: "1px solid #000000", padding: "4px" }}>no</th>
                            <th style={{ border: "1px solid #000000", padding: "4px" }}>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>1</td>
                            <td>mamat</td>
                        </tr>
                        <tr>
                            <td>luthfi</td>
                        </tr>
                        <tr>
                            <td>asep</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>


    </>
}