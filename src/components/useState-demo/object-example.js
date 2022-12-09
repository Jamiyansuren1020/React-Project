import React, { useState } from "react";

const DemoUseState = () => {
  const [bootcamp, setBootcamp] = useState({
    studentCount: 13,
    isPartTime: true,
    isFinished: false,
  });
  return (
    <div>
      <pre>{JSON.stringify(bootcamp, null, 2)}</pre>

      {bootcamp.isFinished && <div>Don't forget to do your homework!</div>}
      <button
        onClick={() => {
          setBootcamp((currState) => {
            return {
              ...currState,
              isFinished: !currState.isFinished,
            };
          });
        }}
      >
        {bootcamp.isFinished ? 'Finished' : bootcamp.isPartTime ? 'Finish class' : 'Still'}
      </button>
    </div>
  );
};

export default DemoUseState;
