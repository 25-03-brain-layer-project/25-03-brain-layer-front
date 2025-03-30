// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import ViewerList from "./pages/Viewer/ViewerList";
import ViewerDetail from "./pages/Viewer/ViewerDetail"; // ← 기존 ViewerDetail.js

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="viewer" element={<ViewerList />} />
                    <Route path="viewer/:caseId" element={<ViewerDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
