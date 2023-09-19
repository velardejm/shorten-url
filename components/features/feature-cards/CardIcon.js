export default function CardIcon({ iconUrl }) {
    return (
        <div className="relative h-12">
            <div className="absolute left-[calc(50%-32px)] top-[-32px] bg-indigo-950 p-3 rounded-full">
                <img className="w-10 h-10" src={iconUrl} />
            </div>
        </div>
    )
}