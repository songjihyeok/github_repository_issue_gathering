import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "@/pages/Home"
import Navigation from "@/layout/Navigation"
import Nopage from "@/pages/Nopage"
import Bookmark from "./pages/Bookmark";
import Issue from "./pages/Issue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true}></Navigate>
  },
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/nopage",
        element: <Nopage />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/bookmark",
        element: <Bookmark />
      },
      {
        path: "/issue",
        element: <Issue />
      },
    ]
  },

  {
    path: "/*",
    element: <Navigate to="/nopage" replace={true}></Navigate>
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
