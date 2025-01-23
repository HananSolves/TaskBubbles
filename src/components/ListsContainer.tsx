import List from "./List.tsx";

const ListsContainer: React.FC = () => {
  const lists = {
    University: [
      "Attend lecture on Machine Learning.",
      "Submit the assignment on Data Structures.",
      "Prepare for the midterm exam.",
      "Join the study group for group project discussion.",
      "Attend the guest seminar on AI.",
    ],
    Friend: [
      "Plan a weekend hangout.",
      "Buy a birthday gift for a friend.",
      "Call to catch up with an old friend.",
      "Help a friend with their job application.",
      "Organize a gaming night.",
    ],
    Family: [
      "Schedule a family dinner.",
      "Call grandparents to check on their health.",
      "Help siblings with homework or studies.",
      "Take the family out for a movie or picnic.",
      "Assist with house maintenance tasks.",
    ],
    Work: [
      "Complete the monthly report.",
      "Attend the team meeting at 10 AM.",
      "Finish coding the new feature.",
      "Review a colleague’s pull request.",
      "Schedule a one-on-one with the manager.",
    ],
    Home: [
      "Do the laundry.",
      "Clean the kitchen.",
      "Restock groceries for the week.",
      "Water the plants in the garden.",
      "Organize the closet.",
    ],
    Programming: [
      "Solve 5 problems on LeetCode or HackerRank.",
      "Watch a tutorial on React or TypeScript.",
      "Contribute to an open-source project.",
      "Refactor the codebase for better readability.",
      "Build a small side project, like a to-do app.",
      "Explore and build a small project using Vue.js.",
      "Learn how to use Redux for state management in React.",
      "Experiment with Three.js for 3D animations in the browser.",
    ],
  };

  return (
    <div className='bg-white w-3/4 rounded-3xl shadow-2xl p-8'>
      <h1 className='text-6xl font-bold text-center mb-8 text-gray-800'>
        Tasks
      </h1>

      <div className='overflow-x-auto pb-4 minimal-scrollbar'>
        <div className='flex'>
          {Object.entries(lists).map(([category, tasks]) => (
            <List key={category} category={category} tasks={tasks} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListsContainer;
