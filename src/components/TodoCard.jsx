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
    <div className="todo-card">
     
      <div>
        {isEdit ? <input className="input" onChange={(e) => setCurrentTaskTitle(e.target.value)} value={currentTaskTitle} /> : <div className="font-bold text-lg capitalize">{task_title}</div>}
        
        {isEdit ? <input type="date" className="input" onChange={(e) => setCurrentDate(e.target.value)} value={currentDate} /> : <div className="text-[12px] capitalize">{date}</div>}

        {isEdit ? <textarea className="input" onChange={(e) => setCurrentNotes(e.target.value)} value={currentNotes} /> : <div className="text-[12px]">{notes}</div>}
        
        {isEdit ? <button className="primary" onClick={handleSave}>Save</button> : ""

        }

        
        

      </div>
      {isEdit ? "" : <div className="w-[60px] flex justify-end">
        <button onClick={handleEdit}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
          

      </button>
      <button onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>

      </button>
        
      </div>}
      
      
     
     
       
      
      
    </div>
  );
}

export default TodoCard;
