import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const HeavyComponent = dynamic(()=>import("../../components/ui/HeavyComponent"),{
    loading: ()=> <p>Loading Heavy Component...</p>
})

//lazy load component & Image
export default function Performance(){
    return(
        <>
        <p>This is Performance page</p>
        <Image src="/performance.png" alt="Performance Image" width={600} height={400} />
        <Link href="/3_folder">Go to Folder</Link>
        <HeavyComponent />
        </>
    )
}