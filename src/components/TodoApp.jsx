import CalendarComp from "./CalendarComp";
import TodoCard from "./TodoCard";
import TodoInput from './TodoInput';

async function getTodos() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fnG4bYxvhtpl", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function TodoApp() {
  const { data } = await getTodos();
  return (
    <div className="">
     
      <div>
       {data.map(({ _id, task_title, notes, date }) => {
          return (
             <TodoCard
              key={_id}
              id={_id}
              task_title={task_title}
              notes={notes}
              date={date}
            
            />
          );
        })}
      </div>
      <TodoInput/>
    </div>
    
    
   
  )
}
