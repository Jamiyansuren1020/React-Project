import React, { useState } from "react";

export default function LocalStoragePlayground() {
  const [sampleData, setSampleData] = useState("");
  return (
    <div>
      {sampleData}
      <br />
      <input
        placeholder="type something"
        value={sampleData}
        onChange={(e) => setSampleData(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          localStorage.setItem("setSample", sampleData);
        }}
      >
        Save to localStorage
      </button>
      <button
        onClick={() => {
          const localStorageData = localStorage.getItem("setSample");
          if (localStorageData) {
            setSampleData(localStorageData);
          } else {
            alert("no data found");
          }
        }}
      >
        Read from localStorage
      </button>
      <br />
      <button
        onClick={() => {
          localStorage.removeItem("sampleData");
        }}
      >
        Remove localStorage Item
      </button>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear localStorage
      </button>
    </div>
  );
}
