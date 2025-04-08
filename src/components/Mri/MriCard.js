// MriCard.js

function MriCard({ base, masks, folderPath, hoveredIdx }) {
    return (
        <div className="relative w-[512px] h-[512px] ">
            <img
                src={`/mri-images/${folderPath}/${base}`}
                alt="MRI base"
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {masks.map((mask, idx) => {
                const isHovered = hoveredIdx === idx;
                const display = isHovered ? "block" : "none";

                return mask.visible && (
                    <img
                        key={idx}
                        src={`/mri-images/${folderPath}/${mask.filename}`}
                        alt={mask.label}
                        title={mask.label}
                        style={{
                            zIndex: 10 + idx,
                            display,
                        }}
                        className="absolute top-0 left-0 w-full h-full opacity-80 transition"
                    />
                );
            })}
        </div>
    );
}

export default MriCard;
