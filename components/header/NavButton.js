export default function NavButton({ navToggle }) {
    return (
        <button
            onClick={navToggle}
            className="space-y-2 inline-block hover:cursor-pointer md:hidden"
        >
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
        </button>
    );
}