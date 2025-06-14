import React, { useState } from "react";

const anniversaryOptions = [
  {
    title: "世界献血者デー",
    description: "けんけつをして いのちを すくうことの たいせつさを かんがえる日です。",
  },
  {
    title: "手羽先記念日",
    description: "てばさきの おいしさを たのしむ日です。",
  },
  {
    title: "認知症予防の日",
    description: "ものわすれや びょうきに ならないように けんこうに きをつける日です。",
  },
];

export default function AnniversaryPage() {
  const [selected, setSelected] = useState(anniversaryOptions[0]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>📅 6月14日（どようび）</h1>
      <h2 style={{ fontSize: "20px", marginTop: "10px" }}>🎉 {selected.title}</h2>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>{selected.description}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        {anniversaryOptions.map((anniv, i) => (
          <div key={i} style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "15px", width: "250px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>🔘 {anniv.title}</h3>
            <p style={{ fontSize: "16px", margin: "10px 0" }}>{anniv.description}</p>
            <button
              onClick={() => setSelected(anniv)}
              style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              これを表示する
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}