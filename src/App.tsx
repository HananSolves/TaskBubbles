import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
