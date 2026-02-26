const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

//SSR => halaman akan di render di server setiap kali navigasi ke halaman ini, sehingga akan memanggil API setiap kali navigasi ke halaman ini, karena halaman tidak di cache

//CSR => halaman akan di render di client, sehingga akan memanggil API setiap kali navigasi ke halaman ini

//SSG => halaman akan di generate saat build time, sehingga tidak akan memanggil API lagi saat navigasi ke halaman ini, kecuali jika halaman di regenerate dengan ISR

//ISR => gabungan SSR & SSG, dimana halaman akan di generate saat request pertama kali, lalu akan di cache untuk request selanjutnya, dan akan di regenerate setelah waktu tertentu

async function fetchData(){
    const res = await fetch(`${BASE_URL}/auth`,{
        method:'GET',
        // tanpa no-store, Next.js akan cache response dan tidak akan memanggil API lagi saat navigasi ke halaman ini
        cache: 'no-store',
    });
    return res.json();
}

async function postData(){
    const res = await fetch(`${BASE_URL}/auth`, {
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ username: "testuser", password: "testpass" })
    })
    return res.json();
}

export default async function GetApi(){
    const data = await fetchData();
    const createData = await postData();

    return(
        <>
            <p>GET Response :</p>
            <p>{JSON.stringify(data)}</p>
            <p>POST Response</p>
            <p>{JSON.stringify(createData)}</p>
        </>
    )
}