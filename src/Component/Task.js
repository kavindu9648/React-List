import { useState } from "react";
import "./Task.css";

const Task = (props) => {
  const [task, setTask] = useState(props.task);

  const buttonClick = () => {
    setTask("Task Complete");
  };

  return (
    <div className="task-card">
      <p>{task}</p>
      <button className="task-button done-button" onClick={buttonClick}>
        Done
      </button>
      <button className="task-button delete-button">Delete</button>
    </div>
  );
};
export default Task;
