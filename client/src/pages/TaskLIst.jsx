import { useEffect, useState } from "react";
import { getAllTask } from "../api/task.api";
import { useNavigate } from "react-router-dom";

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate(); // Mueve la declaración aquí

  useEffect(() => {
    async function loadTask() {
      const res = await getAllTask();
      setTasks(res.data);
    }
    loadTask();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <div
          key={task.id} // Añadir un key único para cada elemento
          className="bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer"
          style={{ background: "gray" }}
          onClick={() => navigate(`/task/${task.id}`)} // Cambia Task a task
        >
          <h1 className="font-bold uppercase">{task.title}</h1> {/* Cambia Task a task */}
          <p>{task.description}</p> {/* Cambia Task a task */}
          <hr />
        </div>
      ))}
    </div>
  );
}
