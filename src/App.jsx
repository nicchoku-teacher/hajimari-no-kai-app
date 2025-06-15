import React, { useState } from "react";
import AnniversarySelectPage from "./pages/AnniversarySelectPage";
import AnniversaryDisplayPage from "./pages/AnniversaryDisplayPage";

export default function App() {
  const [selected, setSelected] = useState([]);
  const [showDisplay, setShowDisplay] = useState(false);

  return showDisplay ? (
    <AnniversaryDisplayPage selected={selected} />
  ) : (
    <AnniversarySelectPage selected={selected} setSelected={setSelected} onConfirm={() => setShowDisplay(true)} />
  );
}