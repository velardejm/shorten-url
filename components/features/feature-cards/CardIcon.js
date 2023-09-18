export default function CardIcon({ iconUrl }) {
    return (
        <div className="text-center">
            <div className="inline-block bg-indigo-950 p-3 rounded-full">
                <img className="w-10 h-10" src={iconUrl} />
            </div>
        </div>
    )
}