"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TodoInput = () => {
  const router = useRouter();
  const [task_title, setTask_title] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  async function createTodo() {
    try {
      const res = await fetch("https://v1.appbackend.io/v1/rows/fnG4bYxvhtpl", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ "notes": notes, "date": date, "task_title": task_title }])
      });

      const data = await res.json();
      console.log(data);
      router.refresh();
      setTask_title("");
      setNotes("");
      setDate("");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  
  return (
    <div className="todo-input card-wrap bg-white my-4">
      <h2 className="text-purple-950 px-5 pt-3 font-bold text-xl">Add Task</h2>
      <div className="todo-card flex-col">
        <input className="input" value={task_title} onChange={(e) => setTask_title(e.target.value)} placeholder='Task Title' />
       
        <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' />
        <textarea className="input" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder='Notes' />
        
        <button className="primary mt-2" onClick={createTodo}>save</button>

      </div>
     
    </div>
  );
}

export default TodoInput;
