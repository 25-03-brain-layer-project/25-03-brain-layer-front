// ViewerDetail.js

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MriCard from "../../components/Mri/MriCard";

function ViewerDetail() {
    const { caseId } = useParams();
    const [meta, setMeta] = useState(null);

    // 페이지 번호 계산 로직
    const page = (() => {
        const prefix = caseId.split("-")[0];
        const num = parseInt(prefix, 10);
        return num <= 9 ? "1" : "2";
    })();

    const folderPath = `${page}/${caseId}`;

    useEffect(() => {
        const url = `/mri-images/${folderPath}/meta.json`;

        console.log("📡 Fetching:", url);

        fetch(url)
            .then((res) => {
                console.log("🔍 Response status:", res.status);
                return res.text(); // 일단 text로 받기
            })
            .then((text) => {
                try {
                    const json = JSON.parse(text);
                    console.log("✅ Parsed JSON:", json);
                    setMeta(json);
                } catch (parseErr) {
                    console.error("❌ JSON 파싱 실패!", parseErr);
                    console.log("🔎 받은 내용:", text);
                }
            })
            .catch((err) => {
                console.error("❌ Fetch 실패!", err);
            });
    }, [caseId, folderPath]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">🧠 MRI 이미지 뷰어</h2>

            {meta ? (
                <MriCard base={meta.base} masks={meta.masks} folderPath={folderPath} />
            ) : (
                <p>로딩 중...</p>
            )}
        </div>
    );
}

export default ViewerDetail;
