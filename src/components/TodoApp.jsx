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
    <div className="flex flex-col items-center justify-center wrap-app w-sm lg:w-[600px] bg-grey-light rounded-3xl border-white border-2 overflow-hidden">

      <div className="bg-purple-950 h-[100px] w-full flex items-start justify-center pt-5">
        <h1 className="text-white text-center font-bold text-2xl">My Todo List</h1>
      </div>
      <div className="flex space-x-5 items-start mx-6">
        <div className="bg-white card-wrap mt--20 card-1">
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
        <TodoInput />
      </div>
    </div>
    
    
   
  )
}
