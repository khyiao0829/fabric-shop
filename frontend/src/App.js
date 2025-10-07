import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [fabrics, setFabrics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/fabrics")
      .then((res) => setFabrics(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🧵 원단 목록</h1>
      {fabrics.length === 0 ? (
        <p className="text-center text-gray-500">등록된 원단이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-white shadow-md p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-indigo-700">{fabric.name}</h2>
              <p>🎨 색상: {fabric.color}</p>
              <p>🧶 소재: {fabric.material}</p>
              <p>💰 가격: {fabric.price.toLocaleString()}원</p>
              <p>📦 재고: {fabric.stock}개</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
