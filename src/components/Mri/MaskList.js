// MaskList.js

function MaskList({ masks, onHover }) {
    return (
        <ul className="mt-6 space-y-2 text-sm">
            {masks.map((mask, idx) => (
                <li
                    key={idx}
                    onMouseEnter={() => onHover(idx)}
                    onMouseLeave={() => onHover(null)}
                    className="cursor-pointer hover:underline"
                >
                    🔍 {mask.label}
                </li>
            ))}
        </ul>
    );
}

export default MaskList;