import Container from "../components/ListsContainer.tsx";

const Home: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200'>
      <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
        Let’s Tackle Your To-Dos!
      </h1>
      <Container />
    </div>
  );
};

export default Home;
