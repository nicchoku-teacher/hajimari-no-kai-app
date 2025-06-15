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

export default function AnniversaryPage() {
  const [selected, setSelected] = useState([]);
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

  const selectedItems = anniversaryOptions.filter((a) => selected.includes(a.title));

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>📅 {dateStr}（{weekdayStr}）</h1>

      {selectedItems.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>🎉 えらばれた記念日</h2>
          {selectedItems.map((item, i) => (
            <div key={i} style={{ marginTop: "10px" }}>
              <h3 style={{ fontSize: "18px" }}>{item.title}</h3>
              <p style={{ fontSize: "16px" }}>{item.description}</p>
            </div>
          ))}
        </div>
      )}

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
    </div>
  );
}