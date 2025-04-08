// MaskList.js

function MaskList({ masks, onHover }) {
    return (
        <ul className="mt-6 space-y-2 text-sm">
            {masks.map((mask, idx) => (
                <li key={idx}>
                    <button
                        onMouseEnter={() => onHover(idx)}
                        onMouseLeave={() => onHover(null)}
                        className="cursor-pointer focus:outline-none
                                   w-full text-left px-5 py-2.5 rounded-lg transition
                                   text-base bg-indigo-100 hover:bg-indigo-200 text-black
                                   dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                    >
                        🔍 {mask.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default MaskList;