import React, { useState, useEffect } from "react";

const anniversaryOptions = [
  {
    title: "父の日",
    description: "お父さんへ「いつもありがとう」と気もちをつたえる日です。",
  },
  {
    title: "暑中見舞いの日",
    description: "あついなつを気づかい、はがきで「げんきでね」とつたえる日です。",
  },
  {
    title: "米百俵デー",
    description: "まなびのたいせつさを思い出す日です。",
  },
  {
    title: "千葉県民の日",
    description: "千葉けんができたことをおいわいする日です。",
  },
  {
    title: "栃木県民の日",
    description: "栃木けんができたことをおいわいする日です。",
  },
];

export default function AnniversarySelectPage({ selected, setSelected, onConfirm }) {
  const [dateStr, setDateStr] = useState("");
  const [weekdayStr, setWeekdayStr] = useState("");

  useEffect(() => {
    const weekdays = ["にちようび", "げつようび", "かようび", "すいようび", "もくようび", "きんようび", "どようび"];
    const today = new Date();
    const jst = new Date(today.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
    setDateStr(`${jst.getMonth() + 1}月${jst.getDate()}日`);
    setWeekdayStr(weekdays[jst.getDay()]);
  }, []);

  const toggleSelect = (title) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>📅 {dateStr}（{weekdayStr}）</h1>
      <h2>先生が記念日をえらぶページ</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "30px" }}>
        {anniversaryOptions.map((anniv, i) => (
          <div key={i} style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "15px", width: "250px" }}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(anniv.title)}
                onChange={() => toggleSelect(anniv.title)}
              />{" "}
              <strong>{anniv.title}</strong>
            </label>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>{anniv.description}</p>
          </div>
        ))}
      </div>

      <button
        style={{ marginTop: "30px", padding: "10px 20px", fontSize: "16px", backgroundColor: "#2d8fdd", color: "white", border: "none", borderRadius: "10px", cursor: "pointer" }}
        onClick={onConfirm}
      >
        子どもに見せる
      </button>
    </div>
  );
}