// ViewerList.js

import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const caseIds = {
    "1": [
        "1-01-025-MRI-0254-250131",
        "2-01-025-MRI-0255-250201",
        "3-01-025-MRI-0256-250201",
        "4-01-025-MRI-0257-250201",
        "5-01-025-MRI-0258-250201",
        "6-01-025-MRI-0259-250201",
        "7-01-025-MRI-0260-250201",
        "8-01-025-MRI-0261-250201",
        "9-01-025-MRI-0262-250201",
    ],
    "2": [
        "10-01-025-MRI-0263-250202",
        "11-01-025-MRI-0264-250202",
        "12-01-025-MRI-0265-250202",
        "13-01-025-MRI-0266-250202",
        "14-01-025-MRI-0267-250202",
        "15-01-025-MRI-0268-250202",
        "16-01-025-MRI-0269-250202",
        "17-01-025-MRI-0270-250202",
    ],
};

function ViewerList() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") || "1";
    const folderPrefix = `/mri-images/${page}`;
    const [metaList, setMetaList] = useState([]);

    useEffect(() => {
        const fetchMeta = async () => {
            const results = await Promise.all(
                (caseIds[page] || []).map(async (id) => {
                    try {
                        const res = await fetch(`${folderPrefix}/${id}/meta.json`);
                        const data = await res.json();
                        return { id, base: data.base };
                    } catch {
                        return null;
                    }
                })
            );
            setMetaList(results.filter(Boolean));
        };

        fetchMeta();
    }, [page]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">🧠 MRI 케이스 리스트 (Page {page})</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {metaList.map(({ id, base }) => (
                    <Link to={`/viewer/${id}`} key={id} className="hover:opacity-80 transition">
                        <img
                            src={`${folderPrefix}/${id}/${base}`}
                            alt={id}
                            className="w-full h-auto rounded shadow"
                        />
                        <p className="text-center mt-2 text-sm">{id}</p>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center space-x-4">
                <Link
                    to="/viewer?page=1"
                    className={`px-3 py-1 rounded ${
                        page === "1" ? "bg-indigo-500 text-white" : "bg-gray-200"
                    }`}
                >
                    1
                </Link>
                <Link
                    to="/viewer?page=2"
                    className={`px-3 py-1 rounded ${
                        page === "2" ? "bg-indigo-500 text-white" : "bg-gray-200"
                    }`}
                >
                    2
                </Link>
            </div>
        </div>
    );
}

export default ViewerList;
