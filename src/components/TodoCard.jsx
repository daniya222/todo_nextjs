"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TodoCard = ({ id, task_title, notes, date }) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [currentTaskTitle, setCurrentTaskTitle] = useState(task_title);
  const [currentNotes, setCurrentNotes] = useState(notes);
  const [currentDate, setCurrentDate] = useState(date);

  async function handleDelete() {
    await fetch("https://v1.appbackend.io/v1/rows/fnG4bYxvhtpl", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([id])
    });
    router.refresh();
  }
  function handleEdit() {
    setIsEdit(true);
  }
  async function handleSave() {
    fetch("https://v1.appbackend.io/v1/rows/fnG4bYxvhtpl", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "_id": id, "notes": currentNotes, "date": currentDate, "task_title": currentTaskTitle })
    });
    router.refresh();
    setIsEdit(false);

  }
  
  return (
    <div>
      <div>
        <div>{id}</div>
        <div>{task_title}</div>
        <div>{notes}</div>
        <div>{date}</div>

      </div>
      
      <button onClick={handleEdit}>EDIT</button>
      <button onClick={handleDelete}>DELETE</button>
      {isEdit && (
        <>
          <input onChange={(e) => setCurrentTaskTitle(e.target.value)} value={currentTaskTitle} />
          <input onChange={(e) => setCurrentNotes(e.target.value)} value={currentNotes} />
          <input onChange={(e) => setCurrentDate(e.target.value)} value={currentDate} />

           <button onClick={handleSave}>Save</button>
        </>
      )}
      
      
    </div>
  );
}

export default TodoCard;
