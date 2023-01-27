import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "@/pages/Home"
import Navigation from "@/layout/Navigation"

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
