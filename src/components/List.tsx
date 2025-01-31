import { useState } from "react";

interface Props {
  category: string;
  receivedTasks: string[];
}

interface Task {
  text: string;
  checked: boolean;
}

const List: React.FC<Props> = ({ category, receivedTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(
    receivedTasks.map((task) => ({ text: task, checked: false }))
  );

  const toggleCheck = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    const [toggledTask] = updatedTasks.splice(index, 1);
    if (toggledTask.checked) {
      updatedTasks.push(toggledTask);
    } else {
      updatedTasks.unshift(toggledTask);
    }
    setTasks(updatedTasks);
  };

  return (
    <div className='bg-slate-100 rounded-3xl shadow-md p-4 mx-2 min-w-[40vw]'>
      <h1 className='font-bold text-2xl mb-3'>{category}</h1>
      <div className='overflow-y-auto h-[40vh] minimal-scrollbar'>
        {tasks.map((task, index) => (
          <div
            className='flex items-center p-2 hover:bg-gray-200 rounded-xl cursor-pointer active:cursor-grab'
            onClick={() => {
              toggleCheck(index);
            }}
          >
            <div
              className={` w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center transition-colors mr-3 ${
                task.checked ? "bg-blue-500 border-blue-500" : ""
              }`}
            >
              {task.checked && (
                <svg
                  className='w-3 h-3 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              )}
            </div>
            <li
              key={index}
              className={`text-gray-700 list-none ${
                task.checked ? "line-through opacity-50" : ""
              }`}
            >
              {task.text}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
