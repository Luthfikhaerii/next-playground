export default async function PageParams({searchParams}: {searchParams: Promise<{search: string}>}) {
    const {search} = await searchParams;
    return (
        <div>
            <h1>Page with search parameter: {search}</h1>
        </div>
    );
}