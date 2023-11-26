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
    <div>
      <input value={task_title} onChange={(e) => setTask_title(e.target.value)} placeholder='Task Title' />
      <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder='Notes' />
      <input value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' />
      
      <button onClick={createTodo}>save</button>
    </div>
  );
}

export default TodoInput;
