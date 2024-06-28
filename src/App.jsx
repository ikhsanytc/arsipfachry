import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/index.html",
      element: <Home />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <div className="bg-white w-full p-3 fixed bottom-0 bg-opacity-80 backdrop-filter backdrop-blur">
        <h1 className="text-lg font-semibold">Made By M Lazuardi Alghifary</h1>
      </div>
    </>
  );
}

export default App;
