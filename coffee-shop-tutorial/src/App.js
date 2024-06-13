import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/aboutus", element: <AboutUs />},
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
