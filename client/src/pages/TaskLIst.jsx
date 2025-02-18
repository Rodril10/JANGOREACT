import { useEffect, useState } from "react";
import { getAllTask } from "../api/task.api"
import { TaskCard} from "../components/TaskCard";


export function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    async function loadTask(){
      const res = await getAllTask();
      setTasks(res.data);
    }
    loadTask()
  },[]);
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} Task={task} />
      ))}
    </div>
  );
}
