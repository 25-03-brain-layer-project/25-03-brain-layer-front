// ViewerDetail.js

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MriCard from "../../components/Mri/MriCard";
import MaskList from "../../components/Mri/MaskList";

function ViewerDetail() {
    const { caseId } = useParams();
    const [meta, setMeta] = useState(null);
    const [hoveredIdx, setHoveredIdx] = useState(null);

    // 페이지 번호 계산 로직
    const page = (() => {
        const prefix = caseId.split("-")[0];
        const num = parseInt(prefix, 10);
        return num <= 9 ? "1" : "2";
    })();

    const folderPath = `${page}/${caseId}`;

    useEffect(() => {
        const url = `/mri-images/${folderPath}/meta.json`;
        fetch(url)
            .then((res) => res.text())
            .then((text) => {
                try {
                    const json = JSON.parse(text);
                    setMeta(json);
                } catch (parseErr) {
                    console.error("JSON 파싱 실패", parseErr);
                }
            })
            .catch((err) => console.error("Fetch 실패", err));
    }, [caseId, folderPath]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">🧠 MRI 이미지 뷰어</h2>

            {meta ? (
                <div className="flex items-start gap-2">
                    <MriCard
                        base={meta.base}
                        masks={meta.masks}
                        folderPath={folderPath}
                        hoveredIdx={hoveredIdx}
                    />
                    <MaskList
                        masks={meta.masks}
                        hoveredIdx={hoveredIdx}
                        onHover={setHoveredIdx}
                    />
                </div>
            ) : (
                <p>로딩 중...</p>
            )}
        </div>
    );
}

export default ViewerDetail;
