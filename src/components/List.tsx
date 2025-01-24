import { useState } from "react";

interface Props {
  category: string;
  tasks: string[];
}

interface Task {
  text: string;
  checked: boolean;
}

const List: React.FC<Props> = ({ category, tasks: initialTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(
    initialTasks.map((task) => ({ text: task, checked: false }))
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
    <div className='bg-gray-100 rounded-3xl min-w-[40%] p-4 mx-4 shadow-md flex flex-col'>
      <h2 className='font-bold text-2xl mb-4 text-gray-700'>{category}</h2>
      <ul className='overflow-y-auto max-h-64 minimal-scrollbar'>
        {tasks.map((task, index) => (
          <div
            key={index}
            className='flex items-center p-2 hover:bg-gray-200 rounded-xl cursor-pointer transition-all duration-500 ease-in-out transform'
            onClick={() => toggleCheck(index)}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center mr-3 transition-colors ${
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
              className={`text-gray-700 ${
                task.checked ? "line-through opacity-50" : ""
              }`}
            >
              {task.text}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
