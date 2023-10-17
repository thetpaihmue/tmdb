import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "../src/Components/Movies";
import ErrorPage from "./Components/Error-Page";
import RootLayout from "./Components/RootLayout";
import MovieDetail from "./Components/MovieDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Movies /> },
        { path: "/movies", element: <Movies /> },
        { path: "/movie/:id", element: <MovieDetail /> },
        { path: "/movies?search=:searchTerm", element: <Movies /> },
        { path: "/*", element: <ErrorPage /> },
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
