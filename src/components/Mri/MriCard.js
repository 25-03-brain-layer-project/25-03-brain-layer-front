// MriCard.js

import { useState } from "react";

function MriCard({ base, masks, folderPath }) {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <div className="relative w-[512px] h-[512px] mx-auto">
            <img
                src={`/mri-images/${folderPath}/${base}`}
                alt="MRI base"
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {masks.map((mask, idx) =>
                    mask.visible && (
                        <img
                            key={idx}
                            src={`/mri-images/${folderPath}/${mask.filename}`}
                            alt={mask.label}
                            title={mask.label}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            style={{
                                zIndex: 10 + idx,
                                pointerEvents: hoveredIdx === idx ? "auto" : "none",
                            }}
                            className={`absolute top-0 left-0 w-full h-full opacity-60 transition duration-200 ${
                                hoveredIdx === idx ? "opacity-100 z-30" : ""
                            }`}
                        />
                    )
            )}

            {hoveredIdx !== null && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded z-40">
                    {masks[hoveredIdx].label}
                </div>
            )}
        </div>
    );
}

export default MriCard;
