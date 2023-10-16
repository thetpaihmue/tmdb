import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "../src/Components/Movies";
import ErrorPage from "./Components/Error-Page";
import RootLayout from "./Components/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Movies /> },
        { path: "/movies", element: <Movies /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
