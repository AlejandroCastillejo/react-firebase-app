import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { firebaseApp } from "./firebase";
import paths from "./constants/paths";

import { HomePage, ListPage, Login, Signup } from "./pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <HomePage />,
  },
  {
    path: `${paths.RESULTS}/:page`,
    element: <ListPage />,
  },
  {
    path: paths.LOGIN,
    element: <Login />,
  },
  {
    path: paths.SIGNUP,
    element: <Signup />,
  },
]);

function App() {
  const auth = getAuth(firebaseApp);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
