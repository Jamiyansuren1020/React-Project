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
      {isExploded ? "๐" : "๐งจ"}
    </button>
  );
};

export default FireWorks;
