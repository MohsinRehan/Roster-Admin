import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTES_LIST } from "./pages/routes";
import MainLayout from "./Layout";

function App() {
  const routes = createRoutesFromElements(
    <>
      {ROUTES_LIST.map(({ path, element: Component }, i) => (
        <Route element={<MainLayout />}>
          <Route key={"route-list-" + i} path={path} element={<Component />} />
        </Route>
      ))}
    </>
  );
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
