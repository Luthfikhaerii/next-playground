export default async function Params({ params }: { params: { id: string } }) {
    const {id} = await params;
    return (
        <div>
            <h1>Page with ID: {id}</h1>
        </div>
    );
}