import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatsPage from "./routes/CatsPage";
import UploadCatPage from "./routes/UploadCatPage";
import PageNotFound from "./routes/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CatsPage />,
  },
  {
    path: "/upload",
    element: <UploadCatPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
