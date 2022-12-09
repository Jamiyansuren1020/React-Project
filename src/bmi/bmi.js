import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import "./bmi.css"

const compare = (bmiInfo) => {
  let bmi = bmiInfo.bmi;

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal Weight";
  } else {
    return "Overweight";
  }
};

function BMIndex() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [yourResult, setYourResult] = useState("")
  const [weightPound, setWeightPound] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [bmis, setBmis] = useState([
    {
      day: 0,
      bmi: 0,
    },
  ]);
  const [days, setDays] = useState(1);
  const [bmiResult, setBmiResult] = useState("");

  useEffect(() => {
    if (bmis.length > 0) {
      setBmiResult(compare(bmis[bmis.length - 1]));
    }
  }, [bmis]);

  const calculate = () => {
    setDays((currState) => {
      return currState + 1;
    });
    setBmis((currState) => {
      return [
        ...currState,
        {
          day: days,
          bmi: weight / (height / 100) ** 2,
        },
      ];
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
      > 
        <label className="height">
          {" "}
          Height
          <input className="height input"
            type="number"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </label>
        <label className="weight">
          {" "}
          Weight
          <input className="weight input"
            type="number"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </label>
        <label>
          Your Result
          <input type="number"
          value={bmis}/>
        </label>
        <button type="submit" className="submit">Calculate</button>
        <button>Change to Pound</button>
      </form>

      {bmis.length > 1 && (
        <div className="compared">
          <div className="result">Result:</div>
          {bmiResult}
        </div>
      )}
      <Chart
        chartType="ScatterChart"
        data={[
          ["time", "bmi"],
          ...bmis.map((bmi) => {
            return [bmi.day, bmi.bmi];
          }),
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
      <div>{JSON.stringify(bmis, null, 2)}</div>
    </div>
  );
}

export default BMIndex;
