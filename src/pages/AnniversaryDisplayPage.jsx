import React, { useState, useEffect } from "react";

export default function AnniversaryDisplayPage({ selected }) {
  const [dateStr, setDateStr] = useState("");
  const [weekdayStr, setWeekdayStr] = useState("");

  useEffect(() => {
    const weekdays = ["にちようび", "げつようび", "かようび", "すいようび", "もくようび", "きんようび", "どようび"];
    const today = new Date();
    const jst = new Date(today.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
    setDateStr(`${jst.getMonth() + 1}月${jst.getDate()}日`);
    setWeekdayStr(weekdays[jst.getDay()]);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>📅 {dateStr}（{weekdayStr}）</h1>
      <h2>🎉 きょうの記念日</h2>
      {selected.map((item, i) => (
        <div key={i} style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{item}</h3>
        </div>
      ))}
    </div>
  );
}