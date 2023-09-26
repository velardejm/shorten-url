import Link from "next/link"

export default function Links({ shortenedLinks }) {
    return (
        <>
            {shortenedLinks.map((link, index) => {
                return (
                    <div key={index} className="flex flex-col font-bold bg-white rounded-lg mb-5 last:mb-0">
                        <p className="pl-5 py-2">{link.originalLink}</p>
                        <hr></hr>
                        <Link href="#" className="text-teal-400 pl-5 py-2">{link.shortLink}</Link>
                        <button className="btn rounded-lg mx-5 mb-3">Copy</button>
                    </div>
                )
            })}
        </>
    )
}