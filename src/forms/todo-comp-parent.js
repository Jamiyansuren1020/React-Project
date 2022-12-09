import React, { useState } from "react";

export default function ToDoComp() {
  const [toDoList, setToDoList] = useState([]);
  const [formValue, setFormValue] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setToDoList((currState) => ([...currState, {
        title: formValue,
        createdDate: new Date().toDateString(),
        isComplete:false
    }]));
    setFormValue("")
  };
  console.log(toDoList)
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          enter to do
          <input
            type="text"
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </label>
        <div>
          {toDoList.map((item, itemIdx) => (
            <div key={itemIdx}>{item.title}</div>
          ))}
        </div>
      </form>
    </div>
  );
}
