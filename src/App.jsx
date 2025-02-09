import Lymi from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Lymi />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
