import React, { useState } from "react";

const FireWorks = () => {
  const [isExploded, setIsExploded] = useState(false);

  return (
    <button class="explode-emoji"
      onClick={() => {
        setIsExploded(currState => {
            return (!currState)
        });
      }}
    >
      {isExploded ? "🎇" : "🧨"}
    </button>
  );
};

export default FireWorks;
