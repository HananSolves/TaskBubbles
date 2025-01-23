import { useState } from "react";

interface Props {
  category: string;
  tasks: string[];
}

const List: React.FC<Props> = ({ category, tasks }) => {
  const [checkedList, setCheckedList] = useState<boolean[]>(
    new Array(tasks.length).fill(false)
  );

  const toggleCheck = (index: number) => {
    const updatedCheckedList = [...checkedList];
    updatedCheckedList[index] = !updatedCheckedList[index];
    setCheckedList(updatedCheckedList);
  };

  return (
    <div className='bg-gray-100 rounded-3xl min-w-[400px] p-4 mx-4 shadow-md flex flex-col  minimal-scrollbar'>
      <h2 className='font-bold text-2xl mb-4 text-gray-700'>{category}</h2>
      <ul className='overflow-y-auto max-h-64'>
        {tasks.map((task, index) => (
          <div
            key={index}
            className='flex items-center p-2 hover:bg-gray-200 rounded-xl cursor-pointer transition-colors'
            onClick={() => toggleCheck(index)}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center mr-3 transition-colors ${
                checkedList[index] ? "bg-blue-500 border-blue-500" : ""
              }`}
            >
              {checkedList[index] && (
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
                checkedList[index] ? "line-through opacity-50" : ""
              }`}
            >
              {task}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
