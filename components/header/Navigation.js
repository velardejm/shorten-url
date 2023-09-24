import Link from "next/link"

export default function Navigation() {
    return (
        <div className="absolute block w-full">
            <div className="flex flex-col items-center font-bold text-white bg-indigo-950 px-8 py-10 rounded-lg mx-5 mb-5">
                <Link className="mb-7 " href="#">Features</Link>
                <Link className="mb-7 " href="#">Pricing</Link>
                <Link className="pb-7 w-full text-center border-b" href="#">Resources</Link>
                <Link className="my-7 " href="#">Login</Link>
                <Link className="btn w-full text-center" href="#">Sign Up</Link>
            </div>
        </div>
    )
}