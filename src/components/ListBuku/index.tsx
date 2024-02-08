import Image from "next/image"

const ListBuku = ({title} : {title:string})=>{
    return (
        <div className="bg-indigo-700">
            <Image src="https://placehold.co/600x400/png" alt="alt" width={300} height={300} />
            <h3 className="font-bold text-md">{title}</h3>
        </div>
    )
}

export default ListBuku